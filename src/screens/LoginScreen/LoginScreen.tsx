import { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function LoginScreen() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "test@demo.com" && password === "123456") {
      login();
    } else {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  };
  return (
    <View>
      <Text>Iniciar Sesión</Text>
      <TextInput />
      <TextInput />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
}
