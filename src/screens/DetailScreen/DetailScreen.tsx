import {
  View,
  Text,
  Button,
  Image,
  Share,
  Linking,
  ScrollView,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { styles } from "./styles";

type DetailRouteProp = RouteProp<RootStackParamList, "Detail">;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Detail">;

export default function DetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { meal } = route.params;

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Te recomiendo esta receta: ${meal.strMeal}`,
      });
    } catch (error) {
      console.error("Error al compartir: ", error);
    }
  };

  const handleOpenYoutube = () => {
    if (meal.strYoutube) {
      Linking.openURL(meal.strYoutube);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: meal.strMealThumb }}
        style={styles.image}
        resizeMode="cover"
      />
      {/* <Text>ID: {meal.idMeal}</Text> */}
      <Text style={styles.title}>{meal.strMeal}</Text>
      <Text style={styles.subtitle}>{meal.strCategory}</Text>
      <Text style={styles.subtitle}>Origen: {meal.strArea}</Text>
      <Text style={styles.instructions}>{meal.strInstructions}</Text>

      {meal.strYoutube && (
        <View style={styles.buttonSpacing}>
          <Button title="Ver Video en Youtube" onPress={handleOpenYoutube} />
        </View>
      )}

      <View style={styles.buttonSpacing}>
        <Button
          title="Ver en Mapa"
          onPress={() => navigation.navigate("Map")}
        />
      </View>

      <View style={styles.buttonSpacing}>
        <Button title="Compartir receta" onPress={handleShare} />
      </View>
    </ScrollView>
  );
}
