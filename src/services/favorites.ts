import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "../types/Meal";

const FAVORITES_KEY = "FAVORITE_MEALS";

export const getFavorites = async (): Promise<Meal[]> => {
  const json = await AsyncStorage.getItem(FAVORITES_KEY);
  return json ? JSON.parse(json) : [];
};

export const addFavorite = async (meal: Meal): Promise<void> => {
  const favorites = await getFavorites();
  const exists = favorites.some((fav) => fav.idMeal === meal.idMeal);
  if (!exists) {
    const updated = [...favorites, meal];
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  }
};

export const removeFavorite = async (idMeal: string): Promise<void> => {
  const favorites = await getFavorites();
  const updated = favorites.filter((fav) => fav.idMeal !== idMeal);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
};
