import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen/DetailScreen";
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";
import MapScreen from "./src/screens/MapScreen/MapScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen/FavoritesScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import { AuthProvider, useAuth } from "./src/context/AuthContext";
import { Meal } from "./src/types/Meal";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Search: undefined;
  Detail: { meal: Meal };
  Map: { area?: string };
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
