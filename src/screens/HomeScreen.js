import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const HomeScreen = ({ navigation }) => {
  const { themeStyle } = useTheme();
  const { t } = useLanguage();

  return (
    <View style={[styles.container, { backgroundColor: themeStyle.background }]}>
      <Text style={[styles.text, { color: themeStyle.text }]}>{t.welcome}</Text>
      <Button title={t.settings} onPress={() => navigation.navigate('Settings')} />
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
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;