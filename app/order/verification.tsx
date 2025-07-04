import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/common/Button";

export default function VerificationScreen() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-center text-collegeBlue dark:text-yellowBanana">
          We need your permission to show the camera
        </Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    // Verify the QR code data matches the drone ID
    router.push("/order/active");
  };

  return (
    <SafeAreaView className="flex-1 bg-morningBlue dark:bg-collegeBlue">
      <View className="flex-1 p-4">
        <Text className="text-2xl font-bold text-collegeBlue dark:text-yellowBanana mb-4">
          Scan QR Code on Drone
        </Text>

        {!scanned ? (
          <CameraView
            className="flex-1 rounded-xl overflow-hidden"
            facing={facing}
            barcodeScannerSettings={{
              barcodeTypes: ["qr"],
            }}
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          >
            <View className="flex-1 bg-transparent items-center justify-center">
              <View className="w-64 h-64 border-4 border-yellowBanana rounded-xl" />
            </View>
          </CameraView>
        ) : (
          <View className="flex-1 justify-center items-center">
            <Text className="text-xl text-collegeBlue dark:text-yellowBanana">
              Verification Successful!
            </Text>
          </View>
        )}

        <View className="mt-4">
          <Button
            title={scanned ? "Continue" : "Cancel"}
            variant={scanned ? "primary" : "outline"}
            onPress={() => router.push(scanned ? "/order/active" : "/home")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
