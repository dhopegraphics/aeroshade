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

export default function SignupScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-collegeBlue">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-6 pt-6">
          <Text className="text-3xl font-bold text-black dark:text-yellowBanana mb-2">
            Create your account
          </Text>
        </View>

        {/* Form */}
        <View className="px-6 mt-8">
          {/* Name Fields */}
          <View className="flex-row space-x-3 mb-4">
            <View className="flex-1">
              <TextInput
                className="bg-gray-100 dark:bg-persianBlue p-4 rounded-lg text-black dark:text-white"
                placeholder="First name"
                placeholderTextColor="#9CA3AF"
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>
            <View className="flex-1">
              <TextInput
                className="bg-gray-100 dark:bg-persianBlue p-4 rounded-lg text-black dark:text-white"
                placeholder="Last name"
                placeholderTextColor="#9CA3AF"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>

          {/* Email */}
          <View className="mb-4">
            <TextInput
              className="bg-gray-100 dark:bg-persianBlue p-4 rounded-lg text-black dark:text-white"
              placeholder="Email"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Phone */}
          <View className="mb-4">
            <TextInput
              className="bg-gray-100 dark:bg-persianBlue p-4 rounded-lg text-black dark:text-white"
              placeholder="Phone number"
              placeholderTextColor="#9CA3AF"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
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

          {/* Terms */}
          <Text className="text-sm text-gray-600 dark:text-morningBlue mb-6 leading-5">
            By creating an account, you agree to our{" "}
            <Text className="underline">Terms of Service</Text> and{" "}
            <Text className="underline">Privacy Policy</Text>
          </Text>

          {/* Create Account Button */}
          <TouchableOpacity className="bg-black dark:bg-pictonBlue py-4 rounded-lg mb-6">
            <Text className="text-white font-semibold text-center text-base">
              Create account
            </Text>
          </TouchableOpacity>

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

      {/* Bottom Sign In */}
      <View className="border-t border-gray-200 dark:border-persianBlue px-6 py-4">
        <View className="flex-row justify-center items-center">
          <Text className="text-gray-600 dark:text-morningBlue">
            Already have an account?{" "}
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
