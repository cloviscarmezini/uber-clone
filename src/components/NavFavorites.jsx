import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

import uberXImg from "../assets/uberX.png";
import uberFoodImg from "../assets/uberFood.png";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK"
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK"
  },
];

export function NavFavorites() {
  const navigation = useNavigation();

  function handleNavigateToScreen(screen) {
    navigation.navigate(screen);
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View
          className="bg-gray-200"
          style={{ height: 0.5 }}
        />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="flex-row items-center p-5"
          onPress={() => handleNavigateToScreen(item.screen)}
        >
          <Icon
            className="mr-4 rounded-full bg-gray-300 p-3"
            type="ionicon"
            name={item.icon}
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{item.location}</Text>
            <Text className="text-gray-500">{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
