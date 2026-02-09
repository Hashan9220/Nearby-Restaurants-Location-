import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { getPermission } from '../utils/getPermissions';
import { getLocation } from '../utils/getLocation';

export const UseLocation = () => {
  const [userLocation, setUserLocation] = useState(null);

  const initLocation = async () => {
    const granted = await getPermission();
    if (!granted) {
      Alert.alert('Permission required', 'Location permission is needed');
      return;
    }

    try {
      const location = await getLocation();
      const { latitude, longitude } = location.coords;
      setUserLocation({
        latitude,
        longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    } catch (error) {
      console.log('Location error:', error);
    }
  };

  useEffect(() => {
    initLocation();
  }, []);

  return { userLocation, initLocation };
};