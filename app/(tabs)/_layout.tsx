import { tabs } from "@/constants/dara";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          name={tab.name}
          options={{ title: tab.title }}
          key={tab.name}
        />
      ))}
    </Tabs>
  );
}
