import { Dimensions, ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get('window');

export default function Index() {
  const handleGetStarted = () => {
    // Navigation logic will go here
    console.log("Get Started pressed");
  };

  return (
    <ImageBackground
      source={require('../assets/images/coffee_bg_img.png')}
      style={{ width: width, height: height }}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {/* <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']}
        locations={[0, 0.5, 1]}
        style={{ width: width, height: height }}
      > */}
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-end px-8 pb-16">
          {/* Main Content */}
          <View className="mb-10">
            <Text className="text-white text-[42px] font-bold text-center mb-6 leading-[50px]">
              Fall in Love with{'\n'}Coffee in Blissful{'\n'}Delight!
            </Text>
            <Text className="text-gray-300 text-lg text-center leading-7 px-2 opacity-90">
              Welcome to our cozy coffee corner, where{'\n'}every cup is a delightful for you.
            </Text>
          </View>

          {/* Get Started Button */}
          <TouchableOpacity
            onPress={handleGetStarted}
            className="bg-orange-500 rounded-3xl py-5 mx-2 mb-4"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.4,
              shadowRadius: 12,
              elevation: 10,
            }}
            activeOpacity={0.8}
          >
            <Text className="text-white text-xl font-semibold text-center tracking-wide">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* </LinearGradient> */}
    </ImageBackground>
  );
}
