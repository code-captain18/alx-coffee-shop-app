import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Dimensions, ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();



  return (
    <View style={{ flex: 1, backgroundColor: '#000000ff' }}>
      {/* Background Image (top half only) */}
      <ImageBackground
        source={require('../assets/images/coffee_bg_img.png')}
        style={{
          width: width,
          height: height * 0.6, // slightly more than half
          position: 'absolute',
          top: 0,
        }}
        resizeMode="cover"
      />

      {/* Gradient Fade at Bottom of Image */}
      <LinearGradient
        colors={['transparent', '#000000ff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          position: 'absolute',
          top: height * 0.6 - 80, // aligns with new image bottom
          width: width,
          height: 80,
        }}
      />

      {/* Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* Main Content */}
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-end px-8 pb-10">
          <View className="mb-10">
            <Text
              style={{
                color: 'white',
                fontSize: 38,
                fontFamily: 'Sora_600SemiBold',
                textAlign: 'center',
                marginBottom: 24,
                lineHeight: 50,
              }}
            >
              Fall in Love with{'\n'}Coffee in Blissful{'\n'}Delight!
            </Text>
            <Text
              style={{
                color: '#D1D5DB',
                fontSize: 16,
                fontFamily: 'Sora_400Regular',
                textAlign: 'center',
                lineHeight: 28,
                paddingHorizontal: 8,
                opacity: 0.5,
              }}
            >
              Welcome to our cozy coffee corner, where{'\n'}every cup is a delightful for you.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push('/(tabs)')}
            className="rounded-2xl py-5 mx-1 mb-4"
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
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontFamily: 'Sora_600SemiBold',
                textAlign: 'center',
                letterSpacing: 0.5,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>

  );
}
