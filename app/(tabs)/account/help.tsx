import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HelpScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const HelpCategory = ({
    title,
    icon,
    items,
    categoryKey,
  }: {
    title: string;
    icon: string;
    items: string[];
    categoryKey: string;
  }) => {
    const isExpanded = expandedCategory === categoryKey;

    return (
      <View className="bg-white dark:bg-persianBlue rounded-lg mb-3">
        <TouchableOpacity
          className="p-4 flex-row items-center justify-between"
          onPress={() => setExpandedCategory(isExpanded ? null : categoryKey)}
        >
          <View className="flex-row items-center flex-1">
            <View className="w-10 h-10 bg-gray-100 dark:bg-collegeBlue rounded-full items-center justify-center mr-4">
              <Text className="text-lg">{icon}</Text>
            </View>
            <Text className="text-base font-medium text-black dark:text-white">
              {title}
            </Text>
          </View>
          <Text
            className={`text-lg text-gray-400 dark:text-gray-500 transform ${
              isExpanded ? "rotate-90" : ""
            }`}
          >
            ›
          </Text>
        </TouchableOpacity>

        {isExpanded && (
          <View className="pb-4">
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="px-4 py-3 mx-4 border-l-2 border-gray-200 dark:border-gray-600"
              >
                <Text className="text-sm text-gray-700 dark:text-morningBlue">
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  const QuickActionButton = ({
    title,
    subtitle,
    icon,
    onPress,
    backgroundColor = "bg-blue-50 dark:bg-persianBlue",
    textColor = "text-blue-900 dark:text-white",
  }: {
    title: string;
    subtitle: string;
    icon: string;
    onPress: () => void;
    backgroundColor?: string;
    textColor?: string;
  }) => (
    <TouchableOpacity
      className={`${backgroundColor} p-4 rounded-lg mb-3`}
      onPress={onPress}
    >
      <View className="flex-row items-center">
        <Text className="text-2xl mr-3">{icon}</Text>
        <View className="flex-1">
          <Text className={`text-base font-medium ${textColor}`}>{title}</Text>
          <Text className="text-sm text-gray-600 dark:text-morningBlue mt-1">
            {subtitle}
          </Text>
        </View>
        <Text className="text-gray-400 dark:text-gray-500 text-lg">›</Text>
      </View>
    </TouchableOpacity>
  );

  const helpCategories = [
    {
      key: "ordering",
      title: "Ordering & Delivery",
      icon: "📦",
      items: [
        "How to request an umbrella delivery",
        "Delivery time and tracking",
        "Manual control features",
        "Delivery locations and restrictions",
        "Weather-based recommendations",
      ],
    },
    {
      key: "payment",
      title: "Payment & Billing",
      icon: "💳",
      items: [
        "Adding payment methods",
        "Understanding delivery fees",
        "Refunds and cancellations",
        "Payment troubleshooting",
        "Promotional codes and discounts",
      ],
    },
    {
      key: "account",
      title: "Account & Profile",
      icon: "👤",
      items: [
        "Creating and managing your account",
        "Updating personal information",
        "Privacy and data settings",
        "Notification preferences",
        "Account security",
      ],
    },
    {
      key: "technical",
      title: "Technical Issues",
      icon: "⚡",
      items: [
        "App crashes or freezing",
        "GPS and location issues",
        "Drone connection problems",
        "Manual control not responding",
        "Audio/video call issues",
      ],
    },
    {
      key: "safety",
      title: "Safety & Security",
      icon: "🛡️",
      items: [
        "Drone safety protocols",
        "Emergency contact features",
        "Reporting safety concerns",
        "Weather safety guidelines",
        "Privacy and data protection",
      ],
    },
  ];

  const filteredCategories = helpCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.items.some((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-collegeBlue">
      {/* Header */}
      <View className="bg-white dark:bg-persianBlue px-4 py-4 border-b border-gray-100 dark:border-gray-700">
        <Text className="text-2xl font-bold text-black dark:text-yellowBanana">
          Help & Support
        </Text>
        <Text className="text-sm text-gray-600 dark:text-morningBlue mt-1">
          Find answers to common questions
        </Text>
      </View>

      <ScrollView className="flex-1">
        {/* Search Bar */}
        <View className="px-6 py-4">
          <View className="bg-white dark:bg-persianBlue rounded-lg border border-gray-200 dark:border-gray-600">
            <TextInput
              className="p-4 text-black dark:text-white"
              placeholder="Search for help..."
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Quick Actions */}
        <View className="px-6 mb-6">
          <Text className="text-lg font-semibold text-black dark:text-yellowBanana mb-4">
            Need immediate help?
          </Text>

          <QuickActionButton
            title="Contact Support"
            subtitle="Chat with our support team"
            icon="💬"
            onPress={() => console.log("Contact support")}
          />

          <QuickActionButton
            title="Emergency Support"
            subtitle="24/7 emergency assistance"
            icon="🚨"
            backgroundColor="bg-red-50 dark:bg-red-900"
            textColor="text-red-900 dark:text-red-100"
            onPress={() => console.log("Emergency support")}
          />

          <QuickActionButton
            title="Report an Issue"
            subtitle="Report problems with your delivery"
            icon="⚠️"
            backgroundColor="bg-orange-50 dark:bg-orange-900"
            textColor="text-orange-900 dark:text-orange-100"
            onPress={() => console.log("Report issue")}
          />
        </View>

        {/* Help Categories */}
        <View className="px-6">
          <Text className="text-lg font-semibold text-black dark:text-yellowBanana mb-4">
            Browse by topic
          </Text>

          {filteredCategories.map((category) => (
            <HelpCategory
              key={category.key}
              title={category.title}
              icon={category.icon}
              items={category.items}
              categoryKey={category.key}
            />
          ))}
        </View>

        {/* Additional Resources */}
        <View className="px-6 py-6">
          <Text className="text-lg font-semibold text-black dark:text-yellowBanana mb-4">
            Additional Resources
          </Text>

          <View className="bg-white dark:bg-persianBlue rounded-lg">
            <TouchableOpacity className="p-4 border-b border-gray-100 dark:border-gray-700">
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-base font-medium text-black dark:text-white">
                    Community Guidelines
                  </Text>
                  <Text className="text-sm text-gray-500 dark:text-morningBlue mt-1">
                    Learn about our community standards
                  </Text>
                </View>
                <Text className="text-gray-400 dark:text-gray-500 text-lg">
                  ›
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="p-4 border-b border-gray-100 dark:border-gray-700">
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-base font-medium text-black dark:text-white">
                    Terms of Service
                  </Text>
                  <Text className="text-sm text-gray-500 dark:text-morningBlue mt-1">
                    Review our terms and conditions
                  </Text>
                </View>
                <Text className="text-gray-400 dark:text-gray-500 text-lg">
                  ›
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="p-4">
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-base font-medium text-black dark:text-white">
                    Privacy Policy
                  </Text>
                  <Text className="text-sm text-gray-500 dark:text-morningBlue mt-1">
                    Understand how we protect your data
                  </Text>
                </View>
                <Text className="text-gray-400 dark:text-gray-500 text-lg">
                  ›
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Information */}
        <View className="px-6 pb-8">
          <View className="bg-gray-100 dark:bg-collegeBlue p-4 rounded-lg">
            <Text className="text-base font-medium text-black dark:text-yellowBanana mb-2">
              Still need help?
            </Text>
            <Text className="text-sm text-gray-600 dark:text-morningBlue mb-3">
              Our support team is available 24/7 to assist you.
            </Text>
            <View className="flex-row">
              <TouchableOpacity className="bg-blue-600 dark:bg-pictonBlue px-4 py-2 rounded-lg mr-3">
                <Text className="text-white font-medium">Chat Now</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white dark:bg-persianBlue border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg">
                <Text className="text-black dark:text-white font-medium">
                  Call Us
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;
