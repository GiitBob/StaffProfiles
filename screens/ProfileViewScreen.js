import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { base64Logo } from '../base64Data';

export default function ProfileViewScreen({ route, navigation }) {
  const { staff } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: `data:image/png;base64,${base64Logo}` }} style={styles.logo} />
      </View>
      <Text style={styles.title}>Staff Information</Text>
      <Text style={styles.text}>Name: {staff.name}</Text>
      <Text style={styles.text}>Phone: {staff.phone}</Text>
      <Text style={styles.text}>Department: {staff.department}</Text>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>
          Address: {staff.address.street}, {staff.address.city}, {staff.address.state}, {staff.address.zip}, {staff.address.country}
        </Text>
      </View>
      <Button title="Edit Profile" onPress={() => navigation.navigate('ProfileEdit', { staff })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  addressContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
