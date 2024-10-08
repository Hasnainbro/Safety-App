import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safety App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Share Location')}
      >
        <Text style={styles.buttonText}>Share Location</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.emergencyButton]}
        onPress={() => console.log('Emergency Call')}
      >
        <Text style={styles.buttonText}>Emergency Call</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Community')}
      >
        <Text style={styles.buttonText}>Community</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Rewards')}
      >
        <Text style={styles.buttonText}>Rewards</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  emergencyButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;