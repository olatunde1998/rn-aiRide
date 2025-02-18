import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";
import { StatusBar } from "expo-status-bar";

const TabIcon = ({ focused, icon }: { focused: boolean; icon: any }) => (
  <View className={`p-4 mb-7 rounded-full ${focused && "bg-general-400"}`}>
    <Image
      source={icon}
      tintColor="#FFFFFF"
      resizeMode="contain"
      className="size-8"
    />
  </View>
);
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#333333",
            borderRadius: 50,
            paddingBottom: 0,
            overflow: "hidden",
            marginHorizontal: 20,
            marginBottom: 20,
            height: 78,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon icon={icons.home} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon icon={icons.list} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon icon={icons.chat} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon icon={icons.profile} focused={focused} />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#F6F8FA" />
    </>
  );
};

export default TabsLayout;
