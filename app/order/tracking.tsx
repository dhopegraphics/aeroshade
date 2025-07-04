import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function TrackingPage() {
  const [droneLocation, setDroneLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [userLocation] = useState({
    latitude: 37.78925,
    longitude: -122.4314,
  });
  const [droneStats, setDroneStats] = useState({
    battery: 85,
    mode: "Autonomous",
    weather: "Light Rain",
  });
  const router = useRouter();

  useEffect(() => {
    // Simulate drone movement
    const interval = setInterval(() => {
      setDroneLocation((prev) => ({
        latitude: prev.latitude + (Math.random() - 0.5) * 0.0001,
        longitude: prev.longitude + (Math.random() - 0.5) * 0.0001,
      }));

      setDroneStats((prev) => ({
        ...prev,
        battery: Math.max(20, prev.battery - 0.1),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const switchToManual = () => {
    router.push("/manual");
  };

  const endSession = () => {
    router.push("/completion");
  };

  return (
    <View className="flex-1 bg-morningBlue dark:bg-collegeBlue">
      {/* Status Bar */}
      <View className="bg-white dark:bg-gray-800 px-4 py-3 flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-collegeBlue dark:text-white">
            {droneStats.mode} Mode Active
          </Text>
          <Text className="text-sm text-gray-600 dark:text-gray-400">
            {droneStats.weather} • Battery: {droneStats.battery.toFixed(0)}%
          </Text>
        </View>

        <TouchableOpacity
          onPress={switchToManual}
          className="bg-yellowBanana dark:bg-persianBlue py-2 px-4 rounded-xl"
        >
          <Text className="text-collegeBlue dark:text-white font-medium">
            Manual Mode
          </Text>
        </TouchableOpacity>
      </View>

      {/* Map */}
      <View className="flex-1">
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: (droneLocation.latitude + userLocation.latitude) / 2,
            longitude: (droneLocation.longitude + userLocation.longitude) / 2,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        >
          <Marker
            coordinate={droneLocation}
            title="Your Umbrella Drone"
            description="Providing protection"
          >
            <View className="w-12 h-12 bg-persianBlue dark:bg-pictonBlue rounded-full justify-center items-center">
              <Text className="text-white text-lg">☂</Text>
            </View>
          </Marker>
        </MapView>
      </View>

      {/* Bottom Controls */}
      <View className="bg-white dark:bg-gray-800 p-6 rounded-t-3xl">
        <View className="flex-row justify-between items-center mb-4">
          <View>
            <Text className="text-lg font-semibold text-collegeBlue dark:text-white">
              Session Active
            </Text>
            <Text className="text-sm text-gray-600 dark:text-gray-400">
              Drone following your movement
            </Text>
          </View>

          <View className="items-center">
            <View className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full justify-center items-center">
              <Text className="text-green-600 dark:text-green-400 text-2xl">
                ✓
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={endSession}
          className="bg-red-500 py-4 rounded-xl"
        >
          <Text className="text-white text-center font-semibold text-lg">
            End Session
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
