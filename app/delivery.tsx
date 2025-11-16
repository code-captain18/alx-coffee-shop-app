import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DeliveryScreen() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    const handleCall = () => {
        // Handle call functionality
        console.log('Calling delivery person...');
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    {/* Map Area */}
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: '#F5F5F5',
                            position: 'relative',
                        }}
                    >
                        {/* Back Button */}
                        <TouchableOpacity
                            onPress={handleBack}
                            style={{
                                position: 'absolute',
                                top: 60,
                                left: 24,
                                width: 44,
                                height: 44,
                                borderRadius: 22,
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                                elevation: 3,
                            }}
                        >
                            <Ionicons name="chevron-back" size={24} color="#313131" />
                        </TouchableOpacity>

                        {/* Location Button */}
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                top: 60,
                                right: 24,
                                width: 44,
                                height: 44,
                                borderRadius: 22,
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                                elevation: 3,
                            }}
                        >
                            <Ionicons name="navigate" size={24} color="#313131" />
                        </TouchableOpacity>

                        {/* Map Placeholder with Route */}
                        <View style={{ flex: 1, backgroundColor: '#F8F8F8', position: 'relative' }}>
                            {/* Street Grid Pattern */}
                            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                                {/* Vertical lines */}
                                {[...Array(6)].map((_, i) => (
                                    <View
                                        key={`v${i}`}
                                        style={{
                                            position: 'absolute',
                                            width: 1,
                                            height: '100%',
                                            backgroundColor: '#E0E0E0',
                                            left: `${20 + i * 15}%`,
                                        }}
                                    />
                                ))}
                                {/* Horizontal lines */}
                                {[...Array(8)].map((_, i) => (
                                    <View
                                        key={`h${i}`}
                                        style={{
                                            position: 'absolute',
                                            height: 1,
                                            width: '100%',
                                            backgroundColor: '#E0E0E0',
                                            top: `${15 + i * 12}%`,
                                        }}
                                    />
                                ))}
                            </View>

                            {/* Route Path */}
                            <View style={{
                                position: 'absolute',
                                top: '25%',
                                left: '15%',
                                width: '45%',
                                height: 3,
                                backgroundColor: '#C67C4E',
                                borderRadius: 2,
                            }} />
                            <View style={{
                                position: 'absolute',
                                top: '25%',
                                left: '60%',
                                width: 3,
                                height: '35%',
                                backgroundColor: '#C67C4E',
                                borderRadius: 2,
                            }} />
                            <View style={{
                                position: 'absolute',
                                top: '60%',
                                left: '60%',
                                width: '25%',
                                height: 3,
                                backgroundColor: '#C67C4E',
                                borderRadius: 2,
                            }} />

                            {/* Delivery Person Location */}
                            <View style={{
                                position: 'absolute',
                                top: '23%',
                                left: '13%',
                                width: 32,
                                height: 32,
                                borderRadius: 16,
                                backgroundColor: '#C67C4E',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Ionicons name="bicycle" size={18} color="white" />
                            </View>

                            {/* Destination */}
                            <View style={{
                                position: 'absolute',
                                top: '58%',
                                right: '13%',
                                width: 32,
                                height: 32,
                                borderRadius: 16,
                                backgroundColor: '#C67C4E',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Ionicons name="home" size={18} color="white" />
                            </View>

                            {/* Street Labels */}
                            <Text style={{
                                position: 'absolute',
                                top: '35%',
                                left: '5%',
                                fontSize: 12,
                                fontFamily: 'Sora_400Regular',
                                color: '#9CA3AF',
                                transform: [{ rotate: '90deg' }],
                            }}>
                                86th Street
                            </Text>

                            <Text style={{
                                position: 'absolute',
                                top: '15%',
                                left: '25%',
                                fontSize: 12,
                                fontFamily: 'Sora_400Regular',
                                color: '#9CA3AF',
                            }}>
                                96th St
                            </Text>

                            <Text style={{
                                position: 'absolute',
                                top: '75%',
                                right: '35%',
                                fontSize: 12,
                                fontFamily: 'Sora_400Regular',
                                color: '#9CA3AF',
                            }}>
                                3rd Ave
                            </Text>
                        </View>
                    </View>

                    {/* Bottom Info Section */}
                    <View
                        style={{
                            backgroundColor: 'white',
                            borderTopLeftRadius: 24,
                            borderTopRightRadius: 24,
                            paddingHorizontal: 24,
                            paddingTop: 24,
                            paddingBottom: 24,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: -2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 8,
                            elevation: 5,
                        }}
                    >
                        {/* Delivery Time */}
                        <View style={{ alignItems: 'center', marginBottom: 24 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontFamily: 'Sora_600SemiBold',
                                    color: '#313131',
                                    marginBottom: 4,
                                }}
                            >
                                10 minutes left
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontFamily: 'Sora_400Regular',
                                    color: '#9CA3AF',
                                }}
                            >
                                Delivery to Jl. Kpg Sutoyo
                            </Text>

                            {/* Progress Bar */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 16,
                                    alignItems: 'center',
                                }}
                            >
                                <View style={{ width: 60, height: 4, backgroundColor: '#4CAF50', borderRadius: 2 }} />
                                <View style={{ width: 8, height: 4, backgroundColor: '#4CAF50', borderRadius: 2, marginLeft: 4 }} />
                                <View style={{ width: 60, height: 4, backgroundColor: '#4CAF50', borderRadius: 2, marginLeft: 4 }} />
                                <View style={{ width: 8, height: 4, backgroundColor: '#4CAF50', borderRadius: 2, marginLeft: 4 }} />
                                <View style={{ width: 60, height: 4, backgroundColor: '#E0E0E0', borderRadius: 2, marginLeft: 4 }} />
                                <View style={{ width: 8, height: 4, backgroundColor: '#E0E0E0', borderRadius: 2, marginLeft: 4 }} />
                                <View style={{ width: 60, height: 4, backgroundColor: '#E0E0E0', borderRadius: 2, marginLeft: 4 }} />
                            </View>
                        </View>

                        {/* Delivery Status */}
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#F9F2ED',
                                borderRadius: 16,
                                padding: 16,
                                marginBottom: 20,
                            }}
                        >
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    backgroundColor: 'white',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 16,
                                }}
                            >
                                <Ionicons name="bicycle" size={22} color="#C67C4E" />
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
                                    Delivered your order
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'Sora_400Regular',
                                        color: '#9CA3AF',
                                        lineHeight: 20,
                                    }}
                                >
                                    We will deliver your goods to you in the shortest possible time.
                                </Text>
                            </View>
                        </View>

                        {/* Delivery Person Info */}
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                backgroundColor: 'white',
                                borderRadius: 16,
                                padding: 16,
                                borderWidth: 1,
                                borderColor: '#F0F0F0',
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <View
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25,
                                        backgroundColor: '#E0E0E0',
                                        marginRight: 16,
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Image
                                        source={require('@/assets/images/driver.png')}
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
                                            marginBottom: 2,
                                        }}
                                    >
                                        Brooklyn Simmons
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontFamily: 'Sora_400Regular',
                                            color: '#9CA3AF',
                                        }}
                                    >
                                        Personal Courier
                                    </Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                onPress={handleCall}
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 22,
                                    backgroundColor: '#C67C4E',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Ionicons name="call" size={22} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}