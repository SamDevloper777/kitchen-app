import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import MenuCard from "../../components/MenuCard";
import CouponCard from "../../components/CouponCard";
import { router } from 'expo-router';

const menu = () => {
  return (
    <View className="flex-col items-center p-4">
      <View className="flex-row items-center justify-between w-full mb-4">
        <Text className="text-xl font-bold">Current Menu</Text>

        <Pressable
          className="bg-black px-4 py-2 rounded-lg w-32"
          onPress={() => router.replace('../(screens)/addMenu')}
        >
          <Text className="text-white text-center">Add Menu</Text>
        </Pressable>
      </View>


      <View className="bg-white p-4 w-full rounded-lg shadow-md">
        <View className="gap-3">
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </View>
      </View>
    </View>

  )
}

export default menu