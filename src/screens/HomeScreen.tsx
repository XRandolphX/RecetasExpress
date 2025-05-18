import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ListRenderItem,
} from "react-native";
import { getMeals } from "../services/api";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Meal = {
  idMeal: string;
  strMeal: string;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState<Meal[]>([]);

  const fetchMeals = async (query: string = "") => {
    const data = await getMeals(query);
    setMeals(data || []);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchMeals(search);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  const renderItem: ListRenderItem<Meal> = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Detail")}
      >
        <Text>{item.strMeal}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar receta..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 16 },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: "#eee" },
});
