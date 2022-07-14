import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import MapView, { Geojson } from 'react-native-maps';
import chicagoNeighborhoods from './chicagoNeighborhoods.json';

const myPlace = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [64.165329, 48.844287],
      },
    },
  ],
};

export default function App(props) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 41.881832,
          longitude: -87.623177,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Geojson
          tappable
          geojson={chicagoNeighborhoods}
          strokeColor='red'
          strokeWidth={2}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
