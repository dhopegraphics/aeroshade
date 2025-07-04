import { Text, View } from "react-native";

interface WeatherWidgetProps {
  temperature: number;
  condition: string;
}

export default function WeatherWidget({
  temperature,
  condition,
}: WeatherWidgetProps) {
  const getWeatherIcon = () => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return "☀️";
      case "rainy":
        return "🌧️";
      case "cloudy":
        return "☁️";
      default:
        return "🌈";
    }
  };

  return (
    <View className="flex-row items-center">
      <Text className="text-collegeBlue dark:text-yellowBanana text-xl">
        {getWeatherIcon()}
      </Text>
      <Text className="ml-2 text-collegeBlue dark:text-yellowBanana">
        {temperature}°F
      </Text>
    </View>
  );
}
