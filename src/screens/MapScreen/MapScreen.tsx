import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.9028,
          longitude: 12.4964,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        <Marker
          coordinate={{ latitude: 41.9028, longitude: 12.4964 }}
          title="Origen de la receta"
          description="Ubicación simulada"
        />
      </MapView>
    </View>
  );
}
