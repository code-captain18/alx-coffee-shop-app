import { orderStyles } from '@/styles/orderStyles';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrderScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [deliveryMethod, setDeliveryMethod] = useState('Deliver');
    const [quantity, setQuantity] = useState(1);
    const [isDiscountApplied, setIsDiscountApplied] = useState(true);

    // Get coffee data from params or use defaults
    const coffeeId = parseInt(params.id as string) || 1;
    const coffeeName = params.name || 'Caffe Mocha';
    const coffeePrice = parseFloat(params.price as string) || 4.53;
    const coffeeDescription = params.description || 'Deep Foam';

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

    // Calculate pricing
    const itemTotal = coffeePrice * quantity;
    const deliveryFee = deliveryMethod === 'Deliver' ? 1.0 : 0;
    const discount = isDiscountApplied ? 2.0 : 0;
    const total = itemTotal + deliveryFee - discount;

    const handleBack = () => {
        router.back();
    };

    const handleQuantityChange = (change: number) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleOrder = () => {
        // Navigate to delivery tracking screen
        router.push('/delivery' as any);
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView style={orderStyles.safeArea}>
                <View style={orderStyles.container}>
                    {/* Header */}
                    <View style={orderStyles.header}>
                        <TouchableOpacity
                            onPress={handleBack}
                            style={orderStyles.backButton}
                        >
                            <Ionicons name="chevron-back" size={24} color="#313131" />
                        </TouchableOpacity>

                        <Text style={orderStyles.headerTitle}>
                            Order
                        </Text>
                    </View>

                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                        <View style={{ paddingHorizontal: 24 }}>
                            {/* Delivery Method Toggle */}
                            <View style={orderStyles.deliveryToggle}>
                                <TouchableOpacity
                                    onPress={() => setDeliveryMethod('Deliver')}
                                    style={[
                                        orderStyles.toggleButton,
                                        deliveryMethod === 'Deliver' ? orderStyles.toggleButtonActive : {}
                                    ]}
                                >
                                    <Text
                                        style={deliveryMethod === 'Deliver' ? orderStyles.toggleTextActive : orderStyles.toggleTextInactive}
                                    >
                                        Deliver
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => setDeliveryMethod('Pick Up')}
                                    style={[
                                        orderStyles.toggleButton,
                                        deliveryMethod === 'Pick Up' ? orderStyles.toggleButtonActive : {}
                                    ]}
                                >
                                    <Text
                                        style={deliveryMethod === 'Pick Up' ? orderStyles.toggleTextActive : orderStyles.toggleTextInactive}
                                    >
                                        Pick Up
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* Delivery Address */}
                            <View style={{ marginBottom: 24 }}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontFamily: 'Sora_600SemiBold',
                                        color: '#313131',
                                        marginBottom: 12,
                                    }}
                                >
                                    Delivery Address
                                </Text>

                                <View style={{ marginBottom: 16 }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontFamily: 'Sora_600SemiBold',
                                            color: '#313131',
                                            marginBottom: 4,
                                        }}
                                    >
                                        Jl. Kpg Sutoyo
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontFamily: 'Sora_400Regular',
                                            color: '#9CA3AF',
                                            lineHeight: 20,
                                        }}
                                    >
                                        Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderWidth: 1,
                                            borderColor: '#E3E3E3',
                                            borderRadius: 12,
                                            paddingHorizontal: 12,
                                            paddingVertical: 8,
                                            marginRight: 12,
                                        }}
                                    >
                                        <Ionicons name="create-outline" size={16} color="#313131" />
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontFamily: 'Sora_400Regular',
                                                color: '#313131',
                                                marginLeft: 8,
                                            }}
                                        >
                                            Edit Address
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderWidth: 1,
                                            borderColor: '#E3E3E3',
                                            borderRadius: 12,
                                            paddingHorizontal: 12,
                                            paddingVertical: 8,
                                        }}
                                    >
                                        <Ionicons name="document-text-outline" size={16} color="#313131" />
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontFamily: 'Sora_400Regular',
                                                color: '#313131',
                                                marginLeft: 8,
                                            }}
                                        >
                                            Add Note
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Order Item */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: '#F0F0F0',
                                    borderRadius: 16,
                                    padding: 16,
                                    marginBottom: 24,
                                }}
                            >
                                <View
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 12,
                                        backgroundColor: '#F9F2ED',
                                        marginRight: 16,
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Image
                                        source={getImageSource(coffeeId)}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        resizeMode="cover"
                                    />
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontFamily: 'Sora_600SemiBold',
                                            color: '#313131',
                                            marginBottom: 4,
                                        }}
                                    >
                                        {coffeeName}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontFamily: 'Sora_400Regular',
                                            color: '#9CA3AF',
                                        }}
                                    >
                                        {coffeeDescription}
                                    </Text>
                                </View>

                                {/* Quantity Controls */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() => handleQuantityChange(-1)}
                                        style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 16,
                                            backgroundColor: '#F9F2ED',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Ionicons name="remove" size={18} color="#313131" />
                                    </TouchableOpacity>

                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontFamily: 'Sora_600SemiBold',
                                            color: '#313131',
                                            marginHorizontal: 16,
                                        }}
                                    >
                                        {quantity}
                                    </Text>

                                    <TouchableOpacity
                                        onPress={() => handleQuantityChange(1)}
                                        style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 16,
                                            backgroundColor: '#F9F2ED',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Ionicons name="add" size={18} color="#313131" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Discount Section */}
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingVertical: 16,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F0F0F0',
                                    marginBottom: 24,
                                }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View
                                        style={{
                                            width: 24,
                                            height: 24,
                                            borderRadius: 12,
                                            backgroundColor: '#C67C4E',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: 12,
                                        }}
                                    >
                                        <Ionicons name="pricetag" size={14} color="white" />
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontFamily: 'Sora_600SemiBold',
                                            color: '#313131',
                                        }}
                                    >
                                        1 Discount is Applied
                                    </Text>
                                </View>
                                <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                            </TouchableOpacity>

                            {/* Payment Summary */}
                            <View style={{ marginBottom: 24 }}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontFamily: 'Sora_600SemiBold',
                                        color: '#313131',
                                        marginBottom: 16,
                                    }}
                                >
                                    Payment Summary
                                </Text>

                                <View style={{ marginBottom: 20 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontFamily: 'Sora_400Regular',
                                                color: '#313131',
                                            }}
                                        >
                                            Price
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontFamily: 'Sora_600SemiBold',
                                                color: '#313131',
                                            }}
                                        >
                                            $ {itemTotal.toFixed(2)}
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontFamily: 'Sora_400Regular',
                                                color: '#313131',
                                            }}
                                        >
                                            Delivery Fee
                                        </Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            {deliveryFee > 0 && (
                                                <Text
                                                    style={{
                                                        fontSize: 16,
                                                        fontFamily: 'Sora_400Regular',
                                                        color: '#9CA3AF',
                                                        textDecorationLine: 'line-through',
                                                        marginRight: 8,
                                                    }}
                                                >
                                                    $ 2.0
                                                </Text>
                                            )}
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    fontFamily: 'Sora_600SemiBold',
                                                    color: '#313131',
                                                }}
                                            >
                                                $ {deliveryFee.toFixed(1)}
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                {/* Payment Method */}
                                <TouchableOpacity
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        backgroundColor: '#F9F2ED',
                                        borderRadius: 14,
                                        padding: 16,
                                        marginBottom: 24,
                                    }}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View
                                            style={{
                                                width: 24,
                                                height: 24,
                                                borderRadius: 4,
                                                backgroundColor: '#C67C4E',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: 12,
                                            }}
                                        >
                                            <Ionicons name="wallet" size={14} color="white" />
                                        </View>
                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    fontFamily: 'Sora_600SemiBold',
                                                    color: '#313131',
                                                }}
                                            >
                                                Cash/Wallet
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontFamily: 'Sora_400Regular',
                                                    color: '#C67C4E',
                                                }}
                                            >
                                                $ {total.toFixed(2)}
                                            </Text>
                                        </View>
                                    </View>
                                    <Ionicons name="chevron-down" size={20} color="#313131" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>

                    {/* Bottom Order Button */}
                    <View
                        style={{
                            paddingHorizontal: 24,
                            paddingVertical: 20,
                            backgroundColor: 'white',
                            borderTopWidth: 1,
                            borderTopColor: '#F0F0F0',
                        }}
                    >
                        <TouchableOpacity
                            onPress={handleOrder}
                            style={{
                                backgroundColor: '#C67C4E',
                                paddingVertical: 16,
                                borderRadius: 16,
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    fontFamily: 'Sora_600SemiBold',
                                }}
                            >
                                Order
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}