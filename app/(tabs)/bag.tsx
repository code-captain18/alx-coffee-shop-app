import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Bag() {
    return (
        <SafeAreaView className="flex-1 bg-gray-900 items-center justify-center">
            <Text className="text-white text-2xl font-bold">Shopping Bag</Text>
            <Text className="text-gray-400 mt-2">Coming Soon</Text>
        </SafeAreaView>
    );
}