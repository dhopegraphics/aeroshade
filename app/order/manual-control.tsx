import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/common/Button"; // Adjust the import path as necessary

const ManualControlScreen = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-morningBlue dark:bg-collegeBlue">
      <View className="flex-1 p-4">
        <Text className="text-2xl font-bold text-collegeBlue dark:text-yellowBanana">
          Manual Control Mode
        </Text>
        <Text className="text-collegeBlue dark:text-morningBlue">
          Time remaining: {formatTime(timeLeft)}
        </Text>

        {/* Mini Map */}
        <View className="mt-4 h-48 rounded-xl overflow-hidden">
          <MapView
            className="flex-1"
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            {/* Add markers */}
          </MapView>
        </View>

        {/* Control Pad */}
        <View className="mt-8 items-center">
          <TouchableOpacity className="bg-pictonBlue w-16 h-16 rounded-full items-center justify-center">
            <Text className="text-white text-2xl">↑</Text>
          </TouchableOpacity>

          <View className="flex-row mt-2">
            <TouchableOpacity className="bg-pictonBlue w-16 h-16 rounded-full items-center justify-center mr-4">
              <Text className="text-white text-2xl">←</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-pictonBlue w-16 h-16 rounded-full items-center justify-center">
              <Text className="text-white text-2xl">→</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="bg-pictonBlue w-16 h-16 rounded-full items-center justify-center mt-2">
            <Text className="text-white text-2xl">↓</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-8">
          <Button
            title="Resume Auto Mode"
            onPress={() => router.push("/order/active")}
          />
          <Text className="mt-2 text-center text-collegeBlue dark:text-morningBlue text-xs">
            For safety, manual mode will automatically end after 2 minutes
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ManualControlScreen;
