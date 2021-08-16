import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

function CustomButton(props) {
  const [timesPressed, setTimesPressed] = useState(0)
  const [state, setState] = useState('waiting')
  const { title, screen, navigation } = props;


  const handlePress = () => {
    navigation.navigate(screen)
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={handlePress}
        onPressIn={()=>{setState('pressed In')}}
        onPressOut={()=>{setState('pressed Out')}}
        onLongPress={()=>{setState('long press')}}
        android_disableSound={true}
        pressRetentionOffset={{ bottom: 0, left: 0, right: 0, top: 0 }}
        android_ripple={{color: '#404040'}}
      >
        <Text>{title}</Text>
      </Pressable>
      <View>
        <Text>
          {timesPressed}
        </Text>
        <Text>
          State: {state}
        </Text>
      </View>
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