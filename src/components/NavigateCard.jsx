import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavFavorites } from "./NavFavorites";

import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

export function NavigateCard() {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView
            className="bg-white flex-1"
        >
            <Text
                className="text-center py-5 text-xl"
            >
                Good morning, Clovis
            </Text>
            <View
                className="border-t border-gray-200 flex-shrink"
            >
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        debounce={400}
                        styles={toInputBoxStyles}
                        textInputProps={{
                            returnKeyType: "search"
                        }}
                        fetchDetails
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))

                            navigation.navigate('rideOptionsCard')
                        }}
                        enablePoweredByContainer={false}
                        minLength={2}
                        query={{
                            key: process.env.GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
                    />
                </View>

                <NavFavorites />
            </View>

            <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
                <TouchableOpacity
                    className="flex-row items-center justify-between bg-black w-24 px-4 py-3 rounded-full"
                    onPress={() => navigation.navigate('rideOptionsCard')}
                >
                    <Icon
                        type="font-awesome"
                        name="car"
                        color="white"
                        size={16}
                    />
                    <Text className="text-white text-center">Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="flex-row items-center justify-between w-24 px-4 py-3 rounded-full"
                >
                    <Icon
                        type="ionicon"
                        name="fast-food-outline"
                        color="black"
                        size={16}
                    />
                    <Text className="text-center">Rides</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})