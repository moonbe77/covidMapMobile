import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ButtonLink from './ButtonLink';
import CustomButton from './CustomButton';

export default function App() {
  return (
    <NavigationContainer>

      <View style={styles.container}>
        <View style={styles.header}>
          <Text>COVID MAP</Text>
        </View>
        <View>
          <Text>here is where some text goes</Text>
          <ButtonLink
            title="Press Me"
          />
          <CustomButton title="press me!" />
        </View>
        <ExpoStatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    height: '100%',
    paddingTop: StatusBar.currentHeight
  },
  header: {
    display: 'flex',
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '100%',
    maxHeight: '10%',
    marginBottom: 15,
  },
  main: {
    flex: 0.8,
    borderColor: 'blue',
    borderWidth: 1,
    borderStyle: 'solid',
  }
});
