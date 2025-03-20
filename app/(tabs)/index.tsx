import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Phone, Headphones } from "lucide-react-native"; // Using Lucide Icons
import { SafeAreaView } from "react-native-safe-area-context";
import OrderCard from "../components/OrderCard";

export default function HomeScreen() {
  const [isOnline, setIsOnline] = useState(true);

  const orders = [
    {
      id: "ORD-2893",
      name: "James Wilson",
      amount: "$42.50",
      status: "In Progress",
      statusColor: "bg-yellow-200 text-yellow-800",
      items: ["2x Grilled Chicken Salad", "1x Fresh Orange Juice"],
      actions: ["Accept", "Reject"],
    },
    {
      id: "ORD-2892",
      name: "Emily Parker",
      amount: "$28.75",
      status: "Ready",
      statusColor: "bg-green-200 text-green-800",
      items: ["1x Vegetarian Pizza", "2x Iced Tea"],
      actions: ["Mark Delivered"],
    },
    {
      id: "ORD-2891",
      name: "Michael Brown",
      amount: "$56.25",
      status: "Completed",
      statusColor: "bg-gray-200 text-gray-800",
      items: [],
      actions: [],
    },
  ];
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header with Logo and Switch */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl p-4">logo</Text>
        <View className="flex-row items-center p-4">
          <Text className="text-gray-700 font-medium mr-2">Status</Text>
          <Switch
            trackColor={{ false: "#ddd", true: "#4caf50" }}
            thumbColor={isOnline ? "#fff" : "#f4f3f4"}
            onValueChange={() => setIsOnline(!isOnline)}
            value={isOnline}
          />
        </View>
      </View>



      {/* Header Section */}
      <View className="flex-row justify-between p-4">
        <View className="bg-white p-4 rounded-lg flex-1 mr-2 shadow-md">
          <Text className="text-gray-500">Today's Orders</Text>
          <Text className="text-2xl font-bold">24</Text>
        </View>
        <View className="bg-white p-4 rounded-lg flex-1 mr-2 shadow-md">
          <Text className="text-gray-500">Earnings</Text>
          <Text className="text-2xl font-bold">$342</Text>
        </View>
        <View className="bg-white p-4 rounded-lg flex-1 shadow-md">
          <Text className="text-gray-500">Avg. Time</Text>
          <Text className="text-2xl font-bold">18m</Text>
        </View>
      </View>

      {/* Recent Orders Section */}
      <View className="p-4">
        <Text className="text-xl px-2 font-semibold mb-4">Recent Orders</Text>
        <OrderCard />
        <OrderCard />
      </View>
    </SafeAreaView>
  );
}
