import React from "react";

import { SafeAreaView, Text, View } from 'react-native';
import { Map } from "../components/Map";

export function MapScreen() {
  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">

      </View>
    </View>
  );
}
