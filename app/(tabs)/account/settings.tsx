import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const SettingsItem = ({
    title,
    subtitle,
    onPress,
    showArrow = true,
    rightComponent,
  }: {
    title: string;
    subtitle?: string;
    onPress?: () => void;
    showArrow?: boolean;
    rightComponent?: React.ReactNode;
  }) => (
    <TouchableOpacity
      className="bg-white dark:bg-persianBlue px-4 py-4 border-b border-gray-100 dark:border-gray-700"
      onPress={onPress}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-base font-medium text-black dark:text-white">
            {title}
          </Text>
          {subtitle && (
            <Text className="text-sm text-gray-500 dark:text-morningBlue mt-1">
              {subtitle}
            </Text>
          )}
        </View>
        {rightComponent ||
          (showArrow && (
            <Text className="text-gray-400 dark:text-gray-500 text-lg">›</Text>
          ))}
      </View>
    </TouchableOpacity>
  );

  const SectionHeader = ({ title }: { title: string }) => (
    <View className="px-4 py-3 bg-gray-50 dark:bg-collegeBlue">
      <Text className="text-sm font-medium text-gray-600 dark:text-morningBlue uppercase tracking-wide">
        {title}
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-collegeBlue">
      {/* Header */}
      <View className="bg-white dark:bg-persianBlue px-4 py-4 border-b border-gray-100 dark:border-gray-700">
        <Text className="text-2xl font-bold text-black dark:text-yellowBanana">
          Settings
        </Text>
      </View>

      <ScrollView className="flex-1">
        {/* Account Section */}
        <SectionHeader title="Account" />
        <View className="mb-4">
          <SettingsItem
            title="Personal Information"
            subtitle="Name, email, phone number"
          />
          <SettingsItem
            title="Payment Methods"
            subtitle="Manage your payment options"
          />
          <SettingsItem
            title="Delivery Addresses"
            subtitle="Home, work, and other addresses"
          />
        </View>

        {/* Preferences Section */}
        <SectionHeader title="Preferences" />
        <View className="mb-4">
          <SettingsItem
            title="Notifications"
            subtitle="Push notifications, email updates"
            showArrow={false}
            rightComponent={
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: "#E5E5E5", true: "#2BA3EC" }}
                thumbColor={notificationsEnabled ? "#FFFFFF" : "#F4F3F4"}
              />
            }
          />
          <SettingsItem
            title="Location Services"
            subtitle="Allow location access for deliveries"
            showArrow={false}
            rightComponent={
              <Switch
                value={locationEnabled}
                onValueChange={setLocationEnabled}
                trackColor={{ false: "#E5E5E5", true: "#2BA3EC" }}
                thumbColor={locationEnabled ? "#FFFFFF" : "#F4F3F4"}
              />
            }
          />
          <SettingsItem
            title="Dark Mode"
            subtitle="Appearance setting"
            showArrow={false}
            rightComponent={
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: "#E5E5E5", true: "#2BA3EC" }}
                thumbColor={darkMode ? "#FFFFFF" : "#F4F3F4"}
              />
            }
          />
          <SettingsItem title="Language" subtitle="English" />
        </View>

        {/* Privacy & Safety Section */}
        <SectionHeader title="Privacy & Safety" />
        <View className="mb-4">
          <SettingsItem
            title="Privacy Settings"
            subtitle="Control your data sharing"
          />
          <SettingsItem
            title="Safety Center"
            subtitle="Emergency contacts and features"
          />
          <SettingsItem
            title="Data & Privacy"
            subtitle="Download or delete your data"
          />
        </View>

        {/* Support Section */}
        <SectionHeader title="Support" />
        <View className="mb-4">
          <SettingsItem title="Help Center" subtitle="Get help and support" />
          <SettingsItem
            title="Contact Us"
            subtitle="Report issues or give feedback"
          />
          <SettingsItem title="About" subtitle="App version and legal info" />
        </View>

        {/* Account Actions */}
        <View className="mt-4 mb-8">
          <TouchableOpacity className="bg-white dark:bg-persianBlue px-4 py-4 border-b border-gray-100 dark:border-gray-700">
            <Text className="text-base font-medium text-red-600 dark:text-red-400">
              Sign Out
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white dark:bg-persianBlue px-4 py-4">
            <Text className="text-base font-medium text-red-600 dark:text-red-400">
              Delete Account
            </Text>
          </TouchableOpacity>
        </View>

        {/* App Version */}
        <View className="px-4 py-6">
          <Text className="text-center text-sm text-gray-500 dark:text-morningBlue">
            AeroShade v1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
