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
    <View className="flex-1 bg-white">
      {/* Top Bar */}
      <View className="bg-white px-4 py-3 flex-row justify-between items-center border-b border-gray-100 shadow-sm">
        <TouchableOpacity onPress={openSettings}>
          <View
            className="w-12 h-12 rounded-full justify-center items-center"
            style={{ backgroundColor: "#0B5FB0" }}
          >
            <Text className="text-white font-bold text-lg">👤</Text>
          </View>
        </TouchableOpacity>

        <View className="flex-row items-center space-x-3">
          <View
            className="flex-row items-center px-4 py-2 rounded-full"
            style={{ backgroundColor: "#EFEDCE" }}
          >
            <Text className="text-lg mr-2">{weather.condition}</Text>
            <Text className="font-semibold" style={{ color: "#0F214D" }}>
              {weather.temp}
            </Text>
          </View>

          <TouchableOpacity className="flex-row items-center px-3 py-2 rounded-full bg-gray-50">
            <Text className="text-lg mr-1">📍</Text>
            <Text className="font-medium" style={{ color: "#0B5FB0" }}>
              Set Location
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
                  className="w-10 h-10 rounded-full justify-center items-center shadow-lg"
                  style={{
                    backgroundColor: bot.available ? "#2BA3EC" : "#0F214D",
                    borderWidth: 2,
                    borderColor: "white",
                  }}
                >
                  <Text className="text-white text-base">☂</Text>
                </View>
              </Marker>
            ))}
          </MapView>
        )}
      </View>

      {/* Weather Alert Banner */}
      <View
        className="mx-4 mb-2 p-3 rounded-lg"
        style={{ backgroundColor: "#EBFCFF" }}
      >
        <View className="flex-row items-center">
          <Text className="text-2xl mr-3">⛈️</Text>
          <View className="flex-1">
            <Text className="font-semibold" style={{ color: "#0F214D" }}>
              Heavy Rain Expected
            </Text>
            <Text className="text-sm" style={{ color: "#0B5FB0" }}>
              Order an umbrella now to stay dry
            </Text>
          </View>
        </View>
      </View>

      {/* Bottom Order Sheet */}
      <View
        className="bg-white p-6 rounded-t-3xl shadow-2xl"
        style={{ borderTopWidth: 1, borderTopColor: "#AAFIFF" }}
      >
        <View
          className="w-12 h-1 rounded-full self-center mb-4"
          style={{ backgroundColor: "#AAFIFF" }}
        />

        <View className="mb-6">
          <Text className="text-xl font-bold mb-1" style={{ color: "#0F214D" }}>
            Order Umbrella Protection
          </Text>
          <Text className="text-sm" style={{ color: "#0B5FB0" }}>
            Get instant protection from rain with drone delivery
          </Text>
        </View>

        {/* Quick Stats */}
        <View className="flex-row justify-between mb-6">
          <View
            className="flex-1 items-center p-3 rounded-lg mr-2"
            style={{ backgroundColor: "#EFEDCE" }}
          >
            <Text className="text-2xl mb-1">🚁</Text>
            <Text className="text-xs font-medium" style={{ color: "#0F214D" }}>
              Available Drones
            </Text>
            <Text className="text-lg font-bold" style={{ color: "#0B5FB0" }}>
              3
            </Text>
          </View>

          <View
            className="flex-1 items-center p-3 rounded-lg mx-1"
            style={{ backgroundColor: "#EBFCFF" }}
          >
            <Text className="text-2xl mb-1">⏱️</Text>
            <Text className="text-xs font-medium" style={{ color: "#0F214D" }}>
              Avg Delivery
            </Text>
            <Text className="text-lg font-bold" style={{ color: "#2BA3EC" }}>
              4 min
            </Text>
          </View>

          <View
            className="flex-1 items-center p-3 rounded-lg ml-2"
            style={{ backgroundColor: "#AAFIFF" }}
          >
            <Text className="text-2xl mb-1">📍</Text>
            <Text className="text-xs font-medium" style={{ color: "#0F214D" }}>
              Nearest Bot
            </Text>
            <Text className="text-lg font-bold" style={{ color: "#0B5FB0" }}>
              120m
            </Text>
          </View>
        </View>

        {/* Order Details */}
        <View className="space-y-3 mb-6">
          <View className="flex-row items-center justify-between py-2">
            <View className="flex-row items-center">
              <View
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: "#2BA3EC" }}
              />
              <Text style={{ color: "#0F214D" }}>Pickup Point</Text>
            </View>
            <Text className="font-semibold" style={{ color: "#0B5FB0" }}>
              Current Location
            </Text>
          </View>

          <View className="flex-row items-center justify-between py-2">
            <View className="flex-row items-center">
              <View
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: "#AAFIFF" }}
              />
              <Text style={{ color: "#0F214D" }}>Estimated Arrival</Text>
            </View>
            <Text className="font-semibold" style={{ color: "#2BA3EC" }}>
              3-5 minutes
            </Text>
          </View>

          <View className="flex-row items-center justify-between py-2">
            <View className="flex-row items-center">
              <View
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: "#EFEDCE" }}
              />
              <Text style={{ color: "#0F214D" }}>Estimated Cost</Text>
            </View>
            <Text className="font-semibold" style={{ color: "#0B5FB0" }}>
              $8.50 - $12.00
            </Text>
          </View>
        </View>

        {/* Order Button */}
        <TouchableOpacity
          onPress={handleOrderUmbrella}
          className="py-4 rounded-xl shadow-lg"
          style={{ backgroundColor: "#0B5FB0" }}
        >
          <View className="flex-row items-center justify-center">
            <Text className="text-white text-center font-bold text-lg mr-2">
              Order Umbrella Now
            </Text>
            <Text className="text-white text-xl">☂️</Text>
          </View>
        </TouchableOpacity>

        {/* Emergency Button */}
        <TouchableOpacity
          className="mt-3 py-3 rounded-lg border-2"
          style={{ borderColor: "#2BA3EC" }}
        >
          <Text
            className="text-center font-semibold"
            style={{ color: "#2BA3EC" }}
          >
            🚨 Emergency Rain Protection
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
