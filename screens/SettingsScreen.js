// SettingsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
import { useFontSize } from './FontSizeContext';

const SettingsScreen = ({ navigation }) => {
  const { fontSize, handleFontSizeChange } = useFontSize();

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, fontSize }}>Adjust Font Size</Text>
      <Slider
        style={styles.slider}
        minimumValue={10}
        maximumValue={30}
        step={1}
        value={fontSize}
        onValueChange={handleFontSizeChange}
      />
      <Text style={{ ...styles.text, fontSize }}>{fontSize}px</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    marginBottom: 16,
    textAlign: 'center',
  },
  slider: {
    width: '80%',
    height: 40,
  },
});

export default SettingsScreen;
