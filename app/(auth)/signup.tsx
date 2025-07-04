import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
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
          Create Account
        </Text>
        <Text
          className={`mt-2 ${isDark ? "text-morningBlue" : "text-collegeBlue"}`}
        >
          Get started with AeroShade
        </Text>

        <View className="mt-8 space-y-4">
          <View>
            <Text
              className={`mb-2 ${
                isDark ? "text-morningBlue" : "text-collegeBlue"
              }`}
            >
              Full Name
            </Text>
            <TextInput
              className={`p-4 rounded-xl ${
                isDark
                  ? "bg-persianBlue text-white"
                  : "bg-white text-collegeBlue"
              }`}
              placeholder="Enter your full name"
              placeholderTextColor={isDark ? "#AAFIFF" : "#0F214D80"}
            />
          </View>

          <View>
            <Text
              className={`mb-2 ${
                isDark ? "text-morningBlue" : "text-collegeBlue"
              }`}
            >
              Email
            </Text>
            <TextInput
              className={`p-4 rounded-xl ${
                isDark
                  ? "bg-persianBlue text-white"
                  : "bg-white text-collegeBlue"
              }`}
              placeholder="Enter your email"
              placeholderTextColor={isDark ? "#AAFIFF" : "#0F214D80"}
              keyboardType="email-address"
            />
          </View>

          <View>
            <Text
              className={`mb-2 ${
                isDark ? "text-morningBlue" : "text-collegeBlue"
              }`}
            >
              Password
            </Text>
            <TextInput
              className={`p-4 rounded-xl ${
                isDark
                  ? "bg-persianBlue text-white"
                  : "bg-white text-collegeBlue"
              }`}
              placeholder="Create a password"
              placeholderTextColor={isDark ? "#AAFIFF" : "#0F214D80"}
              secureTextEntry
            />
          </View>

          <View className="flex-row items-start mt-2">
            <TouchableOpacity className="mt-1 mr-2">
              <View
                className={`w-5 h-5 rounded-md border ${
                  isDark ? "border-pictonBlue" : "border-persianBlue"
                }`}
              />
            </TouchableOpacity>
            <Text
              className={`flex-1 ${
                isDark ? "text-morningBlue" : "text-collegeBlue"
              }`}
            >
              I agree to the Terms of Service and Privacy Policy
            </Text>
          </View>
        </View>

        <TouchableOpacity
          className={`mt-8 py-4 rounded-xl ${
            isDark ? "bg-pictonBlue" : "bg-persianBlue"
          }`}
        >
          <Text className="text-white font-bold text-center">
            Create Account
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center my-6">
          <View
            className={`flex-1 h-px ${
              isDark ? "bg-persianBlue" : "bg-collegeBlue/30"
            }`}
          />
          <Text
            className={`mx-4 ${
              isDark ? "text-morningBlue" : "text-collegeBlue"
            }`}
          >
            or sign up with
          </Text>
          <View
            className={`flex-1 h-px ${
              isDark ? "bg-persianBlue" : "bg-collegeBlue/30"
            }`}
          />
        </View>

        <View className="flex-row justify-center space-x-4">
          <TouchableOpacity
            className={`p-3 rounded-xl ${
              isDark ? "bg-persianBlue" : "bg-white"
            }`}
          >
            <Text className={isDark ? "text-white" : "text-collegeBlue"}>
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`p-3 rounded-xl ${
              isDark ? "bg-persianBlue" : "bg-white"
            }`}
          >
            <Text className={isDark ? "text-white" : "text-collegeBlue"}>
              Apple
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="py-4 flex-row justify-center">
        <Text className={`${isDark ? "text-morningBlue" : "text-collegeBlue"}`}>
          Already have an account?
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
