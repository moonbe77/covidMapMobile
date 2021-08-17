import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Home from '../components/Home';
import Feed from '../components/Feed';

const Tab = createBottomTabNavigator()

export default function HomeScreen() {

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon : ({focused,color,size})=>{
        let iconName;

        if(route.name === 'Home') iconName = focused ?'home-outline': 'home-sharp';
        if(route.name === 'Feed') iconName = focused ?'barcode': 'barcode-sharp';
        console.log(iconName);
        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Feed' component={Feed} />
    </Tab.Navigator>
  );
}


