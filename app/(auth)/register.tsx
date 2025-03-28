import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearError } from "../../redux/slices/authSlice";
import { AppDispatch, RootState } from "../../redux/store";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", name: "", password: "" });

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, isRegistered } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    // Clear any existing errors when component mounts
    dispatch(clearError());
  }, []);

  useEffect(() => {
    if (isRegistered) {
      // Navigate to OTP verification screen
      router.push("/(auth)/otpVerify");
    }
  }, [isRegistered]);

  const validate = () => {
    let valid = true;
    let newErrors = { email: "", name: "", password: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleRegister = async () => {
    if (validate()) {
      try {
        await dispatch(registerUser({ name, email, password }));
      } catch (err) {
        // API error will be handled by the redux state
        console.error("Registration failed:", err);
      }
    }
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center px-6">
      <Text className="text-2xl font-bold text-center">Hello Again!</Text>
      <Text className="text-gray-500 mt-1 text-center">
        Welcome back you've been missed!
      </Text>

      {error && (
        <Text className="text-red-500 text-sm text-center mt-2">{error}</Text>
      )}

      {/* Name */}
      <TextInput
        className="w-full p-4 mt-6 bg-white rounded-xl border border-gray-300"
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />
      {errors.name ? (
        <Text className="text-red-500 text-sm self-start mt-1">
          {errors.name}
        </Text>
      ) : null}

      {/* Email */}
      <TextInput
        className="w-full p-4 mt-4 bg-white rounded-xl border border-gray-300"
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email ? (
        <Text className="text-red-500 text-sm self-start mt-1">
          {errors.email}
        </Text>
      ) : null}

      {/* Password */}
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
      {errors.password ? (
        <Text className="text-red-500 text-sm self-start mt-1">
          {errors.password}
        </Text>
      ) : null}

      <TouchableOpacity className="w-full mt-2">
        <Text className="text-right text-blue-500">Recovery Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="w-full bg-orange-500 p-4 rounded-xl mt-6"
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white text-center font-bold">Sign up</Text>
        )}
      </TouchableOpacity>

      <Text className="text-gray-500 my-4 text-center">or continue with</Text>

      <View className="flex-row justify-center space-x-4">
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

      <Pressable onPress={() => router.replace("/(auth)")} className="mt-6">
        <Text className="text-center">
          Already have an Account?
          <Text className="text-blue-500"> Login now</Text>
        </Text>
      </Pressable>
    </View>
  );
}
