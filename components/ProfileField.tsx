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
