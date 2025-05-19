import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  fallbackImage: {
    width: 300,
    height: 200,
    marginBottom: 16,
  },
  fallbackText: {
    textAlign: "center",
    color: "#666",
    fontSize: 16,
  },
});
