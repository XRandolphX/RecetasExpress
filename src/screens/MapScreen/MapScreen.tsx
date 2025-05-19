import { View, Text, Image, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { styles } from "./styles";

type MapRouteProp = RouteProp<RootStackParamList, "Map">;

const areaCoordinates: Record<string, { latitude: number; longitude: number }> =
  {
    Indian: { latitude: 20.5937, longitude: 78.9629 },
    Chinese: { latitude: 35.8617, longitude: 104.1954 },
    Mexican: { latitude: 23.6345, longitude: -102.5528 },
    French: { latitude: 46.6034, longitude: 1.8883 },
    Japanese: { latitude: 36.2048, longitude: 138.2529 },
    Italian: { latitude: 41.8719, longitude: 12.5674 },
  };

export default function MapScreen() {
  const route = useRoute<MapRouteProp>();
  const area = route.params?.area || "Italian";
  const coordinates = areaCoordinates[area] || areaCoordinates["Italian"];

  // Si no estamos en desarrollo
  const isProduction = Platform.OS !== "web" && !__DEV__;

  return (
    <View style={styles.container}>
      {isProduction ? (
        <View>
          <Image
            source={require("../../../assets/map-fallback.jpg")}
            style={styles.fallbackImage}
            resizeMode="contain"
          />
          <Text style={styles.fallbackText}>
            No se pudo cargar el mapa en esta versión. Revisa la configuración
            de Google Maps.
          </Text>
        </View>
      ) : (
        <MapView
          style={styles.map}
          initialRegion={{
            ...coordinates,
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
        >
          <Marker
            coordinate={coordinates}
            title={`Origen: ${area}`}
            description="Ubicación simulada"
          />
        </MapView>
      )}
      ;
    </View>
  );
}
