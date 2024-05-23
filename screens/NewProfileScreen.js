import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { staffData } from './staffData';
import { base64Logo } from '../base64Data';

export default function NewProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');

  const handleSave = () => {
    const newProfile = {
      id: staffData.length + 1,
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

    staffData.push(newProfile);

    Alert.alert('Profile saved', 'The new profile has been saved successfully.');

    navigation.navigate('Search');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: `data:image/png;base64,${base64Logo}` }}
            style={styles.logo}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            placeholder=""
            onChangeText={text => setName(text)}
            value={name}
            style={styles.input}
          />
          <Text style={styles.label}>Contact Number:</Text>
          <TextInput
            placeholder=""
            onChangeText={text => setPhone(text)}
            value={phone}
            style={styles.input}
          />
          <Text style={styles.label}>Department:</Text>
          <TextInput
            placeholder=""
            onChangeText={text => setDepartment(text)}
            value={department}
            style={styles.input}
          />
          <Text style={styles.label}>Street:</Text>
          <TextInput
            placeholder=""
            onChangeText={text => setStreet(text)}
            value={street}
            style={styles.input}
          />
          <Text style={styles.label}>City:</Text>
          <TextInput
            placeholder=""
            onChangeText={text => setCity(text)}
            value={city}
            style={styles.input}
          />
          <Text style={styles.label}>State:</Text>
          <TextInput
            placeholder=""
            onChangeText={text => setState(text)}
            value={state}
            style={styles.input}
          />
          <Text style={styles.label}>ZIP:</Text>
          <TextInput
            placeholder=""
            onChangeText={text => setZip(text)}
            value={zip}
            style={styles.input}
          />
          <Text style={styles.label}>Country:</Text>
          <TextInput
            placeholder=""
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
    marginBottom: 14,
  },
  logo: {
    width: '20%',
    aspectRatio: 2,
    marginBottom: 5,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
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
