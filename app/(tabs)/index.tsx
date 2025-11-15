import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('All Coffee');

    const categories = ['All Coffee', 'Machiato', 'Latte', 'Americano'];

    const coffeeProducts = [
        {
            id: 1,
            name: 'Caffe Mocha',
            description: 'Deep Foam',
            price: 4.53,
            rating: 4.8,
            image: require('../../assets/images/coffee_bg_img.png')
        },
        {
            id: 2,
            name: 'Flat White',
            description: 'Espresso',
            price: 3.53,
            rating: 4.8,
            image: require('../../assets/images/coffee_bg_img.png')
        }
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#313131' }}>
            <ScrollView className="flex-1">
                {/* Header */}
                <View className="px-6 pt-4 pb-6">
                    {/* Location */}
                    <View className="mb-6">
                        <Text style={{ color: '#9CA3AF', fontSize: 14, fontFamily: 'Sora_400Regular', marginBottom: 4 }}>Location</Text>
                        <View className="flex-row items-center">
                            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Sora_600SemiBold', marginRight: 8 }}>Bilzen, Tanjungbalai</Text>
                            <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
                        </View>
                    </View>

                    {/* Search Bar and Profile */}
                    <View className="flex-row items-center mb-6">
                        <View style={{ flex: 1, backgroundColor: '#E3E3E3', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                            <Ionicons name="search" size={20} color="#9CA3AF" />
                            <TextInput
                                placeholder="Search coffee"
                                placeholderTextColor="#9CA3AF"
                                style={{ color: '#313131', marginLeft: 12, flex: 1, fontFamily: 'Sora_400Regular' }}
                            />
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#C67C4E', width: 48, height: 48, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="options" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Promo Banner */}
                    <View style={{ backgroundColor: '#C67C4E', borderRadius: 16, padding: 24, marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-1">
                                <View className="bg-red-500 rounded-lg px-3 py-1 self-start mb-3">
                                    <Text style={{ color: 'white', fontSize: 12, fontFamily: 'Sora_700Bold' }}>Promo</Text>
                                </View>
                                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Sora_700Bold', marginBottom: 8 }}>
                                    Buy one get{'\n'}one FREE
                                </Text>
                            </View>
                            <View className="relative">
                                <Image
                                    source={require('../../assets/images/coffee_bg_img.png')}
                                    className="w-24 h-24 rounded-full"
                                    resizeMode="cover"
                                />
                                <View style={{ position: 'absolute', top: -8, right: -8, backgroundColor: '#313131', borderRadius: 12, width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}>
                                    <Ionicons name="heart" size={14} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Category Tabs */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
                        <View className="flex-row">
                            {categories.map((category, index) => (
                                <TouchableOpacity
                                    key={category}
                                    onPress={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-xl mr-3 ${selectedCategory === category
                                        ? 'bg-orange-500'
                                        : 'bg-gray-800'
                                        }`}
                                >
                                    <Text
                                        className={`font-medium ${selectedCategory === category
                                            ? 'text-white'
                                            : 'text-gray-400'
                                            }`}
                                    >
                                        {category}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>

                {/* Coffee Grid */}
                <View className="px-6 pb-6">
                    <View className="flex-row flex-wrap justify-between">
                        {coffeeProducts.map((coffee) => (
                            <View key={coffee.id} style={{ width: '48%', backgroundColor: '#F9F2ED', borderRadius: 16, padding: 16, marginBottom: 16 }}>
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

                                <Text style={{ color: '#313131', fontSize: 18, fontFamily: 'Sora_600SemiBold', marginBottom: 4 }}>{coffee.name}</Text>
                                <Text style={{ color: '#9CA3AF', fontSize: 14, fontFamily: 'Sora_400Regular', marginBottom: 12 }}>{coffee.description}</Text>

                                <View className="flex-row items-center justify-between">
                                    <Text style={{ color: '#313131', fontSize: 20, fontFamily: 'Sora_700Bold' }}>$ {coffee.price}</Text>
                                    <TouchableOpacity style={{ backgroundColor: '#C67C4E', borderRadius: 8, padding: 8 }}>
                                        <Ionicons name="add" size={20} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}