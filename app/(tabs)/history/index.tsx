import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HistoryScreen = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for delivery history
  const deliveryHistory = [
    {
      id: "1",
      date: "2025-07-06",
      time: "14:30",
      status: "completed",
      fromLocation: "Central Park",
      toLocation: "123 Main St, Apt 4B",
      duration: "8 min",
      cost: "$12.50",
      umbrellaType: "Standard",
      weather: "Heavy Rain",
      rating: 5,
    },
    {
      id: "2",
      date: "2025-07-05",
      time: "09:15",
      status: "completed",
      fromLocation: "Times Square",
      toLocation: "456 Broadway Ave",
      duration: "12 min",
      cost: "$15.00",
      umbrellaType: "Premium",
      weather: "Light Rain",
      rating: 4,
    },
    {
      id: "3",
      date: "2025-07-04",
      time: "16:45",
      status: "cancelled",
      fromLocation: "Brooklyn Bridge",
      toLocation: "789 Park Ave",
      duration: "-",
      cost: "$0.00",
      umbrellaType: "Standard",
      weather: "Sunny",
      rating: null,
    },
    {
      id: "4",
      date: "2025-07-03",
      time: "11:20",
      status: "completed",
      fromLocation: "Empire State Building",
      toLocation: "321 5th Avenue",
      duration: "6 min",
      cost: "$10.00",
      umbrellaType: "Compact",
      weather: "Drizzle",
      rating: 5,
    },
    {
      id: "5",
      date: "2025-07-02",
      time: "18:30",
      status: "completed",
      fromLocation: "Washington Square",
      toLocation: "654 University Pl",
      duration: "10 min",
      cost: "$13.75",
      umbrellaType: "Standard",
      weather: "Moderate Rain",
      rating: 4,
    },
  ];

  const FilterButton = ({
    label,
    value,
    count,
  }: {
    label: string;
    value: string;
    count?: number;
  }) => (
    <TouchableOpacity
      className={`px-4 py-2 rounded-full mr-3 ${
        activeFilter === value
          ? "bg-black dark:bg-pictonBlue"
          : "bg-gray-100 dark:bg-persianBlue"
      }`}
      onPress={() => setActiveFilter(value)}
    >
      <Text
        className={`font-medium ${
          activeFilter === value ? "text-white" : "text-black dark:text-white"
        }`}
      >
        {label} {count && `(${count})`}
      </Text>
    </TouchableOpacity>
  );

  const DeliveryCard = ({ delivery }: { delivery: any }) => {
    const getStatusColor = (status: string) => {
      switch (status) {
        case "completed":
          return "text-green-600 dark:text-green-400";
        case "cancelled":
          return "text-red-600 dark:text-red-400";
        case "in-progress":
          return "text-blue-600 dark:text-blue-400";
        default:
          return "text-gray-600 dark:text-gray-400";
      }
    };

    const getStatusIcon = (status: string) => {
      switch (status) {
        case "completed":
          return "✅";
        case "cancelled":
          return "❌";
        case "in-progress":
          return "🚁";
        default:
          return "⏳";
      }
    };

    const renderStars = (rating: number | null) => {
      if (!rating) return null;
      return Array.from({ length: 5 }, (_, i) => (
        <Text
          key={i}
          className={
            i < rating ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"
          }
        >
          ⭐
        </Text>
      ));
    };

    return (
      <Link href={`/(tabs)/history/${delivery.id}`} asChild>
        <TouchableOpacity className="bg-white dark:bg-persianBlue rounded-lg p-4 mb-3 border border-gray-100 dark:border-gray-700">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-3">
            <View className="flex-row items-center">
              <Text className="text-lg mr-2">
                {getStatusIcon(delivery.status)}
              </Text>
              <Text className="text-base font-semibold text-black dark:text-white">
                {delivery.date} • {delivery.time}
              </Text>
            </View>
            <Text
              className={`text-sm font-medium ${getStatusColor(
                delivery.status
              )}`}
            >
              {delivery.status.charAt(0).toUpperCase() +
                delivery.status.slice(1)}
            </Text>
          </View>

          {/* Route */}
          <View className="mb-3">
            <View className="flex-row items-center mb-2">
              <View className="w-3 h-3 bg-green-500 rounded-full mr-3" />
              <Text className="text-sm text-gray-600 dark:text-morningBlue flex-1">
                From: {delivery.fromLocation}
              </Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-3 h-3 bg-red-500 rounded-full mr-3" />
              <Text className="text-sm text-gray-600 dark:text-morningBlue flex-1">
                To: {delivery.toLocation}
              </Text>
            </View>
          </View>

          {/* Details */}
          <View className="flex-row items-center justify-between mb-3">
            <View className="flex-1">
              <Text className="text-xs text-gray-500 dark:text-gray-400">
                Umbrella Type
              </Text>
              <Text className="text-sm font-medium text-black dark:text-white">
                {delivery.umbrellaType}
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-xs text-gray-500 dark:text-gray-400">
                Duration
              </Text>
              <Text className="text-sm font-medium text-black dark:text-white">
                {delivery.duration}
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-xs text-gray-500 dark:text-gray-400">
                Weather
              </Text>
              <Text className="text-sm font-medium text-black dark:text-white">
                {delivery.weather}
              </Text>
            </View>
          </View>

          {/* Footer */}
          <View className="flex-row items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
            <Text className="text-lg font-bold text-black dark:text-white">
              {delivery.cost}
            </Text>
            {delivery.rating && (
              <View className="flex-row items-center">
                <View className="flex-row mr-2">
                  {renderStars(delivery.rating)}
                </View>
                <Text className="text-sm text-gray-500 dark:text-gray-400">
                  {delivery.rating}/5
                </Text>
              </View>
            )}
            <Text className="text-gray-400 dark:text-gray-500 text-lg">›</Text>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  const filteredDeliveries = deliveryHistory.filter((delivery) => {
    const matchesFilter =
      activeFilter === "all" || delivery.status === activeFilter;
    const matchesSearch =
      delivery.fromLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.toLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.umbrellaType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const completedCount = deliveryHistory.filter(
    (d) => d.status === "completed"
  ).length;
  const cancelledCount = deliveryHistory.filter(
    (d) => d.status === "cancelled"
  ).length;

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-collegeBlue">
      {/* Header */}
      <View className="bg-white dark:bg-persianBlue px-4 py-4 border-b border-gray-100 dark:border-gray-700">
        <Text className="text-2xl font-bold text-black dark:text-yellowBanana">
          Delivery History
        </Text>
        <Text className="text-sm text-gray-600 dark:text-morningBlue mt-1">
          {deliveryHistory.length} total deliveries
        </Text>
      </View>

      <ScrollView className="flex-1">
        {/* Search Bar */}
        <View className="px-4 py-4">
          <View className="bg-white dark:bg-persianBlue rounded-lg border border-gray-200 dark:border-gray-600">
            <TextInput
              className="p-4 text-black dark:text-white"
              placeholder="Search deliveries..."
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Filter Buttons */}
        <View className="px-4 mb-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FilterButton
              label="All"
              value="all"
              count={deliveryHistory.length}
            />
            <FilterButton
              label="Completed"
              value="completed"
              count={completedCount}
            />
            <FilterButton
              label="Cancelled"
              value="cancelled"
              count={cancelledCount}
            />
          </ScrollView>
        </View>

        {/* Stats Card */}
        <View className="px-4 mb-4">
          <View className="bg-white dark:bg-persianBlue rounded-lg p-4">
            <Text className="text-lg font-semibold text-black dark:text-yellowBanana mb-3">
              Your Stats
            </Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-2xl font-bold text-black dark:text-white">
                  {completedCount}
                </Text>
                <Text className="text-sm text-gray-500 dark:text-morningBlue">
                  Completed
                </Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-black dark:text-white">
                  {Math.round(
                    (deliveryHistory.reduce(
                      (acc, d) => (d.rating ? acc + d.rating : acc),
                      0
                    ) /
                      completedCount) *
                      10
                  ) / 10}
                </Text>
                <Text className="text-sm text-gray-500 dark:text-morningBlue">
                  Avg Rating
                </Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-black dark:text-white">
                  $
                  {deliveryHistory
                    .reduce(
                      (acc, d) => acc + parseFloat(d.cost.replace("$", "")),
                      0
                    )
                    .toFixed(2)}
                </Text>
                <Text className="text-sm text-gray-500 dark:text-morningBlue">
                  Total Spent
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Delivery List */}
        <View className="px-4">
          {filteredDeliveries.length > 0 ? (
            filteredDeliveries.map((delivery) => (
              <DeliveryCard key={delivery.id} delivery={delivery} />
            ))
          ) : (
            <View className="bg-white dark:bg-persianBlue rounded-lg p-8 items-center">
              <Text className="text-6xl mb-4">📦</Text>
              <Text className="text-lg font-semibold text-black dark:text-white mb-2">
                No deliveries found
              </Text>
              <Text className="text-sm text-gray-500 dark:text-morningBlue text-center">
                {searchQuery
                  ? "Try adjusting your search terms"
                  : "Your delivery history will appear here"}
              </Text>
            </View>
          )}
        </View>

        {/* Bottom Spacing */}
        <View className="h-8" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;
