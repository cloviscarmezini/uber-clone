import React from "react";

import { Image, SafeAreaView, View } from 'react-native';
import { NavOptions } from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

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

        <GooglePlacesAutocomplete
          placeholder='Where from?'
          debounce={400}
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
          textInputProps={{
            returnKeyType: "search"
          }}
          fetchDetails
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log({data, details});
          }}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: process.env.GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
}
