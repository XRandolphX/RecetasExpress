import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ListRenderItem,
  Image,
  SafeAreaView,
} from "react-native";
import { getMeals } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { Meal } from "../../types/Meal";
import { styles } from "./styles";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Search">;

export default function SearchScreen() {
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
        onPress={() => navigation.navigate("Detail", { meal: item })}
      >
        <Image
          source={{ uri: item.strMealThumb }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={{ textAlign: "center" }}>{item.strMeal}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
