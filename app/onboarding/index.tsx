import { Link } from "expo-router";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const slides = [
  {
    title: "Order Umbrella Anytime, Anywhere",
    description:
      "Get instant protection from rain or sun with our drone-delivered umbrellas",
  },
  {
    title: "Drone Delivers, You Stay Dry",
    description:
      "Our autonomous drones bring the umbrella directly to your location",
  },
  {
    title: "Manual Assist Control for Flexibility",
    description: "Take control when needed with our intuitive manual mode",
  },
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-morningBlue dark:bg-collegeBlue">
      <View className="flex-1 justify-center px-6">
        <Text className="text-3xl font-bold text-collegeBlue dark:text-yellowBanana">
          {slides[currentSlide].title}
        </Text>
        <Text className="mt-4 text-lg text-collegeBlue dark:text-morningBlue">
          {slides[currentSlide].description}
        </Text>
      </View>

      <View className="flex-row justify-between px-6 pb-8">
        <TouchableOpacity onPress={prevSlide}>
          <Text className="text-pictonBlue">Previous</Text>
        </TouchableOpacity>

        {currentSlide === slides.length - 1 ? (
          <Link href="/auth/login" asChild>
            <TouchableOpacity className="bg-persianBlue px-6 py-3 rounded-lg">
              <Text className="text-white font-semibold">Get Started</Text>
            </TouchableOpacity>
          </Link>
        ) : (
          <TouchableOpacity
            className="bg-persianBlue px-6 py-3 rounded-lg"
            onPress={nextSlide}
          >
            <Text className="text-white font-semibold">Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
