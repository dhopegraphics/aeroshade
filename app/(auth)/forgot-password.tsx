import { Link } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSendReset = () => {
    if (email.trim()) {
      // Simulate sending reset email
      setIsEmailSent(true);
    }
  };

  if (isEmailSent) {
    return (
      <SafeAreaView className="flex-1 bg-white dark:bg-collegeBlue">
        <ScrollView className="flex-1">
          {/* Back Button */}
          <View className="px-6 pt-6">
            <Link href="/(auth)/login" asChild>
              <TouchableOpacity className="self-start">
                <Text className="text-black dark:text-pictonBlue text-base">
                  ← Back
                </Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Success Content */}
          <View className="px-6 pt-12">
            <Text className="text-3xl font-bold text-black dark:text-yellowBanana mb-4">
              Check your email
            </Text>
            <Text className="text-base text-gray-600 dark:text-morningBlue leading-6 mb-8">
              We&apos;ve sent a password reset link to {email}
            </Text>

            {/* Email Icon Placeholder */}
            <View className="items-center mb-8">
              <View className="w-20 h-20 bg-gray-100 dark:bg-persianBlue rounded-full items-center justify-center">
                <Text className="text-gray-400 dark:text-middleBlue text-2xl">
                  📧
                </Text>
              </View>
            </View>

            <Text className="text-sm text-gray-500 dark:text-morningBlue text-center mb-8">
              Didn&apos;t receive the email? Check your spam folder or try
              again.
            </Text>

            {/* Resend Button */}
            <TouchableOpacity
              className="bg-white dark:bg-persianBlue border border-gray-300 dark:border-persianBlue py-4 rounded-lg mb-4"
              onPress={() => setIsEmailSent(false)}
            >
              <Text className="text-black dark:text-white font-medium text-center">
                Try another email
              </Text>
            </TouchableOpacity>

            {/* Primary Button */}
            <TouchableOpacity className="bg-black dark:bg-pictonBlue py-4 rounded-lg">
              <Text className="text-white font-semibold text-center text-base">
                Open email app
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Bottom Back to Login */}
        <View className="border-t border-gray-200 dark:border-persianBlue px-6 py-4">
          <View className="flex-row justify-center items-center">
            <Text className="text-gray-600 dark:text-morningBlue">
              Remember your password?{" "}
            </Text>
            <Link href="/(auth)/login" asChild>
              <TouchableOpacity>
                <Text className="text-black dark:text-pictonBlue font-semibold">
                  Sign in
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-collegeBlue">
      <ScrollView className="flex-1">
        {/* Back Button */}
        <View className="px-6 pt-6">
          <Link href="/(auth)/login" asChild>
            <TouchableOpacity className="self-start">
              <Text className="text-black dark:text-pictonBlue text-base">
                ← Back
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Header */}
        <View className="px-6 pt-8">
          <Text className="text-3xl font-bold text-black dark:text-yellowBanana mb-2">
            Reset your password
          </Text>
          <Text className="text-base text-gray-600 dark:text-morningBlue leading-6">
            Enter your email address and we&apos;ll send you a link to reset
            your password.
          </Text>
        </View>

        {/* Form */}
        <View className="px-6 mt-8">
          {/* Email Input */}
          <View className="mb-6">
            <TextInput
              className="bg-gray-100 dark:bg-persianBlue p-4 rounded-lg text-black dark:text-white"
              placeholder="Email address"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Send Reset Link Button */}
          <TouchableOpacity
            className={`py-4 rounded-lg ${
              email.trim()
                ? "bg-black dark:bg-pictonBlue"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            onPress={handleSendReset}
            disabled={!email.trim()}
          >
            <Text
              className={`font-semibold text-center text-base ${
                email.trim() ? "text-white" : "text-gray-500"
              }`}
            >
              Send reset link
            </Text>
          </TouchableOpacity>

          {/* Help Text */}
          <Text className="text-sm text-gray-500 dark:text-morningBlue text-center mt-6 leading-5">
            If you don&apos;t have access to this email, you can{" "}
            <Text className="underline">contact support</Text> for help.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Back to Login */}
      <View className="border-t border-gray-200 dark:border-persianBlue px-6 py-4">
        <View className="flex-row justify-center items-center">
          <Text className="text-gray-600 dark:text-morningBlue">
            Remember your password?{" "}
          </Text>
          <Link href="/(auth)/login" asChild>
            <TouchableOpacity>
              <Text className="text-black dark:text-pictonBlue font-semibold">
                Sign in
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
