import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Wallet() {
  return (
    <View style={style.container}>
      <Text>Wallet Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
