import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CoffeeDetail() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [selectedSize, setSelectedSize] = useState('M');
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    // Get data from navigation params or use fallbacks
    const coffeeId = parseInt(params.id as string) || 1;
    const coffeeName = params.name || 'Caffe Mocha';
    const coffeePrice = parseFloat(params.price as string) || 4.53;
    const coffeeRating = parseFloat(params.rating as string) || 4.8;
    const coffeeDescription = `A ${coffeeName} is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk...`;

    // Get the correct image based on coffee ID
    const getImageSource = (id: number) => {
        switch (id) {
            case 1:
                return require('@/assets/images/coffee1.png');
            case 2:
                return require('@/assets/images/coffee2.png');
            case 3:
                return require('@/assets/images/coffee3.png');
            case 4:
                return require('@/assets/images/coffee4.png');
            default:
                return require('@/assets/images/coffee1.png');
        }
    };

    const coffeeData = {
        reviewCount: 230,
        image: getImageSource(coffeeId),
        options: [
            { id: 'delivery', name: 'Fast Delivery', icon: 'bicycle' },
            { id: 'quality', name: 'Quality Bean', icon: 'ellipse' },
            { id: 'milk', name: 'Extra Milk', icon: 'cube' }
        ]
    };

    const sizes = ['S', 'M', 'L'];

    const handleBack = () => {
        router.back();
    };

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const toggleOption = (optionId: string) => {
        setSelectedOptions(prev =>
            prev.includes(optionId)
                ? prev.filter(id => id !== optionId)
                : [...prev, optionId]
        );
    };

    const handleBuyNow = () => {
        router.push({
            pathname: '/order',
            params: {
                id: coffeeId.toString(),
                name: coffeeName,
                price: coffeePrice.toString(),
                description: coffeeDescription
            }
        } as any);
    };

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#313131' }}>
                <View style={{ flex: 1 }}>
                    {/* Header */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 24,
                            paddingVertical: 16,
                            backgroundColor: '#313131',
                        }}
                    >
                        <TouchableOpacity
                            onPress={handleBack}
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: 12,
                                backgroundColor: '#52555A',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Ionicons name="arrow-back" size={24} color="white" />
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: 'Sora_600SemiBold',
                                color: 'white',
                                textAlign: 'center',
                            }}
                        >
                            Detail
                        </Text>

                        <TouchableOpacity
                            onPress={handleFavorite}
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: 12,
                                backgroundColor: '#52555A',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Ionicons
                                name={isFavorite ? "heart" : "heart-outline"}
                                size={24}
                                color={isFavorite ? "#DC3535" : "white"}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Coffee Image */}
                    <View style={{ paddingHorizontal: 24, paddingBottom: 16, flex: 0.4 }}>
                        <View
                            style={{
                                borderRadius: 20,
                                overflow: 'hidden',
                                backgroundColor: '#F9F2ED',
                                flex: 1,
                            }}
                        >
                            <Image
                                source={coffeeData.image}
                                style={{
                                    width: '100%',
                                    flex: 1,
                                }}
                                resizeMode="cover"
                            />
                        </View>
                    </View>

                    {/* Coffee Info */}
                    <View style={{ backgroundColor: 'white', borderTopLeftRadius: 24, borderTopRightRadius: 24, flex: 0.6 }}>
                        <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 20 }}>
                            {/* Title and Rating */}
                            <View style={{ marginBottom: 12 }}>
                                <Text
                                    style={{
                                        fontSize: 22,
                                        fontFamily: 'Sora_700Bold',
                                        color: '#313131',
                                        marginBottom: 2,
                                    }}
                                >
                                    {coffeeName}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'Sora_400Regular',
                                        color: '#9CA3AF',
                                        marginBottom: 12,
                                    }}
                                >
                                    Ice/Hot
                                </Text>

                                {/* Rating and Icons */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Ionicons name="star" size={20} color="#FBBE21" />
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontFamily: 'Sora_600SemiBold',
                                                color: '#313131',
                                                marginLeft: 6,
                                                marginRight: 6,
                                            }}
                                        >
                                            {coffeeRating}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontFamily: 'Sora_400Regular',
                                                color: '#9CA3AF',
                                            }}
                                        >
                                            ({coffeeData.reviewCount})
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        {coffeeData.options.map((option, index) => (
                                            <TouchableOpacity
                                                key={option.id}
                                                onPress={() => toggleOption(option.id)}
                                                style={{
                                                    width: 36,
                                                    height: 36,
                                                    borderRadius: 10,
                                                    backgroundColor: selectedOptions.includes(option.id) ? '#C67C4E' : '#F9F2ED',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginLeft: index > 0 ? 8 : 0,
                                                }}
                                            >
                                                <Ionicons
                                                    name={option.icon as any}
                                                    size={16}
                                                    color={selectedOptions.includes(option.id) ? 'white' : '#C67C4E'}
                                                />
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            </View>

                            {/* Divider */}
                            <View style={{ height: 1, backgroundColor: '#EAEAEA', marginBottom: 12 }} />

                            {/* Description */}
                            <View style={{ marginBottom: 16 }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'Sora_600SemiBold',
                                        color: '#313131',
                                        marginBottom: 8,
                                    }}
                                >
                                    Description
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'Sora_400Regular',
                                        color: '#9CA3AF',
                                        lineHeight: 20,
                                    }}
                                    numberOfLines={2}
                                    ellipsizeMode="tail"
                                >
                                    {coffeeDescription}
                                </Text>
                                <TouchableOpacity style={{ marginTop: 4 }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontFamily: 'Sora_600SemiBold',
                                            color: '#C67C4E',
                                        }}
                                    >
                                        Read More
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* Size Selection */}
                            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 16 }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'Sora_600SemiBold',
                                        color: '#313131',
                                        marginBottom: 10,
                                    }}
                                >
                                    Size
                                </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    {sizes.map((size) => (
                                        <TouchableOpacity
                                            key={size}
                                            onPress={() => setSelectedSize(size)}
                                            style={{
                                                flex: 1,
                                                paddingVertical: 10,
                                                marginHorizontal: 4,
                                                borderRadius: 10,
                                                borderWidth: 1,
                                                borderColor: selectedSize === size ? '#C67C4E' : '#E3E3E3',
                                                backgroundColor: selectedSize === size ? '#FFF5EE' : 'white',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    fontFamily: 'Sora_600SemiBold',
                                                    color: selectedSize === size ? '#C67C4E' : '#313131',
                                                }}
                                            >
                                                {size}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </View>

                        {/* Bottom Section - Price and Buy Button */}
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 24,
                                paddingVertical: 16,
                                backgroundColor: 'white',
                                borderTopWidth: 1,
                                borderTopColor: '#EAEAEA',
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'Sora_400Regular',
                                        color: '#9CA3AF',
                                        marginBottom: 2,
                                    }}
                                >
                                    Price
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontFamily: 'Sora_700Bold',
                                        color: '#C67C4E',
                                    }}
                                >
                                    $ {coffeePrice.toFixed(2)}
                                </Text>
                            </View>

                            <TouchableOpacity
                                onPress={handleBuyNow}
                                style={{
                                    backgroundColor: '#C67C4E',
                                    paddingHorizontal: 28,
                                    paddingVertical: 14,
                                    borderRadius: 14,
                                    flex: 1,
                                    maxWidth: 180,
                                    marginLeft: 20,
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 16,
                                        fontFamily: 'Sora_600SemiBold',
                                        textAlign: 'center',
                                    }}
                                >
                                    Buy Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}