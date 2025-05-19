import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ImageBackground,
} from "react-native";
import { useAuth } from "../../context/AuthContext";
import { styles } from "./styles";

export default function LoginScreen() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Campos Requeridos", "Por favor, completa todos los campos");
      return;
    }

    if (email === "test@demo.com" && password === "123456") {
      login();
    } else {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  };
  return (
    <ImageBackground
      source={require("../../../assets/home.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Inicia Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="black"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Ingresar" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
}
