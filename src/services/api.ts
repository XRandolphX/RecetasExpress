import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

export const getMeals = async (query: string = "") => {
  try {
    const response = await axios.get(`${API_URL}search.php?s=${query}`);
    return response.data.meals;
  } catch (error) {
    console.log("Error fetching meals", error);
    return [];
  }
};
