import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CoffeeCard from '../../components/CoffeeCard';
import CoffeePill from '../../components/CoffeePill';
import { categories, coffeeProducts } from '../../constants/coffeeData';

export default function Home() {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState('All Coffee');

    const handleCoffeePress = (coffee: any) => {
        router.push({
            pathname: '/coffee-detail',
            params: {
                id: coffee.id.toString(),
                name: coffee.name,
                price: coffee.price.toString(),
                rating: coffee.rating.toString(),
                description: coffee.description
            }
        } as any);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <ScrollView className="flex-1">
                {/* Dark Header Section with SafeAreaView */}
                <SafeAreaView style={{ backgroundColor: '#313131' }}>
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
                            <View style={{ flex: 1, backgroundColor: '#2A2A2A', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                <Ionicons name="search" size={20} color="#9CA3AF" />
                                <TextInput
                                    placeholder="Search coffee"
                                    placeholderTextColor="#A2A2A2"
                                    style={{ color: 'white', marginLeft: 12, flex: 1, fontFamily: 'Sora_400Regular' }}
                                />
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#C67C4E', width: 48, height: 48, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name="options" size={24} color="white" />
                            </TouchableOpacity>
                        </View>

                        {/* Promo Banner */}
                        <View style={{ borderRadius: 16, marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
                            <Image
                                source={require('../../assets/images/Banner 1.png')}
                                style={{
                                    width: '100%',
                                    height: 140,
                                    borderRadius: 16,
                                }}
                                resizeMode="cover"
                            />
                            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: 24 }}>
                                <View className="flex-row items-center justify-between">
                                    <View className="flex-1">
                                        <View style={{ backgroundColor: '#BBBBBB', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 4, alignSelf: 'flex-start', marginBottom: 12 }}>
                                            <Text style={{ color: 'white', fontSize: 12, fontFamily: 'Sora_700Bold' }}>Promo</Text>
                                        </View>
                                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Sora_700Bold', marginBottom: 8 }}>
                                            Buy one get{'\n'}one FREE
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>

                {/* White Background Section with SafeAreaView - Starts from Category Tabs */}
                <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }} edges={['bottom']}>
                    <View style={{ paddingHorizontal: 24 }}>
                        {/* Category Tabs */}
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 24 }}>
                            <View className="flex-row" >
                                {categories.map((category, index) => (
                                    <CoffeePill
                                        key={category}
                                        category={category}
                                        isSelected={selectedCategory === category}
                                        onPress={setSelectedCategory}
                                    />
                                ))}
                            </View>
                        </ScrollView>

                        {/* Coffee Grid */}
                        <View style={{ paddingBottom: 24 }}>
                            <View className="flex-row flex-wrap justify-between">
                                {coffeeProducts.map((coffee) => (
                                    <CoffeeCard
                                        key={coffee.id}
                                        coffee={coffee}
                                        onPress={handleCoffeePress}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
}