import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const RestaurantCard = ({ item, onDirectionPress }) => (
  <View style={styles.restaurantCard}>
    <Image source={item.image} style={styles.restaurantImage} />
    <View style={styles.restaurantCardHeader}>
      <Text style={styles.restaurantName}>{item.name}</Text>
      <View style={styles.discountTextContainer}>
        <Text style={styles.discountText}>Discount upto {item.discount}%</Text>
      </View>
    </View>
    <View style={styles.restaurantInfo}>
      <MaterialIcons name="star" size={15} color="gold" />
      <Text style={styles.ratingText}>Rating: {item.rating} |</Text>
      <Text style={styles.addressText}>{item.address}</Text>
    </View>
    <View style={styles.directionButtonContainer}>
      <TouchableOpacity
        onPress={onDirectionPress}
        style={styles.directionButton}
      >
        <MaterialIcons name="directions" size={20} color="#7c3aed" />
        <Text style={styles.directionButtonText}>Direction</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <MaterialIcons name="menu" size={20} color="#fff" />
        <Text style={styles.menuButtonText}>Menu</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const styles = StyleSheet.create({
  restaurantCard: {
    height: 300,
    padding: 10,
    marginBottom: 10,
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  restaurantImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  restaurantCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  discountTextContainer: {
    backgroundColor: '#7c3aed',
    borderRadius: 10,
  },
  discountText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
    marginHorizontal: 8,
    marginVertical: 4,
  },
  restaurantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  addressText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  directionButtonContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  directionButton: {
    flex: 1,
    backgroundColor: '#dbc3f7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  menuButton: {
    flex: 1,
    backgroundColor: '#7c3aed',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  directionButtonText: { color: '#7c3aed', fontWeight: '600' },
  menuButtonText: { color: '#fff', fontWeight: '600' },
});
