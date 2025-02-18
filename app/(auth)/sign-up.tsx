import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import icons from "@/constants/icons";
import OAuth from "@/components/OAuth";
import { ReactNativeModal } from "react-native-modal";

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const submitHandler = async () => {
    // if (form.email === "" || form.password === "" || form.name === "") {
    //   Alert.alert("Error", "Please fill in all fields");
    // }
    setSubmitting(true);
    try {

      setShowSuccessModal(true);
    } catch (error: any) {
      console.log(error, "error occurred here==");
    } finally {
      setSubmitting(false);
    }
  };

  const onPressVerify = async () => {
    Alert.alert("Verified successfully");
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <FormField
            label="Name"
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
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
            title="Sign Up"
            onPress={submitHandler}
            className="mt-6"
          />
          <OAuth />
          <View className="flex flex-row gap-2 items-center justify-center mt-10">
            <Text className="text-lg text-center text-general-200">
              Already have an account?{" "}
            </Text>
            <Link href="/sign-in" className="text-primary-500 text-lg">
              Sign in
            </Link>
          </View>
        </View>
        <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check}
              className="w-[110px] h-[110px] mx-auto my-5"
            />
            <Text className="text-3xl font-JakartaBold text-center">
              Verified
            </Text>
            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              You have successfully verified your account.
            </Text>
            <CustomButton
              title="Browse Home"
              onPress={() => {
                router.push(`/(root)/(tabs)/home`), setShowSuccessModal(false);
              }}
              className="mt-5"
            />
          </View>
        </ReactNativeModal>

        {/* <ReactNativeModal
          isVisible={verification.state === "pending"}
          onModalHide={() => {
            if (verification.state === "success") {
              setShowSuccessModal(true);
            }
          }}
        >
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="font-JakartaExtraBold text-2xl mb-2">
              Verification
            </Text>
            <Text className="font-Jakarta mb-5">
              We've sent a verification code to {form.email}.
            </Text>
            <FormField
              label={"Code"}
              icon={icons.lock}
              placeholder={"12345"}
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) =>
                setVerification({ ...verification, code })
              }
            />
            {verification.error && (
              <Text className="text-red-500 text-sm mt-1">
                {verification.error}
              </Text>
            )}
            <CustomButton
              title="Verify Email"
              onPress={onPressVerify}
              className="mt-5 bg-success-500"
            />
          </View>
        </ReactNativeModal> */}
      </View>
    </ScrollView>
  );
};

export default SignUp;
