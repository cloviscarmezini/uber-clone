import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

import uberXImg from "../assets/uberX.png";
import uberFoodImg from "../assets/uberFood.png";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: uberXImg,
    screen: "map",
  },
  {
    id: "456",
    title: "Order food",
    image: uberFoodImg,
    screen: "EatsScreen",
  },
];

export function NavOptions() {
  const navigation = useNavigation();

  function handleNavigateToScreen(screen) {
    navigation.navigate(screen);
  }

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
            className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
            onPress={() => handleNavigateToScreen(item.screen)}
        >
          <View>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
              source={item.image}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon
              className="p-2 bg-black rounded-full w-10 mt-4"
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
