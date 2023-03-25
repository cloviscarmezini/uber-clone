import React from "react";

import { Image, SafeAreaView, View } from 'react-native';
import { NavOptions } from "../components/NavOptions";

import logoImg from '../assets/logo.png';

export function Home() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain'
          }}
          source={logoImg}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
}
