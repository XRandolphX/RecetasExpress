import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 16, paddingBottom: 32 },
  image: { width: 300, height: 200, borderRadius: 12, marginBottom: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
    textAlign: "center",
  },
  instructions: {
    fontSize: 14,
    color: "#333",
    marginVertical: 12,
    textAlign: "justify",
  },
  buttonSpacing: { marginTop: 10, width: "100%" },
});
