import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const order = () => {
  return (
    <View className="p-4">
      <Text className="text-lg font-bold mb-4">Order List</Text>
      
      <View className="bg-white p-4 mb-4 rounded-lg shadow">
        <Text className="text-base font-semibold">Order #1234</Text>
        <Text className="text-sm text-gray-500">10:30 AM</Text>
        <Text className="mt-2">1x Quinoa Buddha Bowl</Text>
        <Text className="text-right">$12.99</Text>
        <Text className="mt-2">2x Chicken Curry</Text>
        <Text className="text-right">$25.98</Text>
        <Text className="mt-2 font-bold">Total $38.97</Text>
        <View className="flex-row mt-4">
          <TouchableOpacity  className="bg-black text-white px-4 py-2 rounded mr-2" />
          <TouchableOpacity  className="bg-gray-300 text-black px-4 py-2 rounded" />
        </View>
      </View>

      <View className="bg-white p-4 rounded-lg shadow">
        <Text className="text-base font-semibold">Order #1235</Text>
        <Text className="text-sm text-gray-500">10:45 AM</Text>
        <Text className="mt-2">2x Vegetarian Pasta</Text>
        <Text className="text-right">$21.98</Text>
        <Text className="mt-2 font-bold">Total $21.98</Text>
        <View className="flex-row mt-4">
          <TouchableOpacity  className="bg-black text-white px-4 py-2 rounded mr-2" />
          <TouchableOpacity  className="bg-gray-300 text-black px-4 py-2 rounded" />
        </View>
      </View>
    </View>
  )
}

export default order