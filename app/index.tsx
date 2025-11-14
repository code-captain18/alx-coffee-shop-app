import { useRouter } from 'expo-router';
import { Dimensions, ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();



  return (
    <ImageBackground
      source={require('../assets/images/coffee_bg_img.png')}
      style={{ width: width, height: height }}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-end px-8 pb-16">
          {/* Main Content */}
          <View className="mb-10">
            <Text style={{ color: 'white', fontSize: 42, fontFamily: 'Sora_700Bold', textAlign: 'center', marginBottom: 24, lineHeight: 50 }}>
              Fall in Love with{'\n'}Coffee in Blissful{'\n'}Delight!
            </Text>
            <Text style={{ color: '#D1D5DB', fontSize: 18, fontFamily: 'Sora_400Regular', textAlign: 'center', lineHeight: 28, paddingHorizontal: 8, opacity: 0.9 }}>
              Welcome to our cozy coffee corner, where{'\n'}every cup is a delightful for you.
            </Text>
          </View>

          {/* Get Started Button */}
          <TouchableOpacity
            onPress={() => router.push('/(tabs)')}
            className="rounded-3xl py-5 mx-2 mb-4"
            style={{
              backgroundColor: '#C67C4E',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.4,
              shadowRadius: 12,
              elevation: 10,
            }}
            activeOpacity={0.8}
          >
            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Sora_600SemiBold', textAlign: 'center', letterSpacing: 0.5 }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
