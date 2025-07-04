import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderConfirmation() {
  const [countdown, setCountdown] = useState(30);
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    // Simulate finding a drone
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 3000);

    // Countdown timer for cancellation
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-morningBlue dark:bg-collegeBlue">
      <View className="flex-1 p-4">
        {isSearching ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#0B5FB0" />
            <Text className="mt-4 text-xl font-bold text-collegeBlue dark:text-yellowBanana">
              Finding Nearest Umbrella Bot...
            </Text>
          </View>
        ) : (
          <>
            <Text className="text-2xl font-bold text-collegeBlue dark:text-yellowBanana">
              AeroShade #DR-247
            </Text>
            <Text className="mt-2 text-collegeBlue dark:text-morningBlue">
              ETA: 2 minutes
            </Text>

            <View className="mt-6 flex-1">
              <MapView
                className="flex-1 rounded-xl"
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                {/* Add drone and user markers */}
              </MapView>
            </View>

            <View className="mt-6 flex-row justify-between">
              <TouchableOpacity
                className="border border-persianBlue px-6 py-3 rounded-xl"
                onPress={() => router.back()}
              >
                <Text className="text-persianBlue font-semibold">
                  Cancel ({countdown}s)
                </Text>
              </TouchableOpacity>

              <Link href="/order/verification" asChild>
                <TouchableOpacity className="bg-persianBlue px-6 py-3 rounded-xl">
                  <Text className="text-white font-semibold">Track Drone</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
