import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}