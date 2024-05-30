import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { base64Logo } from '../base64Data';
import { useFontSize } from './FontSizeContext';

const NewAccountScreen = ({ navigation }) => {
  const { fontSize } = useFontSize();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = async () => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);

      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');
      console.log('Saved email:', savedEmail);
      console.log('Saved password:', savedPassword);

      Alert.alert('New Account Created', `Email: ${email}\nPassword: ${password}`);
      
      navigation.goBack();
    } catch (error) {
      console.error('Error saving account information:', error);
      Alert.alert('Error', 'Failed to create account. Please try again later.');
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ ...styles.container, fontSize }}>
        <Image
          source={{ uri: `data:image/png;base64,${base64Logo}` }}
          style={styles.logo}
        />
        <TextInput
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          style={{ ...styles.input, fontSize }}
        />
        <TextInput
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
          style={{ ...styles.input, fontSize }}
        />
        <Button title="Create Account" onPress={handleCreateAccount} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 14, 
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});

export default NewAccountScreen;
