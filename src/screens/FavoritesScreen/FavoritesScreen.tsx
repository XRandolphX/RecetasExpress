import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ListRenderItem,
  Image,
  Button,
  Alert,
} from "react-native";
import { getFavorites, removeFavorite } from "../../services/favorites";
import { Meal } from "../../types/Meal";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Favorites"
>;

export default function FavoritesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [favorites, setFavorites] = useState<Meal[]>([]);

  const loadFavorites = async () => {
    const data = await getFavorites();
    setFavorites(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadFavorites);
    return unsubscribe;
  }, [navigation]);

  const handleRemoveFavorite = async (mealId: string) => {
    await removeFavorite(mealId);
    Alert.alert("Eliminado", "La receta ha sido eliminada de favoritos.");
    loadFavorites();
  };

  const renderItem: ListRenderItem<Meal> = ({ item }) => (
    <View
      style={{
        marginBottom: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        overflow: "hidden",
        elevation: 2,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { meal: item })}
      >
        <Image
          source={{ uri: item.strMealThumb }}
          style={{ width: "100%", height: 200 }}
          resizeMode="cover"
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            padding: 8,
            textAlign: "center",
          }}
        >
          {item.strMeal}
        </Text>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 8, paddingBottom: 8 }}>
        <Button
          title="Eliminar de favoritos"
          color="#FF6347"
          onPress={() => handleRemoveFavorite(item.idMeal)}
        />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f5f5f5" }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        Tus favoritos
      </Text>
      {favorites.length === 0 ? (
        <Text style={{ textAlign: "center", color: "#666" }}>
          No tienes recetas guardadas.
        </Text>
      ) : (
        <FlatList
          contentContainerStyle={{ paddingBottom: 16 }}
          data={favorites}
          keyExtractor={(item) => item.idMeal}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}
