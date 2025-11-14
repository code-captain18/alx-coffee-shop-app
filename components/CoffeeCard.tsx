import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Coffee } from '../interfaces/Coffee';

interface CoffeeCardProps {
    coffee: Coffee;
    onPress: (coffee: Coffee) => void;
}

export default function CoffeeCard({ coffee, onPress }: CoffeeCardProps) {
    return (
        <TouchableOpacity
            style={{
                width: '48%',
                backgroundColor: '#FFFFFF',
                borderRadius: 16,
                padding: 16,
                marginBottom: 16
            }}
            onPress={() => onPress(coffee)}
            activeOpacity={0.8}
        >
            <View className="relative mb-3">
                <Image
                    source={coffee.image}
                    className="w-full h-32 rounded-xl"
                    resizeMode="cover"
                />
                <View className="absolute top-2 right-2 flex-row items-center bg-black/50 rounded-lg px-2 py-1">
                    <Ionicons name="star" size={12} color="#FFA500" />
                    <Text className="text-white text-xs ml-1">{coffee.rating}</Text>
                </View>
            </View>

            <Text style={{
                color: '#313131',
                fontSize: 18,
                fontFamily: 'Sora_600SemiBold',
                marginBottom: 4
            }}>
                {coffee.name}
            </Text>

            <Text style={{
                color: '#9CA3AF',
                fontSize: 14,
                fontFamily: 'Sora_400Regular',
                marginBottom: 12
            }}>
                {coffee.description}
            </Text>

            <View className="flex-row items-center justify-between">
                <Text style={{
                    color: '#313131',
                    fontSize: 20,
                    fontFamily: 'Sora_700Bold'
                }}>
                    $ {coffee.price}
                </Text>
                <TouchableOpacity style={{
                    backgroundColor: '#C67C4E',
                    borderRadius: 8,
                    padding: 8
                }}>
                    <Ionicons name="add" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}