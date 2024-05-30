import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { base64Logo } from '../base64Data';
import { useFontSize } from './FontSizeContext';

export default function ProfileViewScreen({ route, navigation }) {
  const { staff } = route.params;
  const { fontSize } = useFontSize();

  return (
    <View style={{ ...styles.container, fontSize }}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: `data:image/png;base64,${base64Logo}` }} style={styles.logo} />
      </View>
      <Text style={{ ...styles.title, fontSize }}>Staff Information</Text>
      <Text style={{ ...styles.text, fontSize }}>Name: {staff.name}</Text>
      <Text style={{ ...styles.text, fontSize }}>Phone: {staff.phone}</Text>
      <Text style={{ ...styles.text, fontSize }}>Department: {staff.department}</Text>
      <View style={styles.addressContainer}>
        <Text style={{ ...styles.addressText, fontSize }}>
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
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
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
