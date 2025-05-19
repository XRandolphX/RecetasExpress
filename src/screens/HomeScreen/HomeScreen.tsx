import React from "react";
import { View, Text, ImageBackground, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { styles } from "./styles";
import { useAuth } from "../../context/AuthContext";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { logout } = useAuth();

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
        <View style={{ marginBottom: 16, width: "80%" }}>
          <Button
            title="Empezar"
            onPress={() => navigation.navigate("Search")}
          />
        </View>
        <View style={styles.favorites}>
          <Button
            title="Ver favoritos"
            onPress={() => navigation.navigate("Favorites")}
          />
        </View>
        <View style={styles.logout}>
          <Button title="Cerrar Sesión" onPress={logout} />
        </View>
      </View>
    </ImageBackground>
  );
}
