// components/OtpVerify.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, clearError } from "../../redux/slices/authSlice";
import { router } from "expo-router";
import { RootState, AppDispatch } from "../../redux/store";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");
  const [localError, setLocalError] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error: reduxError, success, registeredEmail } = useSelector(
    (state: RootState) => state.auth
  );

  // Initial setup and cleanup
  useEffect(() => {
    dispatch(clearError());
    if (!registeredEmail) {
      router.replace("/(auth)");
    }
    return () => {
      dispatch(clearError());
    };
  }, [dispatch, registeredEmail]);



  const validateOtp = () => {
    if (!otp.trim()) {
      setLocalError("Please enter the OTP");
      return false;
    }
    if (otp.length !== 4) {
      setLocalError("OTP must be 4 digits");
      return false;
    }
    setLocalError(""); // Clear local error if validation passes
    return true;
  };

  const handleVerify = async () => {
    if (validateOtp() && registeredEmail) {
      try {
        await dispatch(verifyOtp({ email: registeredEmail, otp })).unwrap(); // Use registeredEmail
      } catch (err) {
        // Error is handled by redux state
      }
    }
  };

  const handleResend = () => {
    // Add resend OTP logic here if needed
    console.log("Resend OTP requested");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-gray-100"
    >
      <View className="flex-1 justify-center px-6">
        <Text className="text-2xl font-bold text-center text-gray-800">
          Verify Your Email
        </Text>
        <Text className="text-gray-500 mt-2 text-center">
          Enter the 6-digit code sent to{"\n"}
          <Text className="font-semibold">{registeredEmail}</Text> {/* Use registeredEmail */}
        </Text>

        {(localError || reduxError) && (
          <Text className="text-red-500 text-sm text-center mt-4">
            {localError || reduxError}
          </Text>
        )}

        <View className="mt-8">
          <TextInput
            className="w-full p-4 bg-white rounded-xl border border-gray-300 text-center text-lg tracking-widest"
            placeholder="------"
            value={otp}
            onChangeText={(text) => {
              setOtp(text.replace(/[^0-9]/g, "")); // Only allow numbers
              setLocalError("");
            }}
            keyboardType="numeric"
            maxLength={6}
            autoFocus
          />
        </View>

        <TouchableOpacity
          className={`w-full ${
            loading ? "bg-orange-300" : "bg-orange-500"
          } p-4 rounded-xl mt-8`}
          onPress={handleVerify}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white text-center font-bold text-lg">
              Verify OTP
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-4"
          onPress={handleResend}
          disabled={loading}
        >
          <Text className="text-center text-blue-500">
            Didn't receive a code? Resend
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-4"
          onPress={() => router.replace("/(auth)")}
        >
          <Text className="text-center text-gray-600">
            Back to Login
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}