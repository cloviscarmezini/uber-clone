import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

import uberX from "../assets/uberX.png";
import uberConfort from "../assets/uberComfort.png";
import uberBlack from "../assets/uberBlack.png";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: uberX
  },
  {
    id: "Uber-comfort-123",
    title: "Uber Comfort",
    multiplier: 1.2,
    image: uberConfort
  },
  {
    id: "Uber-black-123",
    title: "Uber Black",
    multiplier: 1.75,
    image: uberBlack
  }
];

const FARE_PRICES = {
  MINIMUM_PRICE: 7.23,
  BASE_PRICE: 2.44,
  PRICE_PER_KILOMETER: 1.77,
  PRICE_PER_MINUTE: 0.34
}

export function RideOptionsCard() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState({});
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  function getRidePrice(multiplier) {
    const ridePrice =  (FARE_PRICES.MINIMUM_PRICE +
    FARE_PRICES.PRICE_PER_KILOMETER * (travelTimeInformation?.distance.value / 1000) +
    FARE_PRICES.PRICE_PER_MINUTE * (travelTimeInformation?.duration.value  / 60)) *
    multiplier;

    return ridePrice < FARE_PRICES.MINIMUM_PRICE ? FARE_PRICES.MINIMUM_PRICE : ridePrice;
  }

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('navigateCard')}
          className="absolute top-3 left-5 z-50 p-3 rounded-full"
        >
          <Icon
            name="chevron-left"
            type="fontawesome"
          />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select a Ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`flex-row items-center justify-between px-10 ${item.id === selected.id && 'bg-gray-200'}`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={item.image}
            />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{item.title}</Text>
              <Text>{travelTimeInformation?.duration.text} Travel time</Text>
            </View>
            <Text className="text-xl">
              { new Intl.NumberFormat('en-us', {
                style: 'currency',
                currency: 'USD'
              }).format(getRidePrice(item.multiplier)) }
            </Text>
          </TouchableOpacity>
        )}
      />

      <View
        className="mt-auto border-t border-gray-200"
      >
        <TouchableOpacity
          disabled={!selected.id}
          className={`py-3 px-4 m-3 ${selected.id ? 'bg-black' : 'bg-gray-300'}`}
        >
          <Text className="text-center text-white text-xl">
            Choose {selected.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
