import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CompletionPage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const router = useRouter();

  const submitFeedback = () => {
    // Simulate feedback submission
    router.replace("/home");
  };

  return (
    <View className="flex-1 bg-morningBlue dark:bg-collegeBlue px-6">
      <View className="flex-1 justify-center items-center">
        <View className="w-32 h-32 bg-green-100 dark:bg-green-900 rounded-full justify-center items-center mb-8">
          <Text className="text-6xl text-green-600 dark:text-green-400">✓</Text>
        </View>

        <Text className="text-3xl font-bold text-collegeBlue dark:text-white text-center mb-4">
          You Have Arrived!
        </Text>

        <Text className="text-lg text-collegeBlue dark:text-middleBlue text-center mb-8">
          Your umbrella session has been completed successfully
        </Text>

        {/* Rating */}
        <View className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full mb-6">
          <Text className="text-lg font-semibold text-collegeBlue dark:text-white mb-4 text-center">
            Rate Your Experience
          </Text>

          <View className="flex-row justify-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setRating(star)}
                className="w-12 h-12 justify-center items-center"
              >
                <Text
                  className={`text-3xl ${
                    star <= rating
                      ? "text-yellow-500"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                >
                  ⭐
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            placeholder="Share your feedback (optional)"
            value={feedback}
            onChangeText={setFeedback}
            multiline
            numberOfLines={4}
            className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl text-collegeBlue dark:text-white"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <TouchableOpacity
          onPress={submitFeedback}
          className="bg-persianBlue dark:bg-pictonBlue py-4 px-8 rounded-xl"
        >
          <Text className="text-white font-semibold text-lg">Done</Text>
        </TouchableOpacity>

        <Text className="text-center text-gray-600 dark:text-gray-400 mt-4">
          🚁 Drone is returning to station
        </Text>
      </View>
    </View>
  );
}
