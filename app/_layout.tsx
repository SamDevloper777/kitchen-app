import { Stack } from "expo-router";
import "./global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
       <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
    </Provider>
   
  );
}
