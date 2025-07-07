import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Share, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HistoryDetails = () => {
  const { id } = useLocalSearchParams();

  // Mock data for detailed delivery information
  const deliveryDetails = {
    id: id,
    date: "2025-07-06",
    time: "14:30",
    status: "completed",
    fromLocation: "Central Park",
    fromAddress: "Central Park, New York, NY 10024",
    toLocation: "123 Main St, Apt 4B",
    toAddress: "123 Main St, Apt 4B, New York, NY 10001",
    duration: "8 min",
    distance: "2.3 miles",
    cost: "$12.50",
    breakdown: {
      baseFare: "$8.00",
      weatherSurcharge: "$2.50",
      serviceFee: "$1.50",
      tax: "$0.50",
    },
    umbrellaType: "Standard Black Umbrella",
    weather: "Heavy Rain",
    temperature: "68°F",
    windSpeed: "12 mph",
    droneId: "AS-2401",
    pilotName: "Sarah Johnson",
    rating: 5,
    feedback:
      "Great service! Drone arrived quickly and pilot was very professional.",
    orderTime: "14:22",
    pickupTime: "14:26",
    deliveryTime: "14:30",
    returnTime: "14:38",
    paymentMethod: "Credit Card ****1234",
    receiptNumber: "AS-2025-070614-001",
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Text
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"
        }`}
      >
        ⭐
      </Text>
    ));
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `AeroShade Delivery Receipt\nFrom: ${deliveryDetails.fromLocation}\nTo: ${deliveryDetails.toLocation}\nDate: ${deliveryDetails.date} ${deliveryDetails.time}\nCost: ${deliveryDetails.cost}\nReceipt: ${deliveryDetails.receiptNumber}`,
        title: "AeroShade Delivery Receipt",
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const InfoSection = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <View className="bg-white dark:bg-persianBlue rounded-lg p-4 mb-4">
      <Text className="text-lg font-semibold text-black dark:text-yellowBanana mb-3">
        {title}
      </Text>
      {children}
    </View>
  );

  const InfoRow = ({
    label,
    value,
    valueStyle = "",
  }: {
    label: string;
    value: string;
    valueStyle?: string;
  }) => (
    <View className="flex-row justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
      <Text className="text-sm text-gray-600 dark:text-morningBlue flex-1">
        {label}
      </Text>
      <Text
        className={`text-sm font-medium text-right flex-1 ${
          valueStyle || "text-black dark:text-white"
        }`}
      >
        {value}
      </Text>
    </View>
  );

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
            Delivery Details
          </Text>
          <TouchableOpacity onPress={handleShare}>
            <Text className="text-blue-600 dark:text-pictonBlue text-base">
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {/* Status Card */}
        <View className="bg-white dark:bg-persianBlue rounded-lg p-4 mb-4">
          <View className="flex-row items-center justify-between mb-3">
            <View className="flex-row items-center">
              <Text className="text-2xl mr-3">
                {getStatusIcon(deliveryDetails.status)}
              </Text>
              <View>
                <Text className="text-xl font-bold text-black dark:text-white">
                  {deliveryDetails.status.charAt(0).toUpperCase() +
                    deliveryDetails.status.slice(1)}
                </Text>
                <Text className="text-sm text-gray-600 dark:text-morningBlue">
                  {deliveryDetails.date} at {deliveryDetails.time}
                </Text>
              </View>
            </View>
            <Text className="text-2xl font-bold text-black dark:text-white">
              {deliveryDetails.cost}
            </Text>
          </View>

          {/* Route */}
          <View className="mt-4">
            <View className="flex-row items-start mb-3">
              <View className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-3" />
              <View className="flex-1">
                <Text className="text-sm font-medium text-black dark:text-white">
                  Pickup Location
                </Text>
                <Text className="text-sm text-gray-600 dark:text-morningBlue">
                  {deliveryDetails.fromAddress}
                </Text>
              </View>
            </View>
            <View className="w-0.5 h-8 bg-gray-300 dark:bg-gray-600 ml-2 mb-3" />
            <View className="flex-row items-start">
              <View className="w-4 h-4 bg-red-500 rounded-full mt-1 mr-3" />
              <View className="flex-1">
                <Text className="text-sm font-medium text-black dark:text-white">
                  Delivery Location
                </Text>
                <Text className="text-sm text-gray-600 dark:text-morningBlue">
                  {deliveryDetails.toAddress}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Timeline */}
        <InfoSection title="Delivery Timeline">
          <InfoRow label="Order Placed" value={deliveryDetails.orderTime} />
          <InfoRow
            label="Drone Dispatched"
            value={deliveryDetails.pickupTime}
          />
          <InfoRow label="Delivered" value={deliveryDetails.deliveryTime} />
          <InfoRow label="Drone Returned" value={deliveryDetails.returnTime} />
        </InfoSection>

        {/* Trip Details */}
        <InfoSection title="Trip Details">
          <InfoRow label="Duration" value={deliveryDetails.duration} />
          <InfoRow label="Distance" value={deliveryDetails.distance} />
          <InfoRow label="Umbrella Type" value={deliveryDetails.umbrellaType} />
          <InfoRow label="Drone ID" value={deliveryDetails.droneId} />
          <InfoRow label="Pilot" value={deliveryDetails.pilotName} />
        </InfoSection>

        {/* Weather Conditions */}
        <InfoSection title="Weather Conditions">
          <InfoRow label="Condition" value={deliveryDetails.weather} />
          <InfoRow label="Temperature" value={deliveryDetails.temperature} />
          <InfoRow label="Wind Speed" value={deliveryDetails.windSpeed} />
        </InfoSection>

        {/* Cost Breakdown */}
        <InfoSection title="Cost Breakdown">
          <InfoRow
            label="Base Fare"
            value={deliveryDetails.breakdown.baseFare}
          />
          <InfoRow
            label="Weather Surcharge"
            value={deliveryDetails.breakdown.weatherSurcharge}
          />
          <InfoRow
            label="Service Fee"
            value={deliveryDetails.breakdown.serviceFee}
          />
          <InfoRow label="Tax" value={deliveryDetails.breakdown.tax} />
          <View className="border-t-2 border-gray-300 dark:border-gray-600 pt-2 mt-2">
            <InfoRow
              label="Total"
              value={deliveryDetails.cost}
              valueStyle="text-lg font-bold text-black dark:text-white"
            />
          </View>
        </InfoSection>

        {/* Payment Method */}
        <InfoSection title="Payment">
          <InfoRow
            label="Payment Method"
            value={deliveryDetails.paymentMethod}
          />
          <InfoRow
            label="Receipt Number"
            value={deliveryDetails.receiptNumber}
          />
        </InfoSection>

        {/* Rating & Feedback */}
        {deliveryDetails.rating && (
          <InfoSection title="Your Rating">
            <View className="items-center py-4">
              <View className="flex-row mb-3">
                {renderStars(deliveryDetails.rating)}
              </View>
              <Text className="text-lg font-semibold text-black dark:text-white mb-2">
                {deliveryDetails.rating} out of 5 stars
              </Text>
              {deliveryDetails.feedback && (
                <View className="bg-gray-50 dark:bg-collegeBlue rounded-lg p-3 mt-3">
                  <Text className="text-sm text-gray-700 dark:text-morningBlue italic">
                    &ldquo;{deliveryDetails.feedback}&rdquo;
                  </Text>
                </View>
              )}
            </View>
          </InfoSection>
        )}

        {/* Action Buttons */}
        <View className="mb-8">
          <TouchableOpacity className="bg-blue-600 dark:bg-pictonBlue py-4 rounded-lg mb-3">
            <Text className="text-white font-semibold text-center text-base">
              Reorder Same Trip
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white dark:bg-persianBlue border border-gray-300 dark:border-gray-600 py-4 rounded-lg mb-3">
            <Text className="text-black dark:text-white font-semibold text-center text-base">
              Get Receipt
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white dark:bg-persianBlue border border-gray-300 dark:border-gray-600 py-4 rounded-lg">
            <Text className="text-black dark:text-white font-semibold text-center text-base">
              Report an Issue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryDetails;
