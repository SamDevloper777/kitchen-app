import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { Ionicons } from "@expo/vector-icons";

export default function AddMenuItemForm() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [category, setCategory] = useState("Appetizers");
  const [description, setDescription] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const [quantityOptions, setQuantityOptions] = useState([
    { qty: "", price: "" },
  ]);

  // Handle Image Selection
  const selectImage = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (
        !response.didCancel &&
        response.assets &&
        response.assets.length > 0
      ) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  // Handle Adding More Quantity Options
  const addQuantityOption = () => {
    setQuantityOptions([...quantityOptions, { qty: "", price: "" }]);
  };

  return (
    <ScrollView className="p-4 bg-white">
      <ScrollView className="p-4 bg-white rounded-lg shadow-md">
        <Text className="text-2xl font-bold mb-4 text-gray-800">
          Add Menu Item
        </Text>

        {/* Item Name */}
        <Text className="text-gray-700 font-medium">Item Name</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mt-1"
          placeholder="Enter item name"
          value={itemName}
          onChangeText={setItemName}
        />

        {/* Price & Prep Time */}
        <View className="flex-row justify-between mt-3">
          <View className="flex-1 mr-2">
            <Text className="text-gray-700 font-medium">Price ($)</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 mt-1"
              placeholder="0.00"
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
            />
          </View>
          <View className="flex-1 ml-2">
            <Text className="text-gray-700 font-medium">Prep Time (mins)</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 mt-1"
              placeholder="15"
              keyboardType="numeric"
              value={prepTime}
              onChangeText={setPrepTime}
            />
          </View>
        </View>

        {/* Category */}
        <Text className="text-gray-700 font-medium mt-3">Category</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mt-1"
          placeholder="Appetizers"
          value={category}
          onChangeText={setCategory}
        />

        {/* Description */}
        <Text className="text-gray-700 font-medium mt-3">Description</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mt-1 h-24 text-start"
          placeholder="Enter item description"
          multiline
          value={description}
          onChangeText={setDescription}
        />

        {/* Image Upload */}
        <Text className="text-gray-700 font-medium mt-3">Item Image</Text>
        <View className="border border-gray-300 rounded-lg p-4 mt-2 bg-gray-50 flex items-center">
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              className="w-full h-40 rounded-lg"
              resizeMode="cover"
            />
          ) : (
            <View className="w-full h-40 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg bg-gray-100">
              <Text className="text-gray-500">No image selected</Text>
            </View>
          )}
          <TouchableOpacity
            onPress={selectImage}
            className="flex-row items-center justify-center bg-blue-500 p-3 mt-2 rounded-lg w-full"
          >
            <Ionicons name="cloud-upload-outline" size={20} color="white" />
            <Text className="text-white font-semibold ml-2">Upload Image</Text>
          </TouchableOpacity>
        </View>

        {/* Availability Toggle */}
        <View className="flex-row items-center justify-between mt-4">
          <Text className="text-gray-700 font-medium text-lg">Available</Text>
          <Switch
            value={isAvailable}
            onValueChange={setIsAvailable}
            trackColor={{ false: "#ccc", true: "#4CAF50" }}
            thumbColor={isAvailable ? "#ffffff" : "#ffffff"}
          />
        </View>

        {/* Quantity Options */}
        <Text className="text-gray-700 font-medium mt-3">Quantity Options</Text>
        {quantityOptions.map((option, index) => (
          <View key={index} className="flex-row justify-between mt-2">
            <TextInput
              className="border border-gray-300 rounded-lg p-3 flex-1 mr-2"
              placeholder="Qty"
              keyboardType="numeric"
              value={option.qty}
              onChangeText={(text) => {
                const newOptions = [...quantityOptions];
                newOptions[index].qty = text;
                setQuantityOptions(newOptions);
              }}
            />
            <TextInput
              className="border border-gray-300 rounded-lg p-3 flex-1 ml-2"
              placeholder="Price ($)"
              keyboardType="numeric"
              value={option.price}
              onChangeText={(text) => {
                const newOptions = [...quantityOptions];
                newOptions[index].price = text;
                setQuantityOptions(newOptions);
              }}
            />
          </View>
        ))}

        {/* Add More Quantity Options Button */}
        <TouchableOpacity onPress={addQuantityOption} className="mt-2">
          <Text className="text-blue-600 text-sm font-semibold">
            + Add Another Option
          </Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity className="bg-green-500 p-4 mt-6 rounded-lg">
          <Text className="text-white text-center font-bold text-lg">
            Submit
          </Text>
        </TouchableOpacity>
        <View className="bg-white rounded-xl mt-4 shadow-lg overflow-hidden w-full">
          {/* Image Section */}
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} // Replace with your image URL
            className="w-full h-40"
          />

          {/* Content Section */}
          <View className="p-4">
            {/* Title & Price Row */}
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-bold">
                Classic Margherita Pizza
              </Text>
              <Text className="text-lg font-bold">$12.99</Text>
            </View>

            {/* Description */}
            <Text className="text-gray-500 mt-1">
              Fresh mozzarella, tomatoes, and basil on our signature crust
              (250g)
            </Text>

            {/* Time Icon & Text */}
            <View className="flex-row items-center mt-2 my-2">
              <Ionicons name="time-outline" size={16} color="gray"/>
              <Text className="text-gray-500 ml-1">15 mins</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}
