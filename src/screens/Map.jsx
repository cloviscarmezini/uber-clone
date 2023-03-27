import React from "react";

import { TouchableOpacity, View } from 'react-native';
import { Map } from "../components/Map";
import { NavigateCard } from "../components/NavigateCard";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RideOptionsCard } from "../components/RideOptionsCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const { Navigator, Screen } = createNativeStackNavigator();

export function MapScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        className="absolute top-16 z-50 left-8 bg-gray-100 rounded-full p-3 shadow-lg"
        onPress={() => navigation.navigate('home')}
      >
        <Icon
          color="black"
          name="menu"
          type="fontawesome"
        />
      </TouchableOpacity>

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
