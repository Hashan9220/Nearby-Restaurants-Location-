import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable
} from 'react-native';

export const FilterModal = ({ isVisible, onClose, onApply }) => {
  const [selected, setSelected] = useState('rating'); // 'rating' | 'distance'

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose} />

      <View style={styles.box}>
        <Text style={styles.title}>Sort By</Text>

        {/* Rating */}
        <TouchableOpacity
          style={styles.row}
          onPress={() => setSelected('rating')}
        >
          <View style={styles.radio}>
            {selected === 'rating' && <View style={styles.dot} />}
          </View>
          <Text style={styles.label}>Sort by Rating ⭐</Text>
        </TouchableOpacity>

        {/* Distance */}
        <TouchableOpacity
          style={styles.row}
          onPress={() => setSelected('distance')}
        >
          <View style={styles.radio}>
            {selected === 'distance' && <View style={styles.dot} />}
          </View>
          <Text style={styles.label}>Sort by Distance 📍</Text>
        </TouchableOpacity>

        {/* Button */}
        <TouchableOpacity
          style={styles.applyBtn}
          onPress={() => onApply(selected)}
        >
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333',
  },
  label: {
    fontSize: 14,
  },
  applyBtn: {
    marginTop: 10,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
