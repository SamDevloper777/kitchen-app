import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Phone, Headphones, Utensils } from "lucide-react-native"; // Added Utensils icon
import { SafeAreaView } from "react-native-safe-area-context";
import OrderCard from "../../components/OrderCard";

export default function HomeScreen() {
  const [isOnline, setIsOnline] = useState(true);
  const [isKitchenOn, setIsKitchenOn] = useState(true);

  const orders = [
    {
      id: "ORD-2893",
      name: "James Wilson",
      amount: "$42.50",
      status: "In Progress",
      statusColor: "bg-orange-100 text-orange-800",
      items: ["2x Grilled Chicken Salad", "1x Fresh Orange Juice"],
      actions: ["Accept", "Reject"],
    },
    {
      id: "ORD-2892",
      name: "Emily Parker",
      amount: "$28.75",
      status: "Ready",
      statusColor: "bg-green-100 text-green-800",
      items: ["1x Vegetarian Pizza", "2x Iced Tea"],
      actions: ["Mark Delivered"],
    },
    {
      id: "ORD-2891",
      name: "Michael Brown",
      amount: "$56.25",
      status: "Completed",
      statusColor: "bg-gray-100 text-gray-800",
      items: [],
      actions: [],
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      {/* Header with Logo and Status/Kitchen Switches */}
      <View className="bg-orange-500 p-4 rounded-b-2xl shadow-md">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-white">FoodHub</Text>
          <View className="flex-row items-center space-x-4">
            <View className="flex-row items-center">
              <Text className="text-white font-medium mr-2">Online</Text>
              <Switch
                trackColor={{ false: "#f4f3f4", true: "#fb923c" }}
                thumbColor={isOnline ? "#fff" : "#e5e7eb"}
                onValueChange={() => setIsOnline(!isOnline)}
                value={isOnline}
              />
            </View>
            <View className="flex-row items-center">
              <Utensils color="white" size={20} className="mr-2" />
              <Switch
                trackColor={{ false: "#f4f3f4", true: "#fb923c" }}
                thumbColor={isKitchenOn ? "#fff" : "#e5e7eb"}
                onValueChange={() => setIsKitchenOn(!isKitchenOn)}
                value={isKitchenOn}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Stats Section */}
      <View className="flex-row justify-between p-4">
        <View className="bg-white p-4 rounded-xl flex-1 mr-2 shadow-md border border-orange-100">
          <Text className="text-gray-600">Today's Orders</Text>
          <Text className="text-2xl font-bold text-orange-600">24</Text>
        </View>
        <View className="bg-white p-4 rounded-xl flex-1 mr-2 shadow-md border border-orange-100">
          <Text className="text-gray-600">Earnings</Text>
          <Text className="text-2xl font-bold text-orange-600">$342</Text>
        </View>
        <View className="bg-white p-4 rounded-xl flex-1 shadow-md border border-orange-100">
          <Text className="text-gray-600">Avg. Time</Text>
          <Text className="text-2xl font-bold text-orange-600">18m</Text>
        </View>
      </View>

      {/* Kitchen Status Banner */}
      <View className="mx-4 mb-4 p-3 rounded-lg bg-orange-100 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Utensils color="#f97316" size={24} className="mr-2" />
          <Text className="text-orange-800 font-medium">
            Kitchen: {isKitchenOn ? "ON" : "OFF"}
          </Text>
        </View>
        <TouchableOpacity
          className="bg-orange-500 px-3 py-1 rounded-md"
          onPress={() => setIsKitchenOn(!isKitchenOn)}
        >
          <Text className="text-white text-sm font-medium">
            Toggle {isKitchenOn ? "Off" : "On"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Recent Orders Section */}
      <View className="flex-1 p-4">
        <Text className="text-xl px-2 font-semibold mb-4 text-orange-700">
          Recent Orders
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {orders.map((order) => (
            <OrderCard key={order.id} {...order} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}