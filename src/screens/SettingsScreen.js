import React from 'react';
import { View, Text, StyleSheet, Switch, Picker } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const SettingsScreen = () => {
  const { theme, toggleTheme, themeStyle } = useTheme();
  const { language, changeLanguage, t } = useLanguage();

  return (
    <View style={[styles.container, { backgroundColor: themeStyle.background }]}>
      <Text style={[styles.label, { color: themeStyle.text }]}>{t.toggleTheme}</Text>
      <Switch value={theme === 'dark'} onValueChange={toggleTheme} />

      <Text style={[styles.label, { color: themeStyle.text }]}>{t.selectLanguage}</Text>
      <Picker
        selectedValue={language}
        style={[styles.picker, { color: themeStyle.text }]}
        onValueChange={(itemValue) => changeLanguage(itemValue)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Español" value="es" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default SettingsScreen;