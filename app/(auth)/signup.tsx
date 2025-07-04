import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleAuth = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    // Simulate auth success
    router.replace("/home");
  };

  const handleSocialLogin = (provider) => {
    // Simulate social login
    router.replace("/home");
  };

  return (
    <View className="flex-1 bg-morningBlue dark:bg-collegeBlue px-8">
      <View className="flex-1 justify-center">
        <View className="items-center mb-12">
          <View className="w-24 h-24 bg-persianBlue dark:bg-pictonBlue rounded-full justify-center items-center mb-6">
            <Text className="text-3xl text-white">☂</Text>
          </View>
          <Text className="text-3xl font-bold text-collegeBlue dark:text-white mb-2">
            Welcome to AeroShade
          </Text>
          <Text className="text-lg text-collegeBlue dark:text-middleBlue">
            {isLogin ? "Sign in to continue" : "Create your account"}
          </Text>
        </View>

        <View className="space-y-4">
          <TextInput
            placeholder="Email or Phone"
            value={email}
            onChangeText={setEmail}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl text-collegeBlue dark:text-white"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="bg-white dark:bg-gray-800 p-4 rounded-xl text-collegeBlue dark:text-white"
            placeholderTextColor="#9CA3AF"
          />

          <TouchableOpacity
            onPress={handleAuth}
            className="bg-persianBlue dark:bg-pictonBlue py-4 rounded-xl"
          >
            <Text className="text-white text-center font-semibold text-lg">
              {isLogin ? "Sign In" : "Create Account"}
            </Text>
          </TouchableOpacity>

          {isLogin && (
            <TouchableOpacity>
              <Text className="text-persianBlue dark:text-pictonBlue text-center font-medium">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          )}

          <View className="flex-row items-center my-6">
            <View className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
            <Text className="px-4 text-gray-500 dark:text-gray-400">or</Text>
            <View className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
          </View>

          <TouchableOpacity
            onPress={() => handleSocialLogin("google")}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 py-4 rounded-xl flex-row justify-center items-center"
          >
            <Text className="text-collegeBlue dark:text-white font-medium">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSocialLogin("apple")}
            className="bg-collegeBlue dark:bg-white py-4 rounded-xl flex-row justify-center items-center"
          >
            <Text className="text-white dark:text-collegeBlue font-medium">
              Continue with Apple
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-8 flex-row justify-center">
          <Text className="text-collegeBlue dark:text-middleBlue">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </Text>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text className="text-persianBlue dark:text-pictonBlue font-medium">
              {isLogin ? "Sign Up" : "Sign In"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
