import React from "react";

import { View } from 'react-native';
import { Map } from "../components/Map";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();

export function MapScreen() {
  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
          <Navigator
            screenOptions={{
              headerShown: false
            }}
          >
              
          </Navigator>
      </View>
    </View>
  );
}
