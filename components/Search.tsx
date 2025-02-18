import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import icons from "@/constants/icons";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500
  );
  const handleSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-3xl bg-white border-[0.5px] border-general-100 mt-1 py-5">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-5" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Where do you want to go?"
          className="text-sm font-rubik text-black-300 ml-2 flex-1 "
        />
      </View>
    </View>
  );
};

export default Search;
