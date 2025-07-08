import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RideDetails = () => {
  const { ride } = useLocalSearchParams();
  const [currentStatus, setCurrentStatus] = useState("confirmed");
  const [eta, setEta] = useState(8);

  // Mock data for active delivery
  const deliveryData = {
    id: ride,
    status: currentStatus,
    requestTime: "14:22",
    estimatedArrival: `${eta} min`,
    droneId: "AS-2401",
    pilotName: "Sarah Johnson",
    pilotRating: 4.9,
    umbrellaType: "Standard Black Umbrella",
    weather: "Heavy Rain",
    temperature: "68°F",
    pickupLocation: "Central Park Entrance",
    deliveryLocation: "123 Main St, Apt 4B",
    cost: "$12.50",
    distance: "2.3 miles",
    currentLocation: "En route to delivery",
  };

  // Simulate status updates
  useEffect(() => {
    const statusFlow = [
      "confirmed",
      "dispatched",
      "picked_up",
      "en_route",
      "arriving",
      "delivered",
    ];
    let currentIndex = statusFlow.indexOf(currentStatus);

    const timer = setInterval(() => {
      if (currentIndex < statusFlow.length - 1) {
        currentIndex++;
        setCurrentStatus(statusFlow[currentIndex]);
        setEta((prev) => Math.max(0, prev - 2));
      } else {
        clearInterval(timer);
      }
    }, 10000); // Update every 10 seconds for demo

    return () => clearInterval(timer);
  }, [currentStatus]);

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "confirmed":
        return {
          icon: "✅",
          text: "Order Confirmed",
          color: "text-green-600 dark:text-green-400",
        };
      case "dispatched":
        return {
          icon: "🚁",
          text: "Drone Dispatched",
          color: "text-blue-600 dark:text-blue-400",
        };
      case "picked_up":
        return {
          icon: "📦",
          text: "Umbrella Picked Up",
          color: "text-orange-600 dark:text-orange-400",
        };
      case "en_route":
        return {
          icon: "🛩️",
          text: "En Route to You",
          color: "text-purple-600 dark:text-purple-400",
        };
      case "arriving":
        return {
          icon: "📍",
          text: "Arriving Now",
          color: "text-red-600 dark:text-red-400",
        };
      case "delivered":
        return {
          icon: "🎉",
          text: "Delivered",
          color: "text-green-600 dark:text-green-400",
        };
      default:
        return {
          icon: "⏳",
          text: "Processing",
          color: "text-gray-600 dark:text-gray-400",
        };
    }
  };

  const statusInfo = getStatusInfo(currentStatus);

  const TrackingStep = ({
    step,
    isActive,
    isCompleted,
    isLast,
  }: {
    step: any;
    isActive: boolean;
    isCompleted: boolean;
    isLast: boolean;
  }) => (
    <View className="flex-row items-center">
      <View className="items-center">
        <View
          className={`w-8 h-8 rounded-full items-center justify-center border-2 ${
            isCompleted
              ? "bg-green-500 border-green-500"
              : isActive
              ? "bg-blue-500 dark:bg-pictonBlue border-blue-500 dark:border-pictonBlue"
              : "bg-gray-200 dark:bg-gray-600 border-gray-300 dark:border-gray-500"
          }`}
        >
          {isCompleted ? (
            <Text className="text-white text-xs">✓</Text>
          ) : (
            <View
              className={`w-3 h-3 rounded-full ${
                isActive ? "bg-white" : "bg-gray-400 dark:bg-gray-500"
              }`}
            />
          )}
        </View>
        {!isLast && (
          <View
            className={`w-0.5 h-8 mt-1 ${
              isCompleted ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        )}
      </View>
      <View className="ml-3 flex-1">
        <Text
          className={`text-sm font-medium ${
            isActive || isCompleted
              ? "text-black dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {step.title}
        </Text>
        <Text
          className={`text-xs ${
            isActive || isCompleted
              ? "text-gray-600 dark:text-morningBlue"
              : "text-gray-400 dark:text-gray-500"
          }`}
        >
          {step.time}
        </Text>
      </View>
    </View>
  );

  const trackingSteps = [
    {
      id: "confirmed",
      title: "Order Confirmed",
      time: deliveryData.requestTime,
    },
    {
      id: "dispatched",
      title: "Drone Dispatched",
      time: currentStatus === "confirmed" ? "Pending" : "14:24",
    },
    {
      id: "picked_up",
      title: "Umbrella Picked Up",
      time: ["confirmed", "dispatched"].includes(currentStatus)
        ? "Pending"
        : "14:26",
    },
    {
      id: "en_route",
      title: "En Route to You",
      time: ["confirmed", "dispatched", "picked_up"].includes(currentStatus)
        ? "Pending"
        : "14:28",
    },
    {
      id: "delivered",
      title: "Delivered",
      time: currentStatus === "delivered" ? "14:32" : "Pending",
    },
  ];

  const getCurrentStepIndex = () => {
    return trackingSteps.findIndex((step) => step.id === currentStatus);
  };

  const currentStepIndex = getCurrentStepIndex();

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-collegeBlue">
      {/* Header */}
      <View className="bg-white dark:bg-persianBlue px-4 py-4 border-b border-gray-100 dark:border-gray-700">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-blue-600 dark:text-pictonBlue text-base">
              ← Back
            </Text>
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-black dark:text-yellowBanana">
            Delivery Tracking
          </Text>
          <TouchableOpacity>
            <Text className="text-blue-600 dark:text-pictonBlue text-base">
              Help
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Current Status Card */}
        <View className="px-4 py-6">
          <View className="bg-white dark:bg-persianBlue rounded-2xl p-6 shadow-sm">
            <View className="items-center mb-6">
              <Text className="text-4xl mb-2">{statusInfo.icon}</Text>
              <Text className={`text-xl font-bold ${statusInfo.color}`}>
                {statusInfo.text}
              </Text>
              {currentStatus !== "delivered" && (
                <Text className="text-sm text-gray-600 dark:text-morningBlue mt-1">
                  Estimated arrival: {eta} minutes
                </Text>
              )}
            </View>

            {/* ETA Display */}
            {currentStatus !== "delivered" && (
              <View className="bg-gray-50 dark:bg-collegeBlue rounded-lg p-4 mb-4">
                <View className="flex-row items-center justify-between">
                  <Text className="text-sm text-gray-600 dark:text-morningBlue">
                    Arriving in
                  </Text>
                  <Text className="text-2xl font-bold text-black dark:text-white">
                    {eta} min
                  </Text>
                </View>
              </View>
            )}

            {/* Quick Info */}
            <View className="flex-row justify-between">
              <View className="flex-1">
                <Text className="text-xs text-gray-500 dark:text-gray-400">
                  Drone ID
                </Text>
                <Text className="text-sm font-medium text-black dark:text-white">
                  {deliveryData.droneId}
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-xs text-gray-500 dark:text-gray-400">
                  Distance
                </Text>
                <Text className="text-sm font-medium text-black dark:text-white">
                  {deliveryData.distance}
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-xs text-gray-500 dark:text-gray-400">
                  Cost
                </Text>
                <Text className="text-sm font-medium text-black dark:text-white">
                  {deliveryData.cost}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Map Placeholder */}
        <View className="px-4 mb-6">
          <View className="bg-white dark:bg-persianBlue rounded-lg h-48 items-center justify-center">
            <Text className="text-6xl mb-2">🗺️</Text>
            <Text className="text-lg font-semibold text-black dark:text-white mb-1">
              Live Tracking Map
            </Text>
            <Text className="text-sm text-gray-500 dark:text-morningBlue text-center">
              Real-time drone location and route visualization
            </Text>
          </View>
        </View>

        {/* Tracking Timeline */}
        <View className="px-4 mb-6">
          <Text className="text-lg font-semibold text-black dark:text-yellowBanana mb-4">
            Delivery Progress
          </Text>
          <View className="bg-white dark:bg-persianBlue rounded-lg p-4">
            {trackingSteps.map((step, index) => (
              <TrackingStep
                key={step.id}
                step={step}
                isActive={index === currentStepIndex}
                isCompleted={index < currentStepIndex}
                isLast={index === trackingSteps.length - 1}
              />
            ))}
          </View>
        </View>

        {/* Delivery Details */}
        <View className="px-4 mb-6">
          <Text className="text-lg font-semibold text-black dark:text-yellowBanana mb-4">
            Delivery Details
          </Text>
          <View className="bg-white dark:bg-persianBlue rounded-lg p-4">
            <View className="mb-4">
              <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                From
              </Text>
              <Text className="text-base text-black dark:text-white">
                {deliveryData.pickupLocation}
              </Text>
            </View>
            <View className="mb-4">
              <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                To
              </Text>
              <Text className="text-base text-black dark:text-white">
                {deliveryData.deliveryLocation}
              </Text>
            </View>
            <View className="mb-4">
              <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Umbrella Type
              </Text>
              <Text className="text-base text-black dark:text-white">
                {deliveryData.umbrellaType}
              </Text>
            </View>
            <View>
              <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Weather
              </Text>
              <Text className="text-base text-black dark:text-white">
                {deliveryData.weather} • {deliveryData.temperature}
              </Text>
            </View>
          </View>
        </View>

        {/* Pilot Info */}
        <View className="px-4 mb-6">
          <Text className="text-lg font-semibold text-black dark:text-yellowBanana mb-4">
            Your Pilot
          </Text>
          <View className="bg-white dark:bg-persianBlue rounded-lg p-4">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-gray-200 dark:bg-collegeBlue rounded-full items-center justify-center mr-4">
                <Text className="text-2xl">👩‍✈️</Text>
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold text-black dark:text-white">
                  {deliveryData.pilotName}
                </Text>
                <View className="flex-row items-center">
                  <Text className="text-yellow-500 mr-1">⭐</Text>
                  <Text className="text-sm text-gray-600 dark:text-morningBlue">
                    {deliveryData.pilotRating} • Professional Pilot
                  </Text>
                </View>
              </View>
              <View className="flex-row space-x-3">
                <TouchableOpacity className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full items-center justify-center">
                  <Text className="text-lg">💬</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full items-center justify-center">
                  <Text className="text-lg">📞</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="px-4 pb-8">
          {currentStatus !== "delivered" ? (
            <View className="space-y-3">
              <TouchableOpacity className="bg-red-600 dark:bg-red-700 py-4 rounded-lg">
                <Text className="text-white font-semibold text-center text-base">
                  Cancel Delivery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white dark:bg-persianBlue border border-gray-300 dark:border-gray-600 py-4 rounded-lg">
                <Text className="text-black dark:text-white font-semibold text-center text-base">
                  Change Delivery Address
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className="space-y-3">
              <TouchableOpacity className="bg-blue-600 dark:bg-pictonBlue py-4 rounded-lg">
                <Text className="text-white font-semibold text-center text-base">
                  Rate Your Experience
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white dark:bg-persianBlue border border-gray-300 dark:border-gray-600 py-4 rounded-lg">
                <Text className="text-black dark:text-white font-semibold text-center text-base">
                  Order Again
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RideDetails;
