import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();
  const isDark = colorScheme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? "#0F214D" : "#EBFCFF",
          borderTopWidth: 0,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
        },
        tabBarActiveTintColor: isDark ? "#2BA3EC" : "#0B5FB0",
        tabBarInactiveTintColor: isDark ? "#AAF1FF" : "#0F214D",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginTop: -4,
        },
        tabBarItemStyle: {
          paddingVertical: 8,
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Map",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`p-2 rounded-full ${
                focused ? "bg-persianBlue/10" : ""
              }`}
            >
              <Ionicons
                name={focused ? "map" : "map-outline"}
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="history/index"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`p-2 rounded-full ${
                focused ? "bg-persianBlue/10" : ""
              }`}
            >
              <MaterialCommunityIcons
                name={focused ? "clock" : "clock-outline"}
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />

      {/* Floating Center Button */}
      <Tabs.Screen
        name="order" // This would be a modal stack
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              className={`absolute -top-6 items-center justify-center 
                w-16 h-16 rounded-full shadow-lg
                ${isDark ? "shadow-pictonBlue/30" : "shadow-collegeBlue/30"}`}
              style={{
                backgroundColor: focused ? "#0B5FB0" : "#2BA3EC",
              }}
            >
              <FontAwesome5 name="umbrella-beach" size={24} color="white" />
            </TouchableOpacity>
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tabs.Screen
        name="wallet/index"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`p-2 rounded-full ${
                focused ? "bg-persianBlue/10" : ""
              }`}
            >
              <FontAwesome5
                name={focused ? "wallet" : "wallet"}
                size={20}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="account/index"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`p-2 rounded-full ${
                focused ? "bg-persianBlue/10" : ""
              }`}
            >
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account/settings"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="history/[id]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="account/help"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="home/[ride]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
