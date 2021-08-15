import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const ButtonLink = ({ title }) => {

  const onPressHandler = () => {
    alert('You tapped the button!');
  }

  return (
    <Button
      style={styles.button}
      title={title}
      onPress={onPressHandler}
    />
  );
};

export default ButtonLink


const styles = StyleSheet.create({
  button: {
    width: '50%'
  }
})