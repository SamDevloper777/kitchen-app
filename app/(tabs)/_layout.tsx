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
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#f5f5f5',
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
        },
        tabBarActiveTintColor: '#FF5722',  // Vibrant orange for active state
        tabBarInactiveTintColor: '#B0BEC5', // Soft grey-blue for inactive state
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <House 
              size={28} 
              color={color} 
              strokeWidth={focused ? 2.5 : 1.8}
            />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <CookingPot 
              size={28} 
              color={color} 
              strokeWidth={focused ? 2.5 : 1.8}
            />
          ),
          title: "Menu",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <UserRound 
              size={28} 
              color={color} 
              strokeWidth={focused ? 2.5 : 1.8}
            />
          ),
          title: "Profile",
        }}
      />
      <Tabs.Screen
        name="coupon"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Tag 
              size={28} 
              color={color} 
              strokeWidth={focused ? 2.5 : 1.8}
            />
          ),
          title: "Coupon",
        }}
      />
    </Tabs>
  );
}