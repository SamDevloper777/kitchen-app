import { View, Text } from 'react-native'
import React from 'react'
import CouponCard from '@/components/CouponCard'

const coupon = () => {
  return (
    <View>
        <Text className='font-bold text-xl p-4'>Coupons</Text>
        <View className='flex p-4 bg-white'>
      <CouponCard/>
      <CouponCard/>
      <CouponCard/>
      <CouponCard/>
    </View>
    </View>
  )
}

export default coupon