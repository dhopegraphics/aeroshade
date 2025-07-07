import React, { useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WalletScreen = () => {
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("credit-card-1");

  // Mock data for wallet
  const walletData = {
    balance: 25.75,
    currency: "USD",
    totalSavings: 142.5,
    totalSpent: 387.25,
    referralCredits: 15.0,
  };

  const paymentMethods = [
    {
      id: "credit-card-1",
      type: "credit",
      brand: "Visa",
      last4: "1234",
      expiry: "12/26",
      isDefault: true,
      icon: "💳",
    },
    {
      id: "credit-card-2",
      type: "credit",
      brand: "Mastercard",
      last4: "5678",
      expiry: "08/25",
      isDefault: false,
      icon: "💳",
    },
    {
      id: "paypal",
      type: "paypal",
      brand: "PayPal",
      email: "john@example.com",
      isDefault: false,
      icon: "🅿️",
    },
    {
      id: "apple-pay",
      type: "apple",
      brand: "Apple Pay",
      last4: "9876",
      isDefault: false,
      icon: "🍎",
    },
  ];

  const recentTransactions = [
    {
      id: "1",
      type: "delivery",
      description: "Umbrella Delivery - Central Park",
      amount: -12.5,
      date: "2025-07-06",
      status: "completed",
      icon: "☂️",
    },
    {
      id: "2",
      type: "refund",
      description: "Refund - Cancelled Delivery",
      amount: +15.0,
      date: "2025-07-05",
      status: "completed",
      icon: "↩️",
    },
    {
      id: "3",
      type: "credit",
      description: "Referral Bonus - Friend Signup",
      amount: +5.0,
      date: "2025-07-04",
      status: "completed",
      icon: "🎁",
    },
    {
      id: "4",
      type: "delivery",
      description: "Umbrella Delivery - Times Square",
      amount: -10.0,
      date: "2025-07-03",
      status: "completed",
      icon: "☂️",
    },
    {
      id: "5",
      type: "topup",
      description: "Wallet Top-up",
      amount: +50.0,
      date: "2025-07-02",
      status: "completed",
      icon: "💰",
    },
  ];

  const PaymentMethodCard = ({ method, isSelected, onSelect }: any) => (
    <TouchableOpacity
      className={`bg-white dark:bg-persianBlue rounded-lg p-4 mb-3 border-2 ${
        isSelected
          ? "border-blue-500 dark:border-pictonBlue"
          : "border-gray-100 dark:border-gray-700"
      }`}
      onPress={() => onSelect(method.id)}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center flex-1">
          <Text className="text-2xl mr-3">{method.icon}</Text>
          <View className="flex-1">
            <Text className="text-base font-medium text-black dark:text-white">
              {method.brand}
            </Text>
            <Text className="text-sm text-gray-500 dark:text-morningBlue">
              {method.type === "paypal" ? method.email : `•••• ${method.last4}`}
            </Text>
          </View>
        </View>
        <View className="items-end">
          {method.isDefault && (
            <View className="bg-blue-100 dark:bg-pictonBlue/20 px-2 py-1 rounded-full mb-1">
              <Text className="text-xs text-blue-600 dark:text-pictonBlue font-medium">
                Default
              </Text>
            </View>
          )}
          <View
            className={`w-5 h-5 rounded-full border-2 ${
              isSelected
                ? "border-blue-500 dark:border-pictonBlue bg-blue-500 dark:bg-pictonBlue"
                : "border-gray-300 dark:border-gray-600"
            }`}
          >
            {isSelected && (
              <View className="w-1 h-1 bg-white rounded-full self-center mt-1" />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const TransactionItem = ({ transaction }: any) => {
    const getAmountColor = (amount: number) => {
      return amount > 0
        ? "text-green-600 dark:text-green-400"
        : "text-red-600 dark:text-red-400";
    };

    const getAmountText = (amount: number) => {
      return amount > 0
        ? `+$${amount.toFixed(2)}`
        : `-$${Math.abs(amount).toFixed(2)}`;
    };

    return (
      <View className="flex-row items-center py-3 border-b border-gray-100 dark:border-gray-700">
        <View className="w-10 h-10 bg-gray-100 dark:bg-collegeBlue rounded-full items-center justify-center mr-3">
          <Text className="text-lg">{transaction.icon}</Text>
        </View>
        <View className="flex-1">
          <Text className="text-base font-medium text-black dark:text-white">
            {transaction.description}
          </Text>
          <Text className="text-sm text-gray-500 dark:text-morningBlue">
            {transaction.date}
          </Text>
        </View>
        <Text
          className={`text-base font-semibold ${getAmountColor(
            transaction.amount
          )}`}
        >
          {getAmountText(transaction.amount)}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-collegeBlue">
      {/* Header */}
      <View className="bg-white dark:bg-persianBlue px-4 py-4 border-b border-gray-100 dark:border-gray-700">
        <Text className="text-2xl font-bold text-black dark:text-yellowBanana">
          Wallet
        </Text>
      </View>

      <ScrollView className="flex-1">
        {/* Balance Card */}
        <View className="px-4 py-6">
          <View className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-pictonBlue dark:to-persianBlue rounded-2xl p-6">
            <Text className="text-white/80 text-sm font-medium mb-2">
              Available Balance
            </Text>
            <Text className="text-white text-4xl font-bold mb-4">
              ${walletData.balance.toFixed(2)}
            </Text>
            <View className="flex-row justify-between">
              <TouchableOpacity className="bg-white/20 px-4 py-2 rounded-lg">
                <Text className="text-white font-medium">Add Money</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white/20 px-4 py-2 rounded-lg">
                <Text className="text-white font-medium">Send Money</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Stats Cards */}
        <View className="px-4 mb-6">
          <View className="flex-row space-x-3">
            <View className="flex-1 bg-white dark:bg-persianBlue rounded-lg p-4">
              <Text className="text-sm text-gray-500 dark:text-morningBlue">
                Total Savings
              </Text>
              <Text className="text-xl font-bold text-green-600 dark:text-green-400">
                ${walletData.totalSavings.toFixed(2)}
              </Text>
            </View>
            <View className="flex-1 bg-white dark:bg-persianBlue rounded-lg p-4">
              <Text className="text-sm text-gray-500 dark:text-morningBlue">
                Total Spent
              </Text>
              <Text className="text-xl font-bold text-black dark:text-white">
                ${walletData.totalSpent.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Referral Credits */}
        <View className="px-4 mb-6">
          <View className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-base font-medium text-green-900 dark:text-green-100">
                  Referral Credits
                </Text>
                <Text className="text-sm text-green-700 dark:text-green-300">
                  Earn $5 for each friend who signs up
                </Text>
              </View>
              <View className="items-end">
                <Text className="text-2xl font-bold text-green-600 dark:text-green-400">
                  ${walletData.referralCredits.toFixed(2)}
                </Text>
                <TouchableOpacity>
                  <Text className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Invite Friends
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Payment Methods */}
        <View className="px-4 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-semibold text-black dark:text-yellowBanana">
              Payment Methods
            </Text>
            <TouchableOpacity onPress={() => setShowAddPaymentModal(true)}>
              <Text className="text-blue-600 dark:text-pictonBlue font-medium">
                Add New
              </Text>
            </TouchableOpacity>
          </View>

          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              method={method}
              isSelected={selectedPaymentMethod === method.id}
              onSelect={setSelectedPaymentMethod}
            />
          ))}
        </View>

        {/* Recent Transactions */}
        <View className="px-4 mb-8">
          <Text className="text-lg font-semibold text-black dark:text-yellowBanana mb-4">
            Recent Transactions
          </Text>
          <View className="bg-white dark:bg-persianBlue rounded-lg p-4">
            {recentTransactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
            <TouchableOpacity className="mt-4 py-3">
              <Text className="text-center text-blue-600 dark:text-pictonBlue font-medium">
                View All Transactions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Add Payment Modal */}
      <Modal
        visible={showAddPaymentModal}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <SafeAreaView className="flex-1 bg-gray-50 dark:bg-collegeBlue">
          <View className="bg-white dark:bg-persianBlue px-4 py-4 border-b border-gray-100 dark:border-gray-700">
            <View className="flex-row items-center justify-between">
              <TouchableOpacity onPress={() => setShowAddPaymentModal(false)}>
                <Text className="text-blue-600 dark:text-pictonBlue">
                  Cancel
                </Text>
              </TouchableOpacity>
              <Text className="text-lg font-semibold text-black dark:text-yellowBanana">
                Add Payment Method
              </Text>
              <TouchableOpacity>
                <Text className="text-blue-600 dark:text-pictonBlue font-medium">
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-1 px-4 py-6">
            <TouchableOpacity className="bg-white dark:bg-persianBlue rounded-lg p-4 mb-3">
              <View className="flex-row items-center">
                <Text className="text-2xl mr-3">💳</Text>
                <Text className="text-base font-medium text-black dark:text-white">
                  Credit or Debit Card
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white dark:bg-persianBlue rounded-lg p-4 mb-3">
              <View className="flex-row items-center">
                <Text className="text-2xl mr-3">🅿️</Text>
                <Text className="text-base font-medium text-black dark:text-white">
                  PayPal
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white dark:bg-persianBlue rounded-lg p-4 mb-3">
              <View className="flex-row items-center">
                <Text className="text-2xl mr-3">🍎</Text>
                <Text className="text-base font-medium text-black dark:text-white">
                  Apple Pay
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white dark:bg-persianBlue rounded-lg p-4">
              <View className="flex-row items-center">
                <Text className="text-2xl mr-3">🏦</Text>
                <Text className="text-base font-medium text-black dark:text-white">
                  Bank Account
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default WalletScreen;
