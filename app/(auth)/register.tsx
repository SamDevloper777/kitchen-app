import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 px-6">
      <Text className="text-2xl font-bold">Hello Again!</Text>
      <Text className="text-gray-500 mt-1">
        Welcome back you've been missed!
      </Text>

      <TextInput
        className="w-full p-4 mt-6 bg-white rounded-xl border border-gray-300"
        placeholder="Enter email"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        className="w-full p-4 mt-6 bg-white rounded-xl border border-gray-300"
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />

      <View className="w-full flex-row items-center bg-white rounded-xl border border-gray-300 mt-4 px-4 py-3">
        <TextInput
          className="flex-1"
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <FontAwesome
            name={showPassword ? "eye" : "eye-slash"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="w-full mt-2">
        <Text className="text-right text-blue-500">Recovery Password</Text>
      </TouchableOpacity>

      <TouchableOpacity className="w-full bg-orange-500 p-4 rounded-xl mt-6">
        <Text className="text-white text-center font-bold">Sign in</Text>
      </TouchableOpacity>

      <Text className="text-gray-500 my-4">or continue with</Text>

      <View className="flex-row space-x-4">
        <TouchableOpacity className="p-3 bg-white rounded-full border border-gray-300">
          <Image
            source={require("../../assets/google.png")}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity className="p-3 bg-white rounded-full border border-gray-300">
          <Image
            source={require("../../assets/apple.png")}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity className="p-3 bg-white rounded-full border border-gray-300">
          <Image
            source={require("../../assets/facebook.png")}
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
      <Pressable
        onPress={() => router.replace("/(auth)")}
        className="mt-6"
      >
        <Text className="mt-6">Already have a Account?<Text className="text-blue-500"> Login now</Text></Text>
    </Pressable>
    </View>
  );
}
