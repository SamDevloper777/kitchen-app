import { Tabs } from "expo-router";
import { Tag } from 'lucide-react-native';
import { House } from "lucide-react-native";
import { UserRound } from "lucide-react-native";
import { CookingPot } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: () => <House size={24} color="black" />,
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: () => <CookingPot size={24} color="black" />,
          title: "menu",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => <UserRound size={24} color="black" />,
          title: "Profile",
        }}
      />
      <Tabs.Screen
        name="coupon"
        options={{
          tabBarIcon: () => <Tag size={24} color="black" />,
          title: "Coupon",
        }}
      />
    </Tabs>
  );
}
