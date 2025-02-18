import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import EmptyState from "@/components/EmptyState";
import { router } from "expo-router";

const Chat = () => {
  return (
    <SafeAreaView className="bg-general-500 h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7 h-full"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-3xl font-JakartaBold">Chat List</Text>
          <TouchableOpacity
            onPress={() => router.push("/sign-in")}
            className="p-4 rounded-full bg-white shadow-xs"
          >
            <Image source={icons.logout} className="size-6" />
          </TouchableOpacity>
        </View>
        <View className="pt-32 shadow-lg h-full">
          <EmptyState
            title="No Messages, yet."
            subTitle="No messages in your inbox, yet!"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
