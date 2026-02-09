import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { restaurantsData } from '../utils/data';

export const MapSection = ({ userLocation }) => {
  if (!userLocation) return null;

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={userLocation}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {restaurantsData.map(item => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: userLocation.latitude + item.latOffset,
              longitude: userLocation.longitude + item.lngOffset,
            }}
          >
            <View style={styles.markerContainer}>
              <View style={styles.markerBubble}>
                <View style={styles.purpleDot}>
                  <MaterialIcons name="add" size={8} color="#fff" />
                </View>
                <View>
                  <Text style={styles.markerText}>{item.rating}</Text>
                  <Text style={styles.markerText}>{item.name}</Text>
                </View>
              </View>
              <View style={styles.pointer} />
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: '35%',
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 2,
    paddingLeft: 3,
    paddingRight: 6,
    borderRadius: 30,
    borderColor: '#6C3EF5',
    elevation: 3,
  },
  purpleDot: {
    width: 12,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C3EF5',
    borderRadius: 20,
    marginRight: 4,
  },
  markerText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#000',
  },
  pointer: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    transform: [{ rotate: '45deg' }],
    marginTop: -5,
    elevation: 5,
  },
});