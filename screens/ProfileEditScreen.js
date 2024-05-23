import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import { staffData } from './staffData';
import { base64Logo } from '../base64Data';

export default function ProfileEditScreen({ route, navigation }) {
  const { staff } = route.params;
  const [name, setName] = useState(staff.name);
  const [phone, setPhone] = useState(staff.phone);
  const [department, setDepartment] = useState(staff.department.toString());
  const [street, setStreet] = useState(staff.address.street);
  const [city, setCity] = useState(staff.address.city);
  const [state, setState] = useState(staff.address.state);
  const [zip, setZip] = useState(staff.address.zip);
  const [country, setCountry] = useState(staff.address.country);

  const handleSave = () => {
    const index = staffData.findIndex(item => item.id === staff.id);
    if (index !== -1) {
      staffData[index] = {
        ...staffData[index],
        name,
        phone,
        department,
        address: {
          street,
          city,
          state,
          zip,
          country,
        },
      };

      Alert.alert('Profile updated', 'The profile has been updated successfully.');
      navigation.navigate('ProfileView', { staff: staffData[index] });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: `data:image/png;base64,${base64Logo}` }}
            style={styles.logo}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text>Name:</Text>
          <TextInput
            placeholder="Name"
            onChangeText={text => setName(text)}
            value={name}
            style={styles.input}
          />
          <Text>Contact Number:</Text>
          <TextInput
            placeholder="Phone"
            onChangeText={text => setPhone(text)}
            value={phone}
            style={styles.input}
          />
          <Text>Department:</Text>
          <TextInput
            placeholder="Department"
            onChangeText={text => setDepartment(text)}
            value={department}
            style={styles.input}
          />
          <Text>Street:</Text>
          <TextInput
            placeholder="Street"
            onChangeText={text => setStreet(text)}
            value={street}
            style={styles.input}
          />
          <Text>City:</Text>
          <TextInput
            placeholder="City"
            onChangeText={text => setCity(text)}
            value={city}
            style={styles.input}
          />
          <Text>State:</Text>
          <TextInput
            placeholder="State"
            onChangeText={text => setState(text)}
            value={state}
            style={styles.input}
          />
          <Text>ZIP:</Text>
          <TextInput
            placeholder="ZIP"
            onChangeText={text => setZip(text)}
            value={zip}
            style={styles.input}
          />
          <Text>Country:</Text>
          <TextInput
            placeholder="Country"
            onChangeText={text => setCountry(text)}
            value={country}
            style={styles.input}
          />
          <Button title="Save" onPress={handleSave} />
          <View style={{ height: 100 }} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: '20%',
    aspectRatio: 2,
    marginBottom: 5,
  },
  contentContainer: {
    flex: 1,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});
