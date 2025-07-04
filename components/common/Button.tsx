import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  title,
  onPress,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses = "py-3 px-6 rounded-xl";

  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = "bg-persianBlue";
      break;
    case "secondary":
      variantClasses = "bg-pictonBlue";
      break;
    case "outline":
      variantClasses = "border border-persianBlue";
      break;
  }

  return (
    <TouchableOpacity
      className={`${baseClasses} ${variantClasses} ${className}`}
      onPress={onPress}
    >
      <Text
        className={`text-center font-semibold ${
          variant === "outline" ? "text-persianBlue" : "text-white"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
