import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Payments() {
  return (
    <View style={style.container}>
      <Text>Payments Screen</Text>
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
