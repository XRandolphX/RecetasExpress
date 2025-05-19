import React from "react";
import { View, Text, ImageBackground, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { styles } from "./styles";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ImageBackground
      source={require("../../../assets/home.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenido a Recetas Express</Text>
        <Text style={styles.subtitle}>
          Descubre y guarda tus recetas favoritas
        </Text>
        <Button title="Empezar" onPress={() => navigation.navigate("Search")} />
      </View>
    </ImageBackground>
  );
}
