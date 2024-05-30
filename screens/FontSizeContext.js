import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const loadFontSize = async () => {
      try {
        const savedFontSize = await AsyncStorage.getItem('fontSize');
        if (savedFontSize) {
          setFontSize(parseInt(savedFontSize, 10));
        }
      } catch (error) {
        console.error('Failed to load font size', error);
      }
    };
    loadFontSize();
  }, []);

  const saveFontSize = async (size) => {
    try {
      await AsyncStorage.setItem('fontSize', size.toString());
    } catch (error) {
      console.error('Failed to save font size', error);
    }
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
    saveFontSize(size);
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, handleFontSizeChange }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);
