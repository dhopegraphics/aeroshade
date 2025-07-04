import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPasswordScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaView
      className={`flex-1 px-6 ${isDark ? "bg-collegeBlue" : "bg-morningBlue"}`}
    >
      <View className="flex-1">
        <Text
          className={`text-2xl font-bold mt-8 ${
            isDark ? "text-yellowBanana" : "text-collegeBlue"
          }`}
        >
          Reset Password
        </Text>
        <Text
          className={`mt-2 ${isDark ? "text-morningBlue" : "text-collegeBlue"}`}
        >
          Enter your email to receive a reset link
        </Text>

        <View className="mt-8">
          <Text
            className={`mb-2 ${
              isDark ? "text-morningBlue" : "text-collegeBlue"
            }`}
          >
            Email
          </Text>
          <TextInput
            className={`p-4 rounded-xl ${
              isDark ? "bg-persianBlue text-white" : "bg-white text-collegeBlue"
            }`}
            placeholder="Enter your email"
            placeholderTextColor={isDark ? "#AAFIFF" : "#0F214D80"}
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity
          className={`mt-8 py-4 rounded-xl ${
            isDark ? "bg-pictonBlue" : "bg-persianBlue"
          }`}
        >
          <Text className="text-white font-bold text-center">
            Send Reset Link
          </Text>
        </TouchableOpacity>

        <View className="mt-6 items-center">
          <Text
            className={`text-center ${
              isDark ? "text-morningBlue" : "text-collegeBlue"
            }`}
          >
            We&apos;ll send you a link to reset your password
          </Text>
        </View>
      </View>

      <View className="py-4 flex-row justify-center">
        <Text className={`${isDark ? "text-morningBlue" : "text-collegeBlue"}`}>
          Remember your password?
        </Text>
        <Link href="/(auth)/login" asChild>
          <TouchableOpacity className="ml-1">
            <Text
              className={`font-bold ${
                isDark ? "text-pictonBlue" : "text-persianBlue"
              }`}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
