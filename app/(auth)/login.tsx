import { Link, router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-6 pt-6">
          <Text className="text-3xl font-bold text-black dark:text-yellowBanana mb-2">
            Sign in
          </Text>
        </View>

        {/* Form */}
        <View className="px-6 mt-8">
          {/* Email */}
          <View className="mb-4">
            <TextInput
              className="bg-gray-100 dark:bg-persianBlue p-4 rounded-lg text-black dark:text-white"
              placeholder="Email or phone number"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
          <View className="mb-6">
            <TextInput
              className="bg-gray-100 dark:bg-persianBlue p-4 rounded-lg text-black dark:text-white"
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* Sign In Button */}
          <TouchableOpacity
            onPress={() => router.replace("/(tabs)/home")}
            className="bg-black dark:bg-pictonBlue py-4 rounded-lg mb-4"
          >
            <Text className="text-white font-semibold text-center text-base">
              Sign in
            </Text>
          </TouchableOpacity>

          {/* Forgot Password */}
          <View className="items-center mb-8">
            <Link href="/(auth)/forgot-password" asChild>
              <TouchableOpacity>
                <Text className="text-black dark:text-pictonBlue font-medium">
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Divider */}
          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-px bg-gray-300 dark:bg-persianBlue" />
            <Text className="mx-4 text-gray-500 dark:text-morningBlue">or</Text>
            <View className="flex-1 h-px bg-gray-300 dark:bg-persianBlue" />
          </View>

          {/* Social Login Buttons */}
          <View className="space-y-3 mb-8">
            <TouchableOpacity className="bg-white dark:bg-persianBlue border border-gray-300 dark:border-persianBlue py-4 rounded-lg flex-row items-center justify-center">
              <View className="w-5 h-5 bg-gray-300 dark:bg-middleBlue rounded mr-3" />
              <Text className="text-black dark:text-white font-medium">
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white dark:bg-persianBlue border border-gray-300 dark:border-persianBlue py-4 rounded-lg flex-row items-center justify-center">
              <View className="w-5 h-5 bg-gray-300 dark:bg-middleBlue rounded mr-3" />
              <Text className="text-black dark:text-white font-medium">
                Continue with Apple
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white dark:bg-persianBlue border border-gray-300 dark:border-persianBlue py-4 rounded-lg flex-row items-center justify-center">
              <View className="w-5 h-5 bg-gray-300 dark:bg-middleBlue rounded mr-3" />
              <Text className="text-black dark:text-white font-medium">
                Continue with Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Sign Up */}
      <View className="border-t border-gray-200 dark:border-persianBlue px-6 py-4">
        <View className="flex-row justify-center items-center">
          <Text className="text-gray-600 dark:text-morningBlue">
            Don&apos;t have an account?{" "}
          </Text>
          <Link href="/(auth)/signup" asChild>
            <TouchableOpacity>
              <Text className="text-black dark:text-pictonBlue font-semibold">
                Sign up
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
