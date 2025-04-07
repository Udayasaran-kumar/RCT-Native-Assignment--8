import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const translations = {
  en: {
    welcome: 'Welcome to the Home Screen!',
    settings: 'Settings',
    selectLanguage: 'Select Language',
    toggleTheme: 'Toggle Theme',
  },
  es: {
    welcome: '¡Bienvenido a la pantalla de inicio!',
    settings: 'Ajustes',
    selectLanguage: 'Seleccionar idioma',
    toggleTheme: 'Cambiar tema',
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLang = await AsyncStorage.getItem('language');
      if (storedLang) setLanguage(storedLang);
    };
    loadLanguage();
  }, []);

  const changeLanguage = async (lang) => {
    setLanguage(lang);
    await AsyncStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);