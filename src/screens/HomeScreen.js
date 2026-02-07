import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { filterItem } from '../utils/filterItem';
import { getLocation } from '../utils/getLocation';
import { getPermission } from '../utils/getPermissions';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

const restaurantsData = [
  { id: 1, name: 'Seagate', latOffset: 0.0015, lngOffset: 0.0008, rating: 4.5 },
  {
    id: 2,
    name: 'Moonsea',
    latOffset: -0.002,
    lngOffset: 0.0005,
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Sea Rest',
    latOffset: 0.00015,
    lngOffset: -0.0012,
    rating: 4.4,
  },
  {
    id: 4,
    name: 'OYO Rest',
    latOffset: -0.0025,
    lngOffset: -0.0005,
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Rest Cafe',
    latOffset: 0.001,
    lngOffset: -0.0006,
    rating: 4.5,
  },
];

export default function HomeScreen() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    initLocation();
  }, []);

  const initLocation = async () => {
    const granted = await getPermission();

    if (!granted) {
      Alert.alert('Permission required', 'Location permission is needed');
      return;
    }

    try {
      const location = await getLocation();

      const { latitude, longitude } = location.coords;
      const coords = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };

      setUserLocation(coords);
    } catch (error) {
      console.log('Location error:', error);
    }
  };
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for restaurants Location ..."
          style={styles.searchInput}
        />
      </View>

      <View style={styles.filtersContainer}>
        <FlatList
          style={styles.flatListContainer}
          data={filterItem}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.mapContainer}>
        {userLocation && (
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
                <View style={styles.container}>
                  <View style={styles.markerBubble}>
                    <View style={styles.purpleDot}>
                      <MaterialIcons name="add" size={10} color="#fff" />
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
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    width: '90%',
    height: 45,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 4,
  },
  flatListContainer: {
    width: '100%',
  },
  filtersContainer: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemText: {
    color: 'black',
    fontSize: 14,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 5,
    elevation: 2,
  },
  mapContainer: { width: '100%', height: '35%', padding: 10 },
  map: {
    flex: 1,
  },
  markerBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 2,
    paddingLeft: 3,
    paddingRight: 6,
    // gap: 8,
    overflow: 'hidden',
    borderRadius: 30,

    borderColor: '#6C3EF5',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },
  purpleDot: {
    width: 12,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C3EF5',
    opacity: 0.9,
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
    marginLeft: 22,
    marginTop: -5,

    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 5,
  },
});
