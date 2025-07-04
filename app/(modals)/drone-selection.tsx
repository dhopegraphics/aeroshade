import { useColorScheme } from "nativewind";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const droneTypes = [
  {
    id: "standard",
    name: "Standard AeroShade",
    description: "Compact umbrella for light rain",
    capacity: "1-2 people",
    speed: "Medium",
    price: "$3.99",
  },
  {
    id: "premium",
    name: "Premium AeroShade",
    description: "Large umbrella with wind resistance",
    capacity: "2-3 people",
    speed: "Fast",
    price: "$5.99",
  },
  {
    id: "xl",
    name: "AeroShade XL",
    description: "Extra large coverage for groups",
    capacity: "4-5 people",
    speed: "Slow",
    price: "$7.99",
  },
];

export default function DroneSelectionModal() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaView
      className={`flex-1 ${isDark ? "bg-collegeBlue" : "bg-morningBlue"}`}
    >
      <View className="p-4">
        <Text
          className={`text-xl font-bold mb-4 ${
            isDark ? "text-yellowBanana" : "text-collegeBlue"
          }`}
        >
          Select Your Umbrella Drone
        </Text>

        <FlatList
          data={droneTypes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`p-4 mb-3 rounded-xl ${
                isDark ? "bg-persianBlue" : "bg-white"
              }`}
            >
              <View className="flex-row justify-between">
                <Text
                  className={`font-bold ${
                    isDark ? "text-white" : "text-collegeBlue"
                  }`}
                >
                  {item.name}
                </Text>
                <Text
                  className={`font-bold ${
                    isDark ? "text-yellowBanana" : "text-persianBlue"
                  }`}
                >
                  {item.price}
                </Text>
              </View>
              <Text
                className={`mt-1 ${
                  isDark ? "text-morningBlue" : "text-collegeBlue"
                }`}
              >
                {item.description}
              </Text>
              <View className="flex-row mt-2">
                <Text
                  className={`text-sm mr-4 ${
                    isDark ? "text-pictonBlue" : "text-persianBlue"
                  }`}
                >
                  🧑‍🤝‍🧑 {item.capacity}
                </Text>
                <Text
                  className={`text-sm ${
                    isDark ? "text-pictonBlue" : "text-persianBlue"
                  }`}
                >
                  🚀 {item.speed}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity
          className={`mt-4 p-4 rounded-xl items-center ${
            isDark ? "bg-pictonBlue" : "bg-persianBlue"
          }`}
        >
          <Text className="text-white font-bold">Confirm Selection</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
