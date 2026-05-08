import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text>Hello react native!</Text>
        <Text>Total balance</Text>
        <Text style={{ fontFamily: "sans-regular", fontSize: 44 }}>AOA</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
