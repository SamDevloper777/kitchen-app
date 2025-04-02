import React, { useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import MenuCard from "../../components/MenuCard";
import { router } from "expo-router";

const MenuScreen = () => {
  const menuItems = [
    {
      id: "MENU-001",
      name: "Bruschetta",
      description: "Toasted bread with fresh tomatoes and herbs (180g)",
      price: "$8.99",
      imageUrl: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
      initialAvailability: true,
      category: "Appetizers",
    },
    {
      id: "MENU-002",
      name: "Margherita Pizza",
      description: "Classic pizza with tomato, mozzarella, and basil (300g)",
      price: "$12.99",
      imageUrl: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
      initialAvailability: false,
      category: "Main Course",
    },
    {
      id: "MENU-003",
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center (150g)",
      price: "$6.99",
      imageUrl: "https://images.pexels.com/photos/2916018/pexels-photo-2916018.jpeg",
      initialAvailability: true,
      category: "Desserts",
    },
  ];

  const categories = ["All", "Appetizers", "Main Course", "Desserts"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <View className="flex-1 bg-orange-50">
      {/* Header with Menu Button */}
      <View className="bg-orange-500 p-4 rounded-b-2xl shadow-md flex-row justify-between items-center">
        <Text className="text-2xl font-bold text-white">Menu</Text>
        <Pressable
          className="bg-orange-600 px-4 py-2 rounded-lg active:bg-orange-700"
          onPress={() =>router.replace('../(screens)/addMenu')}
        >
          <Text className="text-white font-semibold">Add Menu</Text>
        </Pressable>
      </View>

      {/* Category Filter Box */}
      <View className="bg-white p-4 shadow-md border-b border-orange-100">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-3"
        >
          {categories.map((category) => (
            <Pressable
              key={category}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-orange-500"
                  : "bg-orange-100"
              }`}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                className={`text-sm font-semibold ${
                  selectedCategory === category
                    ? "text-white"
                    : "text-orange-700"
                }`}
              >
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Menu Items */}
      <ScrollView className="p-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              {...item}
              onEdit={() => console.log(`Editing ${item.id}`)}
              onDelete={() => console.log(`Deleting ${item.id}`)}
            />
          ))
        ) : (
          <Text className="text-gray-600 text-center mt-4">
            No items available in this category.
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default MenuScreen;