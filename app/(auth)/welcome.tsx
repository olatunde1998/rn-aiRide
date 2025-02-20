import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants/onboardingData";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

export default function Welcome() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white px-7">
      <TouchableOpacity onPress={() => router.push("/home")} className="w-full">
        <Text className="text-right font-JakartaBold text-xl text-black">
          Skip
        </Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              resizeMode="cover"
              className="w-[319px] h-[300px] mt-8"
            />

            <View className="mt-16">
              <Text className="text-[#212121] text-4xl font-JakartaBold text-center">
                {item.title}
              </Text>
              <Text className="font-JakartaMedium text-center text-secondary-600 mt-4 text-xl">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>

      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10 mb-5 mx-auto"
      />
    </SafeAreaView>
  );
}
