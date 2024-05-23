import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { base64Logo } from '../base64Data';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    AsyncStorage.getItem('email').then(savedEmail => {
      if (savedEmail) {
        setEmail(savedEmail);
      }
    });

    const loadFontSize = async () => {
      const savedFontSize = await AsyncStorage.getItem('fontSize');
      if (savedFontSize) {
        setFontSize(parseInt(savedFontSize, 10));
      }
    };
    loadFontSize();
  }, []);

  const handleLogin = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');

      if (email === savedEmail && password === savedPassword) {
        navigation.navigate('Search');
      } else {
        Alert.alert('Invalid credentials', 'Please check your email and password.');
      }
    } catch (error) {
      console.error('Error retrieving account information:', error);
      Alert.alert('Error', 'Failed to retrieve account information. Please try again later.');
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{ uri: `data:image/png;base64,${base64Logo}` }}
          style={[styles.logo, { marginTop: -20 }]}
        />
        <Text style={{ fontSize: 20, color: 'black' }}>Staff Access</Text>
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
        <Button title="Login" onPress={handleLogin} />
        <Button title="Forgot Password?" onPress={() => Alert.alert('Forgot Password', 'Reset link has been sent to your email.')} />
        <Button title="Create Account" onPress={() => navigation.navigate('NewAccount')} />
        <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
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

export default LoginScreen;
