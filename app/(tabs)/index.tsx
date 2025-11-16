import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CoffeeCard from '../../components/CoffeeCard';
import CoffeePill from '../../components/CoffeePill';
import { categories, coffeeProducts } from '../../constants/coffeeData';
import { homeStyles } from '../../styles/homeStyles';

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
        <LinearGradient
            colors={['#313131', '#313131', '#FFFFFF', '#FFFFFF']}
            locations={[0, 0.35, 0.35, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={homeStyles.container}
        >
            <SafeAreaView style={homeStyles.safeArea}>
                {/* Header Section */}
                <View style={homeStyles.headerSection}>
                    {/* Location */}
                    <View style={homeStyles.locationContainer}>
                        <Text style={homeStyles.locationLabel}>Location</Text>
                        <View style={homeStyles.locationRow}>
                            <Text style={homeStyles.locationText}>Bilzen, Tanjungbalai</Text>
                            <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
                        </View>
                    </View>

                    {/* Search Bar and Profile */}
                    <View style={homeStyles.searchSection}>
                        <View style={homeStyles.searchBar}>
                            <Ionicons name="search" size={20} color="#9CA3AF" />
                            <TextInput
                                placeholder="Search coffee"
                                placeholderTextColor="#A2A2A2"
                                style={homeStyles.searchInput}
                            />
                        </View>
                        <TouchableOpacity style={homeStyles.filterButton}>
                            <Ionicons name="options" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Promo Banner */}
                    <View style={homeStyles.bannerContainer}>
                        <Image
                            source={require('@/assets/images/Banner 1.png')}
                            style={homeStyles.bannerImage}
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

                {/* Content Section - Starts from Category Tabs */}
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
                    <ScrollView style={{ height: 400 }} contentContainerStyle={{ paddingBottom: 24 }}>
                        <View className="flex-row flex-wrap justify-between">
                            {coffeeProducts.map((coffee) => (
                                <CoffeeCard
                                    key={coffee.id}
                                    coffee={coffee}
                                    onPress={handleCoffeePress}
                                />
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}