import { View, Text } from 'react-native'
import React from 'react'
import MenuCard from "../../components/MenuCard";

const menu = () => {
  return (
    <View>
      <Text>Current Menu</Text>
      <MenuCard/>
    </View>
  )
}

export default menu