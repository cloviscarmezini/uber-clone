import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import uberXImg from '../assets/uberX.png';
import uberFoodImg from '../assets/uberFood.png';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: uberXImg,
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: uberFoodImg,
        screen: "EatsScreen"
    }
];

export function NavOptions() {
  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={item=>item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
                className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
            >
                <View>
                    <Image
                        style={{
                            width: 120,
                            height: 120,
                            resizeMode: 'contain'
                        }}
                        source={item.image}
                    />
                    <Text className="mt-2 text-lg font-semibold">
                        { item.title }
                    </Text>
                </View>
            </TouchableOpacity>
        )}
    />
  );
}