import ProtectedRoute from "@/utils/protectedRoute";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <ProtectedRoute>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="addMenu" />
      </Stack>
    </ProtectedRoute>
  );
}