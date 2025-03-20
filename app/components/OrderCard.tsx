import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const OrderCard = () => {
  return (
    <View className="bg-white p-4 rounded-lg shadow-md w-12/12 self-center">
      {/* Order ID and Status */}
      <View className="flex-row justify-between items-center">
        <Text className="text-gray-700 font-semibold">#ORD-2893</Text>
        <View className="bg-yellow-100 px-3 py-1 rounded-full">
          <Text className="text-yellow-600 text-xs font-semibold">In Progress</Text>
        </View>
      </View>

      {/* Customer & Price */}
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-lg font-semibold text-black">James Wilson</Text>
        <Text className="text-lg font-bold text-black">$42.50</Text>
      </View>

      {/* Order Items */}
      <View className="mt-2">
        <Text className="text-gray-600 text-sm">2x Grilled Chicken Salad</Text>
        <Text className="text-gray-600 text-sm">1x Fresh Orange Juice</Text>
      </View>

      {/* Buttons */}
      <View className="flex-row justify-between mt-4">
        <TouchableOpacity className="bg-black py-2 px-4 rounded-lg w-[48%]">
          <Text className="text-white text-center font-semibold">Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-gray-400 py-2 px-4 rounded-lg w-[48%]">
          <Text className="text-gray-700 text-center font-semibold">Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderCard;
