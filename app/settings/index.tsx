import { useRouter } from "expo-router";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

export default function SettingsPage() {
  const router = useRouter();

  const settingsItems = [
    { title: "Personal Information", icon: "👤", action: () => {} },
    { title: "Payment Methods", icon: "💳", action: () => {} },
    { title: "Trip History", icon: "📋", action: () => {} },
    { title: "Language Preferences", icon: "🌐", action: () => {} },
    { title: "Notifications", icon: "🔔", action: () => {} },
    { title: "Help & Support", icon: "❓", action: () => {} },
    { title: "Terms & Privacy", icon: "📄", action: () => {} },
  ];

  return (
    <View className="flex-1 bg-morningBlue dark:bg-collegeBlue">
      {/* Header */}
      <View className="bg-white dark:bg-gray-800 px-4 py-6 flex-row items-center border-b border-gray-200 dark:border-gray-700">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Text className="text-2xl text-persianBlue dark:text-pictonBlue">
            ←
          </Text>
        </TouchableOpacity>

        <Text className="text-2xl font-bold text-collegeBlue dark:text-white">
          Settings
        </Text>
      </View>

      <ScrollView className="flex-1">
        {/* Profile Section */}
        <View className="bg-white dark:bg-gray-800 m-4 p-6 rounded-xl">
          <View className="flex-row items-center">
            <View className="w-16 h-16 bg-persianBlue dark:bg-pictonBlue rounded-full justify-center items-center mr-4">
              <Text className="text-white text-2xl">👤</Text>
            </View>
            <View>
              <Text className="text-xl font-semibold text-collegeBlue dark:text-white">
                John Doe
              </Text>
              <Text className="text-gray-600 dark:text-gray-400">
                john.doe@example.com
              </Text>
            </View>
          </View>
        </View>

        {/* Settings Items */}
        <View className="bg-white dark:bg-gray-800 m-4 rounded-xl overflow-hidden">
          {settingsItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={item.action}
              className={`flex-row items-center p-4 ${
                index < settingsItems.length - 1
                  ? "border-b border-gray-200 dark:border-gray-700"
                  : ""
              }`}
            >
              <Text className="text-2xl mr-4">{item.icon}</Text>
              <Text className="flex-1 text-lg text-collegeBlue dark:text-white">
                {item.title}
              </Text>
              <Text className="text-gray-400 text-xl">›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Dark Mode Toggle */}
        <View className="bg-white dark:bg-gray-800 m-4 p-4 rounded-xl">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Text className="text-2xl mr-4">🌙</Text>
              <Text className="text-lg text-collegeBlue dark:text-white">
                Dark Mode
              </Text>
            </View>
            <Switch
              value={false}
              onValueChange={() => {}}
              trackColor={{ false: "#767577", true: "#0B5FB0" }}
              thumbColor={"#f4f3f4"}
            />
          </View>
        </View>

        {/* Logout */}
        <View className="m-4">
          <TouchableOpacity
            onPress={() => router.replace("/(auth)/login")}
            className="bg-red-500 py-4 rounded-xl"
          >
            <Text className="text-white text-center font-semibold text-lg">
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
