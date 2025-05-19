import { View, Text, StyleSheet, Button } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type DetailRouteProp = RouteProp<RootStackParamList, "Detail">;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Detail">;

export default function DetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { meal } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{meal.strMeal}</Text>
      <Text>ID: {meal.idMeal}</Text>
      <Button title="Ver en Mapa" onPress={() => navigation.navigate("Map")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
});
