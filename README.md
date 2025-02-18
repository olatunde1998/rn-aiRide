<div align="center">
  <!-- <br />
    <a href="https://youtu.be/kmy_YNhl0mw" target="_blank">
      <img src="https://i.ibb.co/Bf04Hpd/Readme-thumbnail-from-JS-Mastery.png" alt="Project Banner">
    </a>
  <br /> -->

  <div>
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="reactnative" />
    <img src="https://img.shields.io/badge/-Expo-black?style=for-the-badge&logoColor=white&logo=expo&color=000020" alt="expo" />
    <img src="https://img.shields.io/badge/NativeWind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="nativewind" />
  </div>
<h3 align="center">AI RIDE Application</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🖇️ [Links](#links)
7. 📦 [Assets](#assets)
8. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

Built with React Native for handling the user interface, Google Maps for rendering maps with directions, paystack for
handling payments, and styled with TailwindCSS, AI Ride is a perfect
mobile app. The primary goal is to demonstrate how to develop full-stack mobile applications to showcase the developer's
skills in a unique manner that creates a lasting impact.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React Native
- Expo
- Google Maps
- zustand
- Clerk
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Onboarding Flow**: Seamless user registration and setup process.

👉 **Email Password Authentication with Verification**: Secure login with email verification.

👉 **oAuth Using Google**: Easy login using Google credentials.

👉 **Authorization**: Secure access control for different user roles.

👉 **Home Screen with Live Location & Google Map**: Real-time location tracking with markers on a map.

👉 **Recent Rides**: View a list of recent rides at a glance.

👉 **Google Places Autocomplete**: Search any place on Earth with autocomplete suggestions.

👉 **Find Rides**: Search for rides by entering 'From' and 'To' locations.

👉 **Select Rides from Map**: Choose available cars near your location from the map.

👉 **Confirm Ride with Detailed Information**: View complete ride details, including time and fare price.

👉 **Pay for Ride Using PayStack**: Make payments using multiple methods like cards and others.

👉 **Create Rides After Successful Payment**: Book a ride after confirming payment.

👉 **Profile**: Manage account details in the profile screen.

👉 **History**: Review all rides booked so far.

👉 **Responsive on Android and iOS**: Optimized for both Android and iOS devices.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/olatunde1998/rn-aiRide.git
cd rn-aiRide
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npx expo start
```

**Expo Go**

Download the [Expo Go](https://expo.dev/go) app onto your device, then use it to scan the QR code from Terminal and run.

## <a name="snippets">🕸️ Snippets</a>

Here are some code snippets from the project to help you get started quickly.

### Setup

<details>
<summary><code>tailwind.config.js</code></summary>

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Jakarta: ["Jakarta", "sans-serif"],
                JakartaBold: ["Jakarta-Bold", "sans-serif"],
                JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
                JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
                JakartaLight: ["Jakarta-Light", "sans-serif"],
                JakartaMedium: ["Jakarta-Medium", "sans-serif"],
                JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
            },
            colors: {
                primary: {
                    100: "#F5F8FF",
                    200: "#EBF4FF",
                    300: "#C3D9FF",
                    400: "#9BBFFF",
                    500: "#0286FF",
                    600: "#6A85E6",
                    700: "#475A99",
                    800: "#364573",
                    900: "#242B4D",
                },
                secondary: {
                    100: "#F8F8F8",
                    200: "#F1F1F1",
                    300: "#D9D9D9",
                    400: "#C2C2C2",
                    500: "#AAAAAA",
                    600: "#999999",
                    700: "#666666",
                    800: "#4D4D4D",
                    900: "#333333",
                },
                success: {
                    100: "#F0FFF4",
                    200: "#C6F6D5",
                    300: "#9AE6B4",
                    400: "#68D391",
                    500: "#38A169",
                    600: "#2F855A",
                    700: "#276749",
                    800: "#22543D",
                    900: "#1C4532",
                },
                danger: {
                    100: "#FFF5F5",
                    200: "#FED7D7",
                    300: "#FEB2B2",
                    400: "#FC8181",
                    500: "#F56565",
                    600: "#E53E3E",
                    700: "#C53030",
                    800: "#9B2C2C",
                    900: "#742A2A",
                },
                warning: {
                    100: "#FFFBEB",
                    200: "#FEF3C7",
                    300: "#FDE68A",
                    400: "#FACC15",
                    500: "#EAB308",
                    600: "#CA8A04",
                    700: "#A16207",
                    800: "#854D0E",
                    900: "#713F12",
                },
                general: {
                    100: "#CED1DD",
                    200: "#858585",
                    300: "#EEEEEE",
                    400: "#0CC25F",
                    500: "#F6F8FA",
                    600: "#E6F3FF",
                    700: "#EBEBEB",
                    800: "#ADADAD",
                },
            },
        },
    },
    plugins: [],
};
```

</details>

<details>
<summary><code>types/type.d.ts</code></summary>

```ts
import {TextInputProps, TouchableOpacityProps} from "react-native";

declare interface Driver {
    driver_id: number;
    first_name: string;
    last_name: string;
    profile_image_url: string;
    car_image_url: string;
    car_seats: number;
    rating: number;
}

declare interface MarkerData {
    latitude: number;
    longitude: number;
    id: number;
    title: string;
    profile_image_url: string;
    car_image_url: string;
    car_seats: number;
    rating: number;
    first_name: string;
    last_name: string;
    time?: number;
    price?: string;
}

declare interface MapProps {
    destinationLatitude?: number;
    destinationLongitude?: number;
    onDriverTimesCalculated?: (driversWithTimes: MarkerData[]) => void;
    selectedDriver?: number | null;
    onMapReady?: () => void;
}

declare interface Ride {
    origin_address: string;
    destination_address: string;
    origin_latitude: number;
    origin_longitude: number;
    destination_latitude: number;
    destination_longitude: number;
    ride_time: number;
    fare_price: number;
    payment_status: string;
    driver_id: number;
    user_email: string;
    created_at: string;
    driver: {
        first_name: string;
        last_name: string;
        car_seats: number;
    };
}

declare interface ButtonProps extends TouchableOpacityProps {
    title: string;
    bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
    textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
}

declare interface GoogleInputProps {
    icon?: string;
    initialLocation?: string;
    containerStyle?: string;
    textInputBackgroundColor?: string;
    handlePress: ({
                      latitude,
                      longitude,
                      address,
                  }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => void;
}

declare interface InputFieldProps extends TextInputProps {
    label: string;
    icon?: any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
    className?: string;
}

declare interface PaymentProps {
    fullName: string;
    email: string;
    amount: string;
    driverId: number;
    rideTime: number;
}

declare interface LocationStore {
    userLatitude: number | null;
    userLongitude: number | null;
    userAddress: string | null;
    destinationLatitude: number | null;
    destinationLongitude: number | null;
    destinationAddress: string | null;
    setUserLocation: ({
                          latitude,
                          longitude,
                          address,
                      }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => void;
    setDestinationLocation: ({
                                 latitude,
                                 longitude,
                                 address,
                             }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => void;
}

declare interface DriverStore {
    drivers: MarkerData[];
    selectedDriver: number | null;
    setSelectedDriver: (driverId: number) => void;
    setDrivers: (drivers: MarkerData[]) => void;
    clearSelectedDriver: () => void;
}

declare interface DriverCardProps {
    item: MarkerData;
    selected: number;
    setSelected: () => void;
}
```

</details>

<details>
<summary><code>types/image.d.ts</code></summary>

```ts
declare module "*.png" {
    const value: any;
    export default value;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}

declare module "*.jpeg" {
    const value: any;
    export default value;
}

declare module "*.gif" {
    const value: any;
    export default value;
}

declare module "*.svg" {
    const value: any;
    export default value;
}
```

</details>

<details>
<summary><code>constants/index.ts</code></summary>

```ts
import arrowDown from "@/assets/icons/arrow-down.png";
import arrowUp from "@/assets/icons/arrow-up.png";
import backArrow from "@/assets/icons/back-arrow.png";
import chat from "@/assets/icons/chat.png";
import checkmark from "@/assets/icons/check.png";
import close from "@/assets/icons/close.png";
import dollar from "@/assets/icons/dollar.png";
import email from "@/assets/icons/email.png";
import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";
import list from "@/assets/icons/list.png";
import lock from "@/assets/icons/lock.png";
import map from "@/assets/icons/map.png";
import marker from "@/assets/icons/marker.png";
import out from "@/assets/icons/out.png";
import person from "@/assets/icons/person.png";
import pin from "@/assets/icons/pin.png";
import point from "@/assets/icons/point.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import selectedMarker from "@/assets/icons/selected-marker.png";
import star from "@/assets/icons/star.png";
import target from "@/assets/icons/target.png";
import to from "@/assets/icons/to.png";
import check from "@/assets/images/check.png";
import getStarted from "@/assets/images/get-started.png";
import message from "@/assets/images/message.png";
import noResult from "@/assets/images/no-result.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";
import signUpCar from "@/assets/images/signup-car.png";

export const images = {
    onboarding1,
    onboarding2,
    onboarding3,
    getStarted,
    signUpCar,
    check,
    noResult,
    message,
};

export const icons = {
    arrowDown,
    arrowUp,
    backArrow,
    chat,
    checkmark,
    close,
    dollar,
    email,
    eyecross,
    google,
    home,
    list,
    lock,
    map,
    marker,
    out,
    person,
    pin,
    point,
    profile,
    search,
    selectedMarker,
    star,
    target,
    to,
};

export const onboarding = [
    {
        id: 1,
        title: "The perfect ride is just a tap away!",
        description:
            "Your journey begins with Ryde. Find your ideal ride effortlessly.",
        image: images.onboarding1,
    },
    {
        id: 2,
        title: "Best car in your hands with Ryde",
        description:
            "Discover the convenience of finding your perfect ride with Ryde",
        image: images.onboarding2,
    },
    {
        id: 3,
        title: "Your ride, your way. Let's go!",
        description:
            "Enter your destination, sit back, and let us take care of the rest.",
        image: images.onboarding3,
    },
];

export const data = {
    onboarding,
};
```

</details>

<details>
<summary><code>Root Layout Fonts</code></summary>

```ts
const [loaded] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
});
```

</details>

### Components

<details>
<summary><code>components/CustomButton</code></summary>

```tsx
import { ButtonProps } from "@/types/type";
import { Text, TouchableOpacity } from "react-native";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#0286FF]";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(
        bgVariant
      )} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`text-lg font-bold text-center ${getTextVariantStyle(
          textVariant
        )}`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
```

</details>

<details>
<summary><code>components/FormField</code></summary>

```tsx
import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { InputFieldProps } from "@/types/type";

const FormField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500  ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default FormField;
```

</details>

<details>
<summary><code>components/ProfileField</code></summary>

```tsx
import icons from "@/constants/icons";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

interface ProfileFieldProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles: string;
}
const ProfileField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: ProfileFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-xl text-general-200 font-JakartaMedium mb-2">
        {title}
      </Text>

      <View className="w-full h-16 px-4 bg-general-500 rounded-3xl flex flex-row items-center">
        <TextInput
          className="flex-1 text-black font-JakartaSemiBold text-xl"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          {...props}
        />

        {/* {title === "Password" && ( */}
        <TouchableOpacity>
          <Image source={icons.edit} className="w-6 h-6" resizeMode="contain" />
        </TouchableOpacity>
        {/* )} */}
      </View>
    </View>
  );
};

export default ProfileField;
```

</details>


### Screens

<details>
  <summary><code>(root)/(tabs)/home</code></summary>

```tsx
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import icons from "@/constants/icons";
import RideSummary from "@/components/RideSummary";
import Search from "@/components/Search";
import images from "@/constants/images";

const Home = () => {
  return (
    <SafeAreaView className="bg-general-500 h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between my-5">
          <Text className="text-3xl font-JakartaBold">Welcome John</Text>
          <TouchableOpacity
            onPress={() => router.push("/sign-in")}
            className="p-4 rounded-full bg-white shadow-xs"
          >
            <Image source={icons.logout} className="size-6" />
          </TouchableOpacity>
        </View>

        <Search />
        <View className="mt-8">
          <Text className="text-xl font-JakartaBold mb-4">
            Your current location
          </Text>
          <Image
            source={images.availableCarMap}
            resizeMode="cover"
            className="w-full h-[310px] rounded-2xl"
          />
        </View>

        <View className="mt-8">
          <Text className="text-xl font-JakartaBold mb-4">Recent Rides</Text>
          <View className="flex flex-col gap-6">
            <RideSummary />
            <RideSummary />
            <RideSummary />
            <RideSummary />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
```  

</details>

<details>
<summary><code>(root)/(tabs)/profile</code></summary>

```tsx
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import ProfileField from "@/components/ProfileField";
import { router } from "expo-router";

const Profile = () => {
  const [form, setForm] = useState({
    firstName: "Maria",
    lastName: "JS Mastery",
    email: "marin@jsmastery.pro",
    phoneNumber: "+5547824162",
  });
  return (
    <SafeAreaView className="bg-general-500 h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-3xl font-JakartaBold">Your profile</Text>
          <TouchableOpacity
            onPress={() => router.push("/sign-in")}
            className="p-4 rounded-full bg-white shadow-xs"
          >
            <Image source={icons.logout} className="size-6" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center flex mt-5 shadow-lg">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={images.avatar}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity className="absolute bottom-2 right-2">
              <Image source={icons.editImage} className="size-10" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-white  mt-10 rounded-2xl pb-8 px-4">
          <ProfileField
            title="First name"
            value={form.firstName}
            handleChangeText={(e) => setForm({ ...form, firstName: e })}
            otherStyles="mt-7"
          />

          <ProfileField
            title="Last name"
            value={form.lastName}
            handleChangeText={(e) => setForm({ ...form, lastName: e })}
            otherStyles="mt-7"
          />
          <ProfileField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
          />
          <ProfileField
            title="Phone number"
            value={form.phoneNumber}
            handleChangeText={(e) => setForm({ ...form, phoneNumber: e })}
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
```

</details>

<details>
<summary><code>(root)/(tabs)/chat</code></summary>

```tsx
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
```

</details>

## <a name="links">🔗 Links</a>

You can find important reference links used in the Project:
- <a href="https://docs.expo.dev/" target="_blank">Expo Setup</a>
- <a href="https://www.nativewind.dev/getting-started/installation" target="_blank">NativeWind Setup</a>
- <a href="https://www.nativewind.dev/v4/getting-started/typescript" target="_blank">TypeScript Support for
  NativeWind</a>
- <a href="https://docs.expo.dev/guides/using-eslint/" target="_blank">Eslint and Prettier Setup</a>
- <a href="https://clerk.com/docs/quickstarts/expo" target="_blank">Clerk Expo Quickstart</a>
- <a href="https://clerk.com/docs/custom-flows/oauth-connections" target="_blank">Clerk Expo OAuth</a>
- <a href="https://www.geoapify.com/" target="_blank">Geoapify Map</a>
- <a href="https://paystack.com/" target="_blank">Paystack React Native SDK</a>


## <a name="more">🚀 Deployment</a>

**This app was deployed on google play store**


<!-- <a href="https://jsmastery.pro/next15" target="_blank">
   <img src="https://github.com/user-attachments/assets/b8760e69-1f81-4a71-9108-ceeb1de36741" alt="Project Banner">
</a> -->


## <a name="links">🔗 License</a>

The MIT License - Copyright (c) 2025 - Present, geodevcodes / Storage Service.


## <a name="links">🔗 Author</a>

Rasheed Olatunde (Software Developer)

