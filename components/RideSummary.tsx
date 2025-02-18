import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

interface RideSummaryProps{
  
}
const RideSummary = () => {
  return (
    <View className="bg-white gap-4 rounded-2xl py-8 px-4">
      <View className="flex flex-row items-center gap-4 rounded-2xl">
        <Image
          source={images.map}
          resizeMode="contain"
          className="w-[79px] h-[90px]"
        />
        <View className="flex flex-col gap-4">
          <View className="flex flex-row items-center gap-4">
            <Image source={icons.to} resizeMode="contain" className="w-6 h-6" />
            <Text className="text-lg">1901 Thornridge Cir. Shiloh</Text>
          </View>
          <View className="flex flex-row items-center gap-4">
            <Image
              source={icons.point}
              resizeMode="contain"
              className="w-6 h-6"
            />
            <Text className="text-lg">4140 Parker Rd. Allentown</Text>
          </View>
        </View>
      </View>

      
      <View className="bg-general-500 py-4 gap-4 rounded-2xl px-6">
        <View className="flex flex-col gap-4">
          <View className="flex flex-row justify-between w-full items-center gap-4 py-2 border-b-2 border-white">
            <Text className="text-lg font-JakartaSemiBold text-general-800">
              Date & Time
            </Text>
            <Text className="text-lg font-JakartaBold">
              16 July 2023, 10:30 PM
            </Text>
          </View>

          <View className="flex flex-row justify-between w-full items-center gap-4 py-1 border-b-2 border-white">
            <Text className="text-lg font-JakartaSemiBold text-general-800">
              Driver
            </Text>
            <Text className="text-lg font-JakartaBold">Jane Cooper</Text>
          </View>

          <View className="flex flex-row justify-between w-full items-center gap-4 py-1 border-b-2 border-white">
            <Text className="text-lg font-JakartaSemiBold text-general-800">
              Car seats
            </Text>
            <Text className="text-lg font-JakartaBold">4</Text>
          </View>

          <View className="flex flex-row justify-between w-full items-center gap-4 py-1">
            <Text className="text-lg font-JakartaSemiBold text-general-800">
              Payment Status
            </Text>
            <Text className="text-lg font-JakartaBold text-[#0CC25F]">
              Paid
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideSummary;
