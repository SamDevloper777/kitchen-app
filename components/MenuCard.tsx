import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Pencil, Trash } from "lucide-react-native";

const MenuCard = () => {
  return (
    <View className="flex-row justify-between gap-3 bg-white shadow-md rounded-lg p-4 items-center w-full  border border-gray-200">
      <View className="flex-row flex-1 w-12/12 justify-evenly gap-4">
        <Image
          source={{
            uri: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
          }}
          className="w-24 h-24  flex-[.5] rounded-lg object-cover mx-auto my-auto"
        />

        {/* Content */}
        <View className="flex-1 px-4 leading-6">
          <Text className="text-base font-semibold tracking-wide">Bruschetta</Text>
          <Text className="text-gray-500 text-balance text-xs mt-1 tracking-wide">
            Toasted bread with fresh tomatoes and herbs (180g)
          </Text>
          <Text className="text-black font-bold mt-2 tracking-widest">$8.99</Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row space-x-3">
          <Pressable className="p-2">
            <Pencil size={18} color="black" />
          </Pressable>  
          <Pressable className="p-2">
            <Trash size={18} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MenuCard;
