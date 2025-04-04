import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { ArrowDown, ArrowUp } from "lucide-react-native"; // Icons
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const profile = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <ScrollView className="bg-gray-100 flex-1 p-4">
      
      {/* Profile Section */}
      <View className="items-center">
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Demo Profile Image
          className="w-24 h-24 rounded-full border-2 border-white"
        />
        <Text className="text-2xl font-bold mt-2">{user?.username}</Text>
        <Text className="text-gray-600">Italian Cuisine Specialist</Text>
        <View className="bg-green-100 px-3 py-1 rounded-full mt-1">
          <Text className="text-green-600 text-sm font-semibold">Online</Text>
        </View>
      </View>

      {/* Stats */}
      <View className="flex-row justify-between mt-6">
        <View className="bg-white p-4 rounded-lg shadow-md w-[30%] items-center">
          <Text className="text-gray-500 text-sm">Completion</Text>
          <Text className="text-xl font-bold">98%</Text>
        </View>
        <View className="bg-white p-4 rounded-lg shadow-md w-[30%] items-center">
          <Text className="text-gray-500 text-sm">Rating</Text>
          <Text className="text-xl font-bold">4.9</Text>
        </View>
        <View className="bg-white p-4 rounded-lg shadow-md w-[30%] items-center">
          <Text className="text-gray-500 text-sm">Avg. Time</Text>
          <Text className="text-xl font-bold">25m</Text>
        </View>
      </View>

      {/* Wallet Section */}
      <View className="bg-white p-6 rounded-lg shadow-md mt-6">
        <Text className="text-lg font-bold">Wallet</Text>
        <Text className="text-gray-600">Available Balance</Text>
        <Text className="text-3xl font-bold mt-1">$2,458.90</Text>
        <TouchableOpacity className="bg-black p-3 rounded-lg mt-4">
          <Text className="text-white text-center font-semibold">Withdraw Funds</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Transactions */}
      <View className="bg-white p-6 rounded-lg shadow-md mt-4">
        <Text className="text-lg font-bold mb-3">Recent Transactions</Text>
        
        {/* Order Transaction */}
        <View className="flex-row justify-between items-center mb-3">
          <View className="flex-row items-center">
            <ArrowDown size={18} color="green" />
            <View className="ml-3">
              <Text className="font-semibold">Order #8294</Text>
              <Text className="text-gray-500 text-sm">Today, 2:30 PM</Text>
            </View>
          </View>
          <Text className="text-green-600 font-semibold">+ $42.50</Text>
        </View>

        {/* Withdrawal Transaction */}
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <ArrowUp size={18} color="red" />
            <View className="ml-3">
              <Text className="font-semibold">Withdrawal</Text>
              <Text className="text-gray-500 text-sm">Yesterday</Text>
            </View>
          </View>
          <Text className="text-red-600 font-semibold">- $150.00</Text>
        </View>

      </View>
    </ScrollView>
  );
};

export default profile;
