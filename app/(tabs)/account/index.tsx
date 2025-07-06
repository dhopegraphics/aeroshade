import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
  const QuickActionItem = ({
    title,
    subtitle,
    onPress,
    href,
  }: {
    title: string;
    subtitle: string;
    onPress?: () => void;
    href?: string;
  }) => {
    const content = (
      <View className="bg-white dark:bg-persianBlue p-4 rounded-lg mb-3">
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-base font-medium text-black dark:text-white">
              {title}
            </Text>
            <Text className="text-sm text-gray-500 dark:text-morningBlue mt-1">
              {subtitle}
            </Text>
          </View>
          <Text className="text-gray-400 dark:text-gray-500 text-lg">›</Text>
        </View>
      </View>
    );

    if (href) {
      return (
        <Link href={href as any} asChild>
          <TouchableOpacity>{content}</TouchableOpacity>
        </Link>
      );
    }

    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
  };

  const MenuItem = ({
    title,
    icon,
    onPress,
    href,
  }: {
    title: string;
    icon: string;
    onPress?: () => void;
    href?: string;
  }) => {
    const content = (
      <View className="flex-row items-center py-4 px-4 border-b border-gray-100 dark:border-gray-700">
        <View className="w-10 h-10 bg-gray-100 dark:bg-collegeBlue rounded-full items-center justify-center mr-4">
          <Text className="text-lg">{icon}</Text>
        </View>
        <Text className="flex-1 text-base text-black dark:text-white">
          {title}
        </Text>
        <Text className="text-gray-400 dark:text-gray-500 text-lg">›</Text>
      </View>
    );

    if (href) {
      return (
        <Link href={href as any} asChild>
          <TouchableOpacity>{content}</TouchableOpacity>
        </Link>
      );
    }

    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-collegeBlue">
      <ScrollView className="flex-1">
        {/* Profile Header */}
        <View className="bg-white dark:bg-persianBlue px-6 py-8">
          <View className="flex-row items-center">
            {/* Profile Picture */}
            <View className="w-16 h-16 bg-gray-200 dark:bg-collegeBlue rounded-full items-center justify-center mr-4">
              <Text className="text-2xl text-gray-500 dark:text-morningBlue">
                👤
              </Text>
            </View>

            {/* User Info */}
            <View className="flex-1">
              <Text className="text-xl font-bold text-black dark:text-yellowBanana">
                John Doe
              </Text>
              <Text className="text-sm text-gray-600 dark:text-morningBlue mt-1">
                john.doe@email.com
              </Text>
              <Text className="text-sm text-gray-500 dark:text-morningBlue">
                +1 (555) 123-4567
              </Text>
            </View>

            {/* Edit Button */}
            <TouchableOpacity className="p-2">
              <Text className="text-blue-600 dark:text-pictonBlue font-medium">
                Edit
              </Text>
            </TouchableOpacity>
          </View>

          {/* Rating */}
          <View className="flex-row items-center mt-4">
            <Text className="text-lg">⭐</Text>
            <Text className="text-base font-medium text-black dark:text-white ml-1">
              4.9
            </Text>
            <Text className="text-sm text-gray-500 dark:text-morningBlue ml-2">
              Based on 127 deliveries
            </Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="px-6 py-6">
          <Text className="text-lg font-semibold text-black dark:text-yellowBanana mb-4">
            Quick Actions
          </Text>

          <QuickActionItem
            title="Delivery History"
            subtitle="View your past umbrella deliveries"
            href="/(tabs)/history"
          />

          <QuickActionItem
            title="Payment Methods"
            subtitle="Manage cards and payment options"
            onPress={() => console.log("Payment methods")}
          />

          <QuickActionItem
            title="Delivery Addresses"
            subtitle="Home, work, and saved locations"
            onPress={() => console.log("Addresses")}
          />
        </View>

        {/* Menu Items */}
        <View className="bg-white dark:bg-persianBlue mx-6 rounded-lg mb-6">
          <MenuItem
            title="Settings"
            icon="⚙️"
            href="/(tabs)/account/settings"
          />

          <MenuItem
            title="Help & Support"
            icon="❓"
            href="/(tabs)/account/help"
          />

          <MenuItem
            title="Safety"
            icon="🛡️"
            onPress={() => console.log("Safety")}
          />

          <MenuItem
            title="Legal"
            icon="📄"
            onPress={() => console.log("Legal")}
          />
        </View>

        {/* Promotions */}
        <View className="px-6 mb-6">
          <View className="bg-blue-50 dark:bg-persianBlue p-4 rounded-lg border border-blue-200 dark:border-pictonBlue">
            <View className="flex-row items-center">
              <Text className="text-2xl mr-3">🎁</Text>
              <View className="flex-1">
                <Text className="text-base font-medium text-blue-900 dark:text-white">
                  Invite Friends
                </Text>
                <Text className="text-sm text-blue-700 dark:text-morningBlue mt-1">
                  Get $5 credit for each friend who signs up
                </Text>
              </View>
              <TouchableOpacity>
                <Text className="text-blue-600 dark:text-pictonBlue font-medium">
                  Share
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Sign Out */}
        <View className="px-6 pb-8">
          <TouchableOpacity className="bg-white dark:bg-persianBlue p-4 rounded-lg">
            <Text className="text-center text-red-600 dark:text-red-400 font-medium">
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>

        {/* App Version */}
        <View className="px-6 pb-6">
          <Text className="text-center text-sm text-gray-500 dark:text-morningBlue">
            AeroShade v1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
