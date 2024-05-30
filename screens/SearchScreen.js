import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { staffData } from '../screens/staffData';
import { base64Logo } from '../base64Data';
import { useFontSize } from './FontSizeContext';

export default function SearchScreen({ navigation }) {
  const { fontSize } = useFontSize();
  const [searchCriteria, setSearchCriteria] = useState('');
  const [searchResult, setSearchResult] = useState(staffData);

  const handleSearch = () => {
    const result = staffData.filter(staff =>
      staff.name.toLowerCase().includes(searchCriteria.toLowerCase())
    );
    setSearchResult(result);
  };

  return (
    <ScrollView contentContainerStyle={{ ...styles.container, fontSize }}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: `data:image/png;base64,${base64Logo}` }}
          style={styles.logo}
        />
      </View>
      <Text style={{ ...styles.subtitle, fontSize }}>Staff Profiles Directory</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search"
          onChangeText={text => setSearchCriteria(text)}
          value={searchCriteria}
          style={{ ...styles.input, fontSize }}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>🔍</Text>
        </TouchableOpacity>
      </View>
      {searchResult.map((staff, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('ProfileView', { staff })}>
          <Text style={{ ...styles.staffName, fontSize }}>{staff.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('NewProfile')}>
        <Text style={{ ...styles.addButtonLabel, fontSize }}>Add New Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '30%',
    aspectRatio: 2,
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },
  searchButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 3,
  },
  searchButtonText: {
    fontSize: 20,
    color: 'white',
  },
  staffName: {
    fontSize: 16,
    marginBottom: 5,
  },
  addButton: {
    marginTop: 'auto',
    marginBottom: 20,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonLabel: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
