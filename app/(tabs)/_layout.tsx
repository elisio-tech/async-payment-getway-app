import { tabs } from "@/constants/data";
import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

export default function TabLayout() {
  const TabIcon = ({ icon, focused }: TabIconProps) => {
    return (
      <View>
        <View>
          <Image source={icon} style={{ width: 28, height: 28 }} />
        </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          padding: 12,
          height: 80,
        },
        tabBarLabelStyle: {
          fontFamily: "sans-regular",
          fontSize: 13,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon={focused ? tab.active : tab.icon}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
