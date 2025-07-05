import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

type LocationRegion = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

const HomePage = () => {
  const [location, setLocation] = useState<LocationRegion | null>(null);
  const [weather, setWeather] = useState({ temp: "24°C", condition: "🌧️" });
  const [nearbyBots, setNearbyBots] = useState([
    { id: 1, latitude: 37.78825, longitude: -122.4324, available: true },
    { id: 2, latitude: 37.78925, longitude: -122.4314, available: true },
    { id: 3, latitude: 37.78725, longitude: -122.4334, available: false },
  ]);
  const router = useRouter();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Location access is required for this app"
      );
      return;
    }

    let userLocation = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: userLocation?.coords?.latitude,
      longitude: userLocation?.coords?.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  const handleOrderUmbrella = () => {
    router.push("/order/active");
  };

  const openSettings = () => {
    router.push("/settings");
  };

  return (
    <View className="flex-1 bg-morningBlue dark:bg-collegeBlue">
      {/* Top Bar */}
      <View className="bg-white dark:bg-gray-800 px-4 py-3 flex-row justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <TouchableOpacity onPress={openSettings}>
          <View className="w-10 h-10 bg-persianBlue dark:bg-pictonBlue rounded-full justify-center items-center">
            <Text className="text-white font-bold">👤</Text>
          </View>
        </TouchableOpacity>

        <View className="flex-row items-center space-x-4">
          <View className="flex-row items-center bg-yellowBanana dark:bg-collegeBlue px-3 py-1 rounded-full">
            <Text className="text-lg mr-1">{weather.condition}</Text>
            <Text className="text-collegeBlue dark:text-white font-medium">
              {weather.temp}
            </Text>
          </View>

          <TouchableOpacity>
            <Text className="text-persianBlue dark:text-pictonBlue font-medium">
              📍 Set Location
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Map View */}
      <View className="flex-1">
        {location && (
          <MapView
            style={{ flex: 1 }}
            region={location}
            showsUserLocation={true}
            showsMyLocationButton={false}
          >
            {nearbyBots.map((bot) => (
              <Marker
                key={bot.id}
                coordinate={{
                  latitude: bot.latitude,
                  longitude: bot.longitude,
                }}
                title={`Umbrella Bot ${bot.id}`}
                description={bot.available ? "Available" : "In Use"}
              >
                <View
                  className={`w-8 h-8 rounded-full justify-center items-center ${
                    bot.available ? "bg-persianBlue" : "bg-gray-400"
                  }`}
                >
                  <Text className="text-white text-xs">☂</Text>
                </View>
              </Marker>
            ))}
          </MapView>
        )}
      </View>

      {/* Bottom Order Sheet */}
      <View className="bg-white dark:bg-gray-800 p-6 rounded-t-3xl">
        <View className="mb-6">
          <Text className="text-lg font-semibold text-collegeBlue dark:text-white mb-4">
            Order Umbrella Protection
          </Text>

          <View className="space-y-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-gray-600 dark:text-gray-400">
                Pickup Point
              </Text>
              <Text className="text-collegeBlue dark:text-white font-medium">
                Current Location
              </Text>
            </View>

            <View className="flex-row items-center justify-between">
              <Text className="text-gray-600 dark:text-gray-400">
                Estimated Arrival
              </Text>
              <Text className="text-collegeBlue dark:text-white font-medium">
                3-5 minutes
              </Text>
            </View>

            <View className="flex-row items-center justify-between">
              <Text className="text-gray-600 dark:text-gray-400">
                Nearest Bot
              </Text>
              <Text className="text-collegeBlue dark:text-white font-medium">
                120m away
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleOrderUmbrella}
          className="bg-persianBlue dark:bg-pictonBlue py-4 rounded-xl"
        >
          <Text className="text-white text-center font-semibold text-lg">
            Order Umbrella
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
