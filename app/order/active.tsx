import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const OrderPage = () => {
  const [searching, setSearching] = useState(true);
  type DroneDetails = {
    id: string;
    eta: string;
    distance: string;
    battery: string;
  } | null;

  const [droneDetails, setDroneDetails] = useState<DroneDetails>(null);
  const router = useRouter();

  useEffect(() => {
    // Simulate finding drone
    const timer = setTimeout(() => {
      setSearching(false);
      setDroneDetails({
        id: "AS-001",
        eta: "3 minutes",
        distance: "120m",
        battery: "85%",
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const cancelOrder = () => {
    router.back();
  };

  const confirmArrival = () => {
    router.push("/order/verification");
  };

  if (searching) {
    return (
      <View className="flex-1 bg-morningBlue dark:bg-collegeBlue justify-center items-center px-8">
        <ActivityIndicator size="large" color="#0B5FB0" />
        <Text className="text-2xl font-bold text-collegeBlue dark:text-white mt-6 text-center">
          Finding Nearest Umbrella Bot...
        </Text>
        <Text className="text-lg text-collegeBlue dark:text-middleBlue mt-2 text-center">
          Please wait while we locate the best drone for you
        </Text>

        <TouchableOpacity
          onPress={cancelOrder}
          className="mt-12 bg-red-500 py-3 px-8 rounded-xl"
        >
          <Text className="text-white font-semibold">Cancel Order</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-morningBlue dark:bg-collegeBlue px-6">
      <View className="flex-1 justify-center items-center">
        <View className="w-32 h-32 bg-persianBlue dark:bg-pictonBlue rounded-full justify-center items-center mb-8">
          <Text className="text-5xl text-white">🚁</Text>
        </View>

        <Text className="text-3xl font-bold text-collegeBlue dark:text-white text-center mb-4">
          Drone Found!
        </Text>

        <Text className="text-lg text-collegeBlue dark:text-middleBlue text-center mb-8">
          Your umbrella bot is on the way
        </Text>

        <View className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full mb-8">
          <View className="space-y-4">
            <View className="flex-row justify-between">
              <Text className="text-gray-600 dark:text-gray-400">Drone ID</Text>
              <Text className="text-collegeBlue dark:text-white font-semibold">
                {droneDetails?.id}
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-gray-600 dark:text-gray-400">ETA</Text>
              <Text className="text-collegeBlue dark:text-white font-semibold">
                {droneDetails?.eta}
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-gray-600 dark:text-gray-400">Distance</Text>
              <Text className="text-collegeBlue dark:text-white font-semibold">
                {droneDetails?.distance}
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-gray-600 dark:text-gray-400">Battery</Text>
              <Text className="text-green-600 dark:text-green-400 font-semibold">
                {droneDetails?.battery}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={confirmArrival}
          className="bg-persianBlue dark:bg-pictonBlue py-4 px-8 rounded-xl mb-4"
        >
          <Text className="text-white font-semibold text-lg">
            Drone Has Arrived
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={cancelOrder}>
          <Text className="text-red-500 font-medium">Cancel Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderPage;
