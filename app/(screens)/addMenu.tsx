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
  const [imageUri, setImageUri] = useState(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const [quantityOptions, setQuantityOptions] = useState([{ qty: "", price: "" }]);

  // Handle Image Selection
  const selectImage = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.assets && response.assets.length > 0 && !response.didCancel) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  // Handle Adding More Quantity Options
  const addQuantityOption = () => {
    setQuantityOptions([...quantityOptions, { qty: "", price: "" }]);
  };

  // Handle Form Submission (placeholder)
  const handleSubmit = () => {
    console.log({
      itemName,
      price,
      prepTime,
      category,
      description,
      imageUri,
      isAvailable,
      quantityOptions,
    });
    // Add your submission logic here (e.g., API call)
  };

  return (
    <ScrollView className="flex-1 bg-orange-50">
      {/* Header */}
      <View className="bg-orange-500 p-4 rounded-b-2xl shadow-md">
        <Text className="text-2xl font-bold text-white">Add Menu Item</Text>
      </View>

      {/* Form Container */}
      <View className="p-4">
        <View className="bg-white rounded-2xl shadow-md p-4">
          {/* Item Name */}
          <Text className="text-orange-700 font-semibold mb-1">Item Name</Text>
          <TextInput
            className="border border-orange-200 rounded-lg p-3 bg-orange-50 text-gray-800"
            placeholder="Enter item name"
            placeholderTextColor="#9ca3af"
            value={itemName}
            onChangeText={setItemName}
          />

          {/* Price & Prep Time */}
          <View className="flex-row justify-between mt-4">
            <View className="flex-1 mr-2">
              <Text className="text-orange-700 font-semibold mb-1">Price ($)</Text>
              <TextInput
                className="border border-orange-200 rounded-lg p-3 bg-orange-50 text-gray-800"
                placeholder="0.00"
                placeholderTextColor="#9ca3af"
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
              />
            </View>
            <View className="flex-1 ml-2">
              <Text className="text-orange-700 font-semibold mb-1">Prep Time (mins)</Text>
              <TextInput
                className="border border-orange-200 rounded-lg p-3 bg-orange-50 text-gray-800"
                placeholder="15"
                placeholderTextColor="#9ca3af"
                keyboardType="numeric"
                value={prepTime}
                onChangeText={setPrepTime}
              />
            </View>
          </View>

          {/* Category */}
          <Text className="text-orange-700 font-semibold mt-4 mb-1">Category</Text>
          <TextInput
            className="border border-orange-200 rounded-lg p-3 bg-orange-50 text-gray-800"
            placeholder="Appetizers"
            placeholderTextColor="#9ca3af"
            value={category}
            onChangeText={setCategory}
          />

          {/* Description */}
          <Text className="text-orange-700 font-semibold mt-4 mb-1">Description</Text>
          <TextInput
            className="border border-orange-200 rounded-lg p-3 bg-orange-50 text-gray-800 h-24"
            placeholder="Enter item description"
            placeholderTextColor="#9ca3af"
            multiline
            textAlignVertical="top"
            value={description}
            onChangeText={setDescription}
          />

          {/* Image Upload */}
          <Text className="text-orange-700 font-semibold mt-4 mb-1">Item Image</Text>
          <View className="border border-orange-200 rounded-lg p-4 bg-orange-50">
            {imageUri ? (
              <Image source={{ uri: imageUri }} className="w-full h-40 rounded-lg" resizeMode="cover" />
            ) : (
              <View className="w-full h-40 flex items-center justify-center border-2 border-dashed border-orange-300 rounded-lg bg-orange-100">
                <Text className="text-orange-600">No image selected</Text>
              </View>
            )}
            <TouchableOpacity
              onPress={selectImage}
              className="flex-row items-center justify-center bg-orange-500 p-3 mt-3 rounded-lg"
            >
              <Ionicons name="cloud-upload-outline" size={20} color="white" />
              <Text className="text-white font-semibold ml-2">Upload Image</Text>
            </TouchableOpacity>
          </View>

          {/* Availability Toggle */}
          <View className="flex-row items-center justify-between mt-4">
            <Text className="text-orange-700 font-semibold text-lg">Available</Text>
            <Switch
              value={isAvailable}
              onValueChange={setIsAvailable}
              trackColor={{ false: "#e5e7eb", true: "#fb923c" }}
              thumbColor={isAvailable ? "#fff" : "#d1d5db"}
            />
          </View>

          {/* Quantity Options */}
          <Text className="text-orange-700 font-semibold mt-4 mb-1">Quantity Options</Text>
          {quantityOptions.map((option, index) => (
            <View key={index} className="flex-row justify-between mt-2">
              <TextInput
                className="border border-orange-200 rounded-lg p-3 flex-1 mr-2 bg-orange-50 text-gray-800"
                placeholder="Qty (e.g., Small)"
                placeholderTextColor="#9ca3af"
                value={option.qty}
                onChangeText={(text) => {
                  const newOptions = [...quantityOptions];
                  newOptions[index].qty = text;
                  setQuantityOptions(newOptions);
                }}
              />
              <TextInput
                className="border border-orange-200 rounded-lg p-3 flex-1 ml-2 bg-orange-50 text-gray-800"
                placeholder="Price ($)"
                placeholderTextColor="#9ca3af"
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
          <TouchableOpacity onPress={addQuantityOption} className="mt-3">
            <Text className="text-orange-600 text-sm font-semibold">+ Add Another Option</Text>
          </TouchableOpacity>

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-orange-500 p-4 mt-6 rounded-lg shadow-md"
          >
            <Text className="text-white text-center font-bold text-lg">Add Item</Text>
          </TouchableOpacity>
        </View>

        {/* Preview Card (Moved Outside Form) */}
        <View className="bg-white rounded-2xl mt-6 shadow-md overflow-hidden">
          <Image
            source={{
              uri: imageUri || "https://images.unsplash.com/photo-1513104890138-7c749659a591",
            }}
            className="w-full h-40"
            resizeMode="cover"
          />
          <View className="p-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-bold text-gray-800">
                {itemName || "Classic Margherita Pizza"}
              </Text>
              <Text className="text-lg font-bold text-orange-600">
                {price || "$12.99"}
              </Text>
            </View>
            <Text className="text-gray-600 mt-1">
              {description || "Fresh mozzarella, tomatoes, and basil on our signature crust (250g)"}
            </Text>
            <View className="flex-row items-center mt-2">
              <Ionicons name="time-outline" size={16} color="#f97316" />
              <Text className="text-orange-700 ml-1">{prepTime || "15"} mins</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}