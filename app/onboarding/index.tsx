import { Link } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth } = Dimensions.get("window");

const slides = [
  {
    title: "Order Umbrella Anytime, Anywhere",
    description:
      "Get instant protection from rain or sun with our drone-delivered umbrellas. Request in seconds.",
    image: null, // Placeholder for future image
  },
  {
    title: "Drone Delivers, You Stay Dry",
    description:
      "Our autonomous drones bring the umbrella directly to your location within minutes.",
    image: null, // Placeholder for future image
  },
  {
    title: "Manual Assist Control for Flexibility",
    description:
      "Take control when needed with our intuitive manual mode for precise positioning.",
    image: null, // Placeholder for future image
  },
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      const nextIndex = currentSlide + 1;
      setCurrentSlide(nextIndex);
      scrollRef.current?.scrollTo({
        x: nextIndex * screenWidth,
        animated: true,
      });
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      const prevIndex = currentSlide - 1;
      setCurrentSlide(prevIndex);
      scrollRef.current?.scrollTo({
        x: prevIndex * screenWidth,
        animated: true,
      });
    }
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const slideIndex = Math.round(scrollPosition / screenWidth);
    setCurrentSlide(slideIndex);
  };

  return (
    <SafeAreaView className="flex-1 bg-white  dark:bg-gray-900">
      {/* Skip button */}
      <View className="flex-row justify-end px-6 pt-4">
        <Link href="/(auth)/login" asChild>
          <TouchableOpacity>
            <Text className="text-gray-500 dark:text-gray-400 text-base">
              Skip
            </Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Main content */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className="flex-1"
      >
        {slides.map((slide, index) => (
          <View
            key={index}
            style={{ width: screenWidth }}
            className="flex-1 px-6"
          >
            {/* Image placeholder */}
            <View className="flex-1 justify-center items-center">
              <View className="w-80 h-80 bg-gray-100 dark:bg-gray-800 rounded-full items-center justify-center">
                <Text className="text-gray-400 dark:text-gray-500 text-lg">
                  Image Placeholder
                </Text>
              </View>
            </View>

            {/* Text content */}
            <View className="pb-20">
              <Text className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                {slide.title}
              </Text>
              <Text className="text-base text-gray-600 dark:text-gray-300 text-center leading-6">
                {slide.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom section */}
      <View className="px-6 pb-8">
        {/* Pagination dots */}
        <View className="flex-row justify-center mb-8">
          {slides.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentSlide
                  ? "bg-blue-600"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </View>

        {/* Navigation buttons */}
        <View className="flex-row justify-between items-center">
          <TouchableOpacity
            onPress={prevSlide}
            className={`py-3 px-6 ${currentSlide === 0 ? "opacity-0" : ""}`}
            disabled={currentSlide === 0}
          >
            <Text className="text-blue-600 dark:text-blue-400 text-base font-medium">
              Previous
            </Text>
          </TouchableOpacity>

          {currentSlide === slides.length - 1 ? (
            <Link href="/(auth)/login" asChild>
              <TouchableOpacity className="bg-blue-600 px-8 py-4 rounded-full">
                <Text className="text-white font-semibold text-base">
                  Get Started
                </Text>
              </TouchableOpacity>
            </Link>
          ) : (
            <TouchableOpacity
              className="bg-blue-600 px-8 py-4 rounded-full"
              onPress={nextSlide}
            >
              <Text className="text-white font-semibold text-base">Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
