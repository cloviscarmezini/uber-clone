import React from "react";

import { View } from 'react-native';
import { Map } from "../components/Map";
import { NavigateCard } from "../components/NavigateCard";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RideOptionsCard } from "../components/RideOptionsCard";
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
              <Screen
                name="navigateCard"
                component={NavigateCard}
              />
              <Screen
                name="rideOptionsCard"
                component={RideOptionsCard}
              />
          </Navigator>
      </View>
    </View>
  );
}
