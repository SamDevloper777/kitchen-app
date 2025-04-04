import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from '@react-native-picker/picker';


export default function AddMenuItemForm() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [category, setCategory] = useState("Appetizers");
  const [description, setDescription] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const [quantityOptions, setQuantityOptions] = useState([
    { qty: "", price: "", qty_type: "" },
  ]);

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "You need to grant photo library permission to upload images."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const addQuantityOption = () => {
    setQuantityOptions([
      ...quantityOptions,
      { qty: "", price: "", qty_type: "" },
    ]);
  };

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
  };

  return (
    <ScrollView className="flex-1 bg-orange-50">
      <View className="bg-orange-500 p-4 rounded-b-2xl shadow-md">
        <Text className="text-2xl font-bold text-white">Add Menu Item</Text>
      </View>

      <View className="p-4">
        <View className="bg-white rounded-2xl shadow-md p-4">
          <Text className="text-orange-700 font-semibold mb-1">Item Name</Text>
          <TextInput
            className="border border-orange-200 rounded-lg p-3 bg-orange-50 text-gray-800"
            placeholder="Enter item name"
            placeholderTextColor="#9ca3af"
            value={itemName}
            onChangeText={setItemName}
          />

          <View className="flex-row justify-between mt-4">
            <View className="flex-1 mr-2">
              <Text className="text-orange-700 font-semibold mb-1">
                Price ($)
              </Text>
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
              <Text className="text-orange-700 font-semibold mb-1">
                Prep Time (mins)
              </Text>
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

          <Text className="text-orange-700 font-semibold mt-4 mb-1">
            Category
          </Text>
          <TextInput
            className="border border-orange-200 rounded-lg p-3 bg-orange-50 text-gray-800"
            placeholder="Appetizers"
            placeholderTextColor="#9ca3af"
            value={category}
            onChangeText={setCategory}
          />

          <Text className="text-orange-700 font-semibold mt-4 mb-1">
            Description
          </Text>
          <TextInput
            className="border border-orange-200 rounded-lg p-3 bg-orange-50 text-gray-800 h-24"
            placeholder="Enter item description"
            placeholderTextColor="#9ca3af"
            multiline
            textAlignVertical="top"
            value={description}
            onChangeText={setDescription}
          />

          <Text className="text-orange-700 font-semibold mt-4 mb-1">
            Item Image
          </Text>
          <View className="border border-orange-200 rounded-lg p-4 bg-orange-50">
            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                className="w-full h-40 rounded-lg"
                resizeMode="cover"
              />
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
              <Text className="text-white font-semibold ml-2">
                Upload Image
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-between mt-4">
            <Text className="text-orange-700 font-semibold text-lg">
              Available
            </Text>
            <Switch
              value={isAvailable}
              onValueChange={setIsAvailable}
              trackColor={{ false: "#e5e7eb", true: "#fb923c" }}
              thumbColor={isAvailable ? "#fff" : "#d1d5db"}
            />
          </View>

          <Text className="text-orange-700 font-semibold mt-4 mb-1">
            Quantity Options
          </Text>
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
              <View className="border border-orange-200 rounded-lg p-1 flex-1 ml-2 bg-orange-50 text-gray-800">
                <Picker
                  selectedValue={option.qty_type}
                  onValueChange={(value) => {
                    const newOptions = [...quantityOptions];
                    newOptions[index].qty_type = value;
                    setQuantityOptions(newOptions);
                  }}
                  style={{ height: 50 }}
                  dropdownIconColor="#fb923c"
                >
                  <Picker.Item label="Select Type" value="" />
                  <Picker.Item label="Cup" value="cup" />
                  <Picker.Item label="Glass" value="glass" />
                  <Picker.Item label="Plate" value="plate" />
                  <Picker.Item label="Bowl" value="bowl" />
                </Picker>
              </View>
            </View>
          ))}
          <TouchableOpacity onPress={addQuantityOption} className="mt-3">
            <Text className="text-orange-600 text-sm font-semibold">
              + Add Another Option
            </Text>
          </TouchableOpacity>

          {/* Preview Card */}
          <View className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
            <Text className="text-orange-700 font-bold text-lg mb-2">
              Preview
            </Text>
            <View className="flex-row">
              {imageUri ? (
                <Image
                  source={{ uri: imageUri }}
                  className="w-24 h-24 rounded-lg mr-4"
                  resizeMode="cover"
                />
              ) : (
                <View className="w-24 h-24 bg-orange-100 rounded-lg mr-4 flex items-center justify-center">
                  <Text className="text-orange-600 text-sm">No Image</Text>
                </View>
              )}
              <View className="flex-1">
                <Text className="text-gray-800 font-semibold text-lg">
                  {itemName || "Item Name"}
                </Text>
                <Text className="text-orange-600 text-sm">
                  {category || "Category"}
                </Text>
                <Text className="text-gray-600 mt-1 text-sm">
                  {description || "Description"}
                </Text>
                <Text className="text-orange-700 font-semibold mt-1">
                  ${price || "0.00"} • {prepTime || "0"} mins
                </Text>
                <Text className="text-gray-600 text-sm mt-1">
                  {isAvailable ? "Available" : "Not Available"}
                </Text>
              </View>
            </View>
            {quantityOptions.some((opt) => opt.qty || opt.price) && (
              <View className="mt-2">
                <Text className="text-orange-700 font-semibold">Options:</Text>
                {quantityOptions.map(
                  (opt, index) =>
                    (opt.qty || opt.price) && (
                      <Text key={index} className="text-gray-600 text-sm">
                        {opt.qty || "Size"} - ${opt.price || "0.00"}
                      </Text>
                    )
                )}
              </View>
            )}
          </View>

          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-orange-500 p-4 mt-6 rounded-lg shadow-md"
          >
            <Text className="text-white text-center font-bold text-lg">
              Add Item
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
