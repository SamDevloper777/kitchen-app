import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Pencil, Trash, Utensils } from "lucide-react-native"; // Added Utensils for food theme

const MenuCard = ({
  id = "MENU-001",
  name = "Bruschetta",
  description = "Toasted bread with fresh tomatoes and herbs (180g)",
  price = "$8.99",
  imageUrl = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg",
  onEdit = () => console.log("Edit clicked"),
  onDelete = () => console.log("Delete clicked"),
}) => {
  return (
    <View className="flex-row bg-white shadow-md rounded-xl p-3 mb-4 border border-orange-100 w-full items-center">
      {/* Image */}
      <Image
        source={{ uri: imageUrl }}
        className="w-24 h-24 rounded-lg object-cover"
      />

      {/* Content */}
      <View className="flex-1 px-3">
        <Text className="text-base font-semibold text-gray-800 tracking-wide">
          {name}
        </Text>
        <Text className="text-gray-600 text-xs mt-1 tracking-wide line-clamp-2">
          {description}
        </Text>
        <View className="flex-row items-center mt-2">
          <Utensils color="#f97316" size={16} className="mr-1" />
          <Text className="text-orange-600 font-bold tracking-widest">
            {price}
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="flex-row items-center space-x-2">
        <Pressable
          className="p-2 rounded-full bg-orange-100 active:bg-orange-200"
          onPress={onEdit}
        >
          <Pencil size={18} color="#f97316" />
        </Pressable>
        <Pressable
          className="p-2 rounded-full bg-orange-100 active:bg-orange-200"
          onPress={onDelete}
        >
          <Trash size={18} color="#f97316" />
        </Pressable>
      </View>
    </View>
  );
};

export default MenuCard;