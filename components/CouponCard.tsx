import { View, Text } from "react-native";

const CouponCard = () => {
  return (
    <View className="bg-white rounded-2xl shadow-lg w-80 p-4 border border-gray-200 relative">
      {/* Title */}
      <Text className="text-xl font-bold text-gray-800">Get 20% OFF!</Text>

      {/* Coupon Code */}
      <View className="bg-gray-100 py-2 px-4 rounded-lg mt-3">
        <Text className="text-lg font-bold text-gray-700 text-center">SAVE20</Text>
      </View>

      {/* Description */}
      <Text className="text-gray-500 mt-2 text-sm">
        Use this coupon code at checkout to get 20% off your order.
      </Text>

      {/* Expiration Date */}
      <Text className="text-gray-400 text-xs mt-2">Valid until: March 30, 2025</Text>

      {/* Dotted Cut Line */}
      <View className="absolute -left-2 top-1/2 h-4 w-4 bg-white rounded-full border border-gray-300" />
      <View className="absolute -right-2 top-1/2 h-4 w-4 bg-white rounded-full border border-gray-300" />
    </View>
  );
};

export default CouponCard;
