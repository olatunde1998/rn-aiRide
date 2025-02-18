import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

interface EmptyStateProps {
  title: string;
  subTitle: string;
}
const EmptyState = ({ title, subTitle }: EmptyStateProps) => {
  return (
    <View className="justify-center items-center px-4 ">
      <Image
        source={images.message}
        resizeMode="contain"
        className="w-[270px] h-[215px]"
      />
      <Text className="text-black text-center font-JakartaBold text-3xl mt-2">
        {title}
      </Text>
      <Text className="font-JakartaSemiBold text-xl text-general-800 mt-4">
        {subTitle}
      </Text>
    </View>
  );
};

export default EmptyState;
