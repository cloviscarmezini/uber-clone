import React from "react";

import { Text, View } from 'react-native';

export function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Text
        style={{
          color: "#FFF",
          fontSize: 36,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 48,
          }}
        >
          Uber
        </Text>
        Clone
      </Text>
    </View>
  );
}
