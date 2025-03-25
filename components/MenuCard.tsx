import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Pencil, Trash } from "lucide-react-native";

const MenuCard = () => {
  return (
    <View className="flex-row justify-between gap-3 bg-white shadow-md rounded-lg p-3 items-center w-full">
      <View className="flex-row flex-1 justify-evenly gap-4">
        <Image
          source={{
            uri: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg",
          }}
          className="w-24 h-26 mt-1 flex-[.5] rounded-lg object-cover"
        />

        {/* Content */}
        <View className="flex-1 px-2">
          <Text className="text-base font-semibold tracking-wide">Bruschetta</Text>
          <Text className="text-gray-500 text-balance mt-1 text-xs tracking-wide">
            Toasted bread with fresh tomatoes and herbs (180g)
          </Text>
          <Text className="text-black font-bold mt-1 tracking-widest">$8.99</Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row space-x-3 px-2">
          <Pressable className="p-2 px-2">
            <Pencil size={18} color="black" />
          </Pressable>  
          <Pressable className="p-2 px-2">
            <Trash size={18} color="black"/>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MenuCard;
