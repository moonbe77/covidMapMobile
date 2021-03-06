import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

function CustomButton(props) {
  const [timesPressed, setTimesPressed] = useState(0)
  const [state, setState] = useState('waiting')
  const { title, onPress, screen } = props;


  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={onPress(screen)}
        onPressIn={()=>{setState('pressed In')}}
        onPressOut={()=>{setState('pressed Out')}}
        onLongPress={()=>{setState('long press')}}
        android_disableSound={true}
        pressRetentionOffset={{ bottom: 0, left: 0, right: 0, top: 0 }}
        android_ripple={{color: '#404040'}}
      >
        <Text>{title}</Text>
      </Pressable>      
    </View>
  );
}

export default CustomButton;


const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  button: {
    backgroundColor: '#456565',
    width: '100%',
    padding: 10,
    borderRadius: 4,
    textAlign: "center",
  }
})