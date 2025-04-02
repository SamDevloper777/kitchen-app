import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Clock } from "lucide-react-native"; // Added Clock icon for timing

const OrderCard = ({
  id = "#ORD-2893",
  name = "James Wilson",
  amount = "$42.50",
  status = "In Progress",
  statusColor = "bg-orange-100 text-orange-800",
  items = ["2x Grilled Chicken Salad", "1x Fresh Orange Juice"],
  actions = ["Accept", "Reject"],
}) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-orange-100 text-orange-800";
      case "Ready":
        return "bg-green-100 text-green-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-orange-100 text-orange-800";
    }
  };

  const handleAction = (action) => {
    console.log(`${action} clicked for order ${id}`);
    // Add your action logic here (e.g., API calls)
  };

  return (
    <View className="bg-white p-4 rounded-xl shadow-md w-full self-center mb-4 border border-orange-100">
      {/* Order ID and Status */}
      <View className="flex-row justify-between items-center">
        <Text className="text-orange-700 font-semibold text-sm">{id}</Text>
        <View className={`px-3 py-1 rounded-full ${getStatusStyles(status)}`}>
          <Text className="text-xs font-semibold">{status}</Text>
        </View>
      </View>

      {/* Customer & Price */}
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-lg font-bold text-gray-800">{name}</Text>
        <Text className="text-lg font-bold text-orange-600">{amount}</Text>
      </View>

      {/* Order Items */}
      {items.length > 0 && (
        <View className="mt-3">
          {items.map((item, index) => (
            <Text key={index} className="text-gray-600 text-sm">
              {item}
            </Text>
          ))}
        </View>
      )}

      {/* Time Indicator */}
      <View className="flex-row items-center mt-2">
        <Clock color="#f97316" size={16} className="mr-1" />
        <Text className="text-orange-600 text-xs">
          {status === "In Progress" ? "Est. 15 mins" : "Completed"}
        </Text>
      </View>

      {/* Buttons */}
      {actions.length > 0 && (
        <View className="flex-row justify-between mt-4 gap-2">
          {actions.map((action, index) => (
            <TouchableOpacity
              key={index}
              className={`py-2 px-4 rounded-lg flex-1 ${
                action === "Accept" || action === "Mark Delivered"
                  ? "bg-orange-500"
                  : "border border-orange-300 bg-orange-50"
              }`}
              onPress={() => handleAction(action)}
            >
              <Text
                className={`text-center font-semibold ${
                  action === "Accept" || action === "Mark Delivered"
                    ? "text-white"
                    : "text-orange-700"
                }`}
              >
                {action}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default OrderCard;