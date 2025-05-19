import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen/DetailScreen";
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";
import MapScreen from "./src/screens/MapScreen/MapScreen";

import { Meal } from "./src/types/Meal";

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Detail: { meal: Meal };
  Map: { area?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
