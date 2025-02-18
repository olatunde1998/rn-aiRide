import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import icons from "@/constants/icons";
import OAuth from "@/components/OAuth";

const SignInPage = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async () => {
    // if (form.email === "" || form.password === "") {
    //   Alert.alert("Error", "Please fill in all fields");
    // }
    setSubmitting(true);
    try {
      Alert.alert("User signed in successfully");
      router.push("/home");
    } catch (error: any) {
      console.log(error, "error occurred here==");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>
        <View className="p-5">
          <FormField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <FormField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign In"
            onPress={submitHandler}
            className="mt-6"
          />
          <OAuth />
          <View className="flex flex-row gap-2 items-center justify-center mt-10">
            <Text className="text-lg text-center text-general-200">
              Don’t have an account?
            </Text>
            <Link href="/sign-up" className="text-primary-500 text-lg">
              Sign up
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInPage;
