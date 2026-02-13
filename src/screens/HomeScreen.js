import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { UseLocation } from '../components/UseLocationComponent';
import { MapSection } from '../components/MapComponnent';
import { RestaurantCard } from '../components/RestCardComponent';

import { filterItem } from '../utils/filterItem';
import { FilterModal } from '../components/FilterModal';

const restaurantCardData = require('../utils/restaurantCard.json');



export default function HomeScreen() {
  const { userLocation } = UseLocation();
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [restData, setRestData] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    
    setRestData(restaurantCardData);
    getDrivingDistance(userLocation, restaurantCardData);

  }, [userLocation]);

  const handleApply = type => {
    if (type === 'rating') {
      const sorted = [...restData].sort((a, b) => b.rating - a.rating);
      setRestData(sorted);
    }

    if (type === 'distance') {
      const sorted = [...restData].sort((a, b) => a.distanceValue - b.distanceValue);
      setRestData(sorted);
    }

    setIsFilterVisible(false);
  };

  const getDrivingDistance = async (origin, restaurants) => {
    try {
      console.log('Total places:', restaurants.length);

      for (let index = 0; index < restaurants.length; index++) {
        const element = restaurants[index];

        const url =
          `https://maps.googleapis.com/maps/api/distancematrix/json?` +
          `origins=${origin.latitude},${origin.longitude}` +
          `&destinations=${element.latitude},${element.longitude}` +
          `&mode=driving` +
          `&key=AIzaSyBRbciqkTflpeYXRTJBZlDQXgcwL9g118o`;

        const response = await fetch(url);

        if (!response.ok) continue;

        const data = await response.json();

        if (
          !data.rows?.[0]?.elements?.[0] ||
          data.rows[0].elements[0].status !== 'OK'
        )
          continue;

        const distanceData = data.rows[0].elements[0];
        setRestData(prev =>
          prev.map(item =>
            item.id === element.id
              ? {
                  ...item,
                  distanceText: distanceData.distance.text,
                  distanceValue: distanceData.distance.value,
                  durationText: distanceData.duration.text,
                  durationValue: distanceData.duration.value,
                }
              : item,
          ),
        );
      }

    } catch (error) {
      console.log('getDrivingDistance error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.searchContainer}>
        <MaterialIcons
          name="search"
          size={20}
          color="#000"
          style={{ marginLeft: 30 }}
        />
        <TextInput
          placeholder="Search for restaurants..."
          style={styles.searchInput}
        />
      </View>
      <FilterModal
        isVisible={isFilterVisible}
        onClose={() => setIsFilterVisible(false)}
        onApply={handleApply}
      />
      <View
        style={[
          styles.filtersContainer,
          { marginBottom: isMapVisible ? 0 : 20 },
        ]}
      >
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => {
            setIsFilterVisible(true);
          }}
        >
          <MaterialIcons name="list" size={20} color="#000" />
        </TouchableOpacity>
        <FlatList
          data={filterItem}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemTextBtn}>
              <MaterialIcons name={item.icon} size={15} color="#000" />
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      {isMapVisible && <MapSection userLocation={userLocation} />}

      <View style={styles.container2}>
        <View style={styles.handleContainer}>
          <MaterialIcons
            name="remove"
            size={50}
            color="gray"
            style={styles.handleIcon}
          />
        </View>

        <FlatList
          style={styles.restaurantList}
          data={restData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <RestaurantCard
              item={item}
              onDirectionPress={() => setIsMapVisible(!isMapVisible)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  searchContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 2,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  filtersContainer: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
  },
  filterBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    width:40,
  },
  itemTextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    margin: 2,
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 5,
    elevation: 2,
  },
  itemText: {
    marginLeft: 5,
    fontSize: 12,
    color: 'black',
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -15,
    elevation: 5,
  },
  handleContainer: {
    width: '100%',
    height: 30,
    alignItems: 'center',
  },
  handleIcon: {
    marginTop: -10,
    opacity: 0.3,
  },
  restaurantList: {
    width: '100%',
    paddingHorizontal: 15,
  },
});
