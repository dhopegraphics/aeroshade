import { useColorScheme } from "nativewind";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LocationSearchModal() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  // Sample recent locations data
  const recentLocations = [
    { id: "1", name: "Home", address: "123 Main St" },
    { id: "2", name: "Work", address: "456 Business Ave" },
    { id: "3", name: "Coffee Shop", address: "789 Brew St" },
  ];

  return (
    <SafeAreaView
      className={`flex-1 ${isDark ? "bg-collegeBlue" : "bg-morningBlue"}`}
    >
      <View className="p-4">
        <TextInput
          placeholder="Search for a location"
          placeholderTextColor={isDark ? "#AAFIFF" : "#0F214D"}
          className={`p-4 rounded-xl ${
            isDark
              ? "bg-collegeBlue text-morningBlue border-pictonBlue"
              : "bg-white text-collegeBlue border-middleBlue"
          } border`}
          autoFocus
        />

        <Text
          className={`mt-6 mb-2 text-lg font-semibold ${
            isDark ? "text-yellowBanana" : "text-collegeBlue"
          }`}
        >
          Recent Locations
        </Text>

        <FlatList
          data={recentLocations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity className="py-3 border-b border-middleBlue">
              <Text
                className={`font-medium ${
                  isDark ? "text-morningBlue" : "text-collegeBlue"
                }`}
              >
                {item.name}
              </Text>
              <Text
                className={`text-sm ${
                  isDark ? "text-pictonBlue" : "text-persianBlue"
                }`}
              >
                {item.address}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
