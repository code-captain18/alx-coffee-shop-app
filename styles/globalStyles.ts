import { StyleSheet } from 'react-native';

export const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingBottom: 50,
        zIndex: 1,
    },
    title: {
        fontSize: 34,
        fontFamily: 'Sora_600SemiBold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
        lineHeight: 44,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Sora_400Regular',
        color: '#A9A9A9',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 24,
    },
    getStartedButton: {
        backgroundColor: '#C67C4E',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 16,
        width: '100%',
        maxWidth: 315,
        alignItems: 'center',
    },
    getStartedText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Sora_600SemiBold',
    },
});

export const tabLayoutStyles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        paddingTop: 8,
        paddingBottom: 8,
        height: 70,
    },
    tabBarItemContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    tabBarLabel: {
        fontSize: 12,
        fontFamily: 'Sora_400Regular',
        marginTop: 4,
    },
});

export const bagStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 16,
        position: 'relative',
    },
    headerTitle: {
        fontSize: 18,
        fontFamily: 'Sora_600SemiBold',
        color: '#313131',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    emptyIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#F9F2ED',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    emptyTitle: {
        fontSize: 20,
        fontFamily: 'Sora_600SemiBold',
        color: '#313131',
        marginBottom: 8,
    },
    emptyDescription: {
        fontSize: 16,
        fontFamily: 'Sora_400Regular',
        color: '#9CA3AF',
        textAlign: 'center',
        lineHeight: 24,
    },
});

export const notificationsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 16,
        position: 'relative',
    },
    headerTitle: {
        fontSize: 18,
        fontFamily: 'Sora_600SemiBold',
        color: '#313131',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    emptyIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#F9F2ED',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    emptyTitle: {
        fontSize: 20,
        fontFamily: 'Sora_600SemiBold',
        color: '#313131',
        marginBottom: 8,
    },
    emptyDescription: {
        fontSize: 16,
        fontFamily: 'Sora_400Regular',
        color: '#9CA3AF',
        textAlign: 'center',
        lineHeight: 24,
    },
});

export const wishlistStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 16,
        position: 'relative',
    },
    headerTitle: {
        fontSize: 18,
        fontFamily: 'Sora_600SemiBold',
        color: '#313131',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    emptyIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#F9F2ED',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    emptyTitle: {
        fontSize: 20,
        fontFamily: 'Sora_600SemiBold',
        color: '#313131',
        marginBottom: 8,
    },
    emptyDescription: {
        fontSize: 16,
        fontFamily: 'Sora_400Regular',
        color: '#9CA3AF',
        textAlign: 'center',
        lineHeight: 24,
    },
});

export const componentStyles = StyleSheet.create({
    // CoffeeCard styles
    coffeeCard: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 4,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        width: '48%',
    },
    coffeeImage: {
        width: '100%',
        height: 132,
        borderRadius: 12,
        marginBottom: 12,
    },
    coffeeInfo: {
        paddingHorizontal: 8,
        paddingBottom: 12,
    },
    coffeeName: {
        fontSize: 16,
        fontFamily: 'Sora_600SemiBold',
        color: '#242424',
        marginBottom: 4,
    },
    coffeeSubtitle: {
        fontSize: 12,
        fontFamily: 'Sora_400Regular',
        color: '#9B9B9B',
        marginBottom: 8,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    coffeePrice: {
        fontSize: 18,
        fontFamily: 'Sora_600SemiBold',
        color: '#2F4B4E',
    },
    addButton: {
        backgroundColor: '#C67C4E',
        width: 32,
        height: 32,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // CoffeePill styles
    coffeePill: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        marginRight: 8,
    },
    coffeePillActive: {
        backgroundColor: '#C67C4E',
    },
    coffeePillInactive: {
        backgroundColor: '#F9F9F9',
    },
    coffeePillText: {
        fontSize: 14,
        fontFamily: 'Sora_400Regular',
    },
    coffeePillTextActive: {
        color: 'white',
    },
    coffeePillTextInactive: {
        color: '#313131',
    },
});