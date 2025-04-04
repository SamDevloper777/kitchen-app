// app/utils/ProtectedRoute.tsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, useRouter } from "expo-router";
import { RootState } from "@/redux/store";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { access_token } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (access_token === undefined) {
      router.replace("/(auth)"); // Redirect to login if not authenticated
    }
  }, [access_token]);

  if (access_token === undefined) return null; // Prevent rendering if not authenticated

  return <>{children}</>;
};

export default ProtectedRoute;
