import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import EmptyState from "@/components/EmptyState";
import { router } from "expo-router";
import images from "@/constants/images";
import RideSummary from "@/components/RideSummary";

const History = () => {
  return (
    <SafeAreaView className="bg-general-500 h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-3xl font-JakartaBold">Popular Car</Text>
          <TouchableOpacity
            onPress={() => router.push("/sign-in")}
            className="p-4 rounded-full bg-white shadow-xs"
          >
            <Image source={icons.logout} className="size-6" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-col gap-6">
          <RideSummary />
          <RideSummary />
          <RideSummary />
          <RideSummary />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
