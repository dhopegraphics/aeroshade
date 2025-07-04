import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const slides = [
    {
      title: "Order Umbrella Anytime, Anywhere",
      subtitle:
        "Rain or shine, we've got you covered with instant umbrella delivery",
      icon: "🌧️",
    },
    {
      title: "Drone Delivers, You Stay Dry",
      subtitle: "Advanced AI drones bring protection right to your location",
      icon: "🚁",
    },
    {
      title: "Manual Assist Control for Flexibility",
      subtitle:
        "Take control when needed with our intuitive manual assistance mode",
      icon: "🎮",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace("/auth");
    }
  };

  const skipOnboarding = () => {
    router.replace("/auth");
  };

  return (
    <View className="flex-1 bg-morningBlue dark:bg-collegeBlue">
      <View className="flex-1 justify-center items-center px-8">
        <View className="w-48 h-48 bg-middleBlue dark:bg-persianBlue rounded-full justify-center items-center mb-12">
          <Text className="text-8xl">{slides[currentSlide].icon}</Text>
        </View>

        <Text className="text-3xl font-bold text-collegeBlue dark:text-white text-center mb-6">
          {slides[currentSlide].title}
        </Text>

        <Text className="text-lg text-collegeBlue dark:text-middleBlue text-center mb-12 leading-6">
          {slides[currentSlide].subtitle}
        </Text>

        {/* Slide Indicators */}
        <View className="flex-row space-x-2 mb-12">
          {slides.map((_, index) => (
            <View
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide
                  ? "bg-persianBlue dark:bg-pictonBlue"
                  : "bg-middleBlue dark:bg-gray-600"
              }`}
            />
          ))}
        </View>
      </View>

      <View className="px-8 pb-12">
        <TouchableOpacity
          onPress={nextSlide}
          className="bg-persianBlue dark:bg-pictonBlue py-4 rounded-xl mb-4"
        >
          <Text className="text-white text-center font-semibold text-lg">
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={skipOnboarding}>
          <Text className="text-persianBlue dark:text-pictonBlue text-center font-medium">
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
