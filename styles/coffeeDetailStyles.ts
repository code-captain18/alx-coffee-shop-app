import { StyleSheet } from 'react-native';

export const coffeeDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#313131',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: '#313131',
    },
    headerButton: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#52555A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'Sora_600SemiBold',
        color: 'white',
        textAlign: 'center',
    },
    imageSection: {
        paddingHorizontal: 24,
        paddingBottom: 16,
        flex: 0.4,
    },
    imageContainer: {
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#F9F2ED',
        flex: 1,
    },
    coffeeImage: {
        width: '100%',
        flex: 1,
    },
    infoSection: {
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        flex: 0.6,
    },
    infoContent: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    titleSection: {
        marginBottom: 12,
    },
    coffeeName: {
        fontSize: 22,
        fontFamily: 'Sora_700Bold',
        color: '#313131',
        marginBottom: 2,
    },
    coffeeType: {
        fontSize: 14,
        fontFamily: 'Sora_400Regular',
        color: '#9CA3AF',
        marginBottom: 12,
    },
    ratingSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ratingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingScore: {
        fontSize: 16,
        fontFamily: 'Sora_600SemiBold',
        color: '#313131',
        marginLeft: 6,
        marginRight: 6,
    },
    reviewCount: {
        fontSize: 12,
        fontFamily: 'Sora_400Regular',
        color: '#9CA3AF',
    },
    optionsSection: {
        flexDirection: 'row',
    },
    optionButton: {
        width: 36,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionButtonSelected: {
        backgroundColor: '#C67C4E',
    },
    optionButtonUnselected: {
        backgroundColor: '#F9F2ED',
    },
    optionSpacing: {
        marginLeft: 8,
    },
    divider: {
        height: 1,
        backgroundColor: '#EAEAEA',
        marginBottom: 12,
    },
    descriptionSection: {
        marginBottom: 16,
    },
    descriptionTitle: {
        fontSize: 16,
        fontFamily: 'Sora_600SemiBold',
        color: '#313131',
        marginBottom: 8,
    },
    descriptionText: {
        fontSize: 14,
        fontFamily: 'Sora_400Regular',
        color: '#9CA3AF',
        lineHeight: 20,
    },
    readMoreButton: {
        marginTop: 4,
    },
    readMoreText: {
        fontSize: 14,
        fontFamily: 'Sora_600SemiBold',
        color: '#C67C4E',
    },
    sizeSection: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 16,
    },
    sizeTitle: {
        fontSize: 16,
        fontFamily: 'Sora_600SemiBold',
        color: '#313131',
        marginBottom: 10,
    },
    sizeOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sizeButton: {
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 4,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
    },
    sizeButtonSelected: {
        borderColor: '#C67C4E',
        backgroundColor: '#FFF5EE',
    },
    sizeButtonUnselected: {
        borderColor: '#E3E3E3',
        backgroundColor: 'white',
    },
    sizeTextSelected: {
        fontSize: 16,
        fontFamily: 'Sora_600SemiBold',
        color: '#C67C4E',
    },
    sizeTextUnselected: {
        fontSize: 16,
        fontFamily: 'Sora_600SemiBold',
        color: '#313131',
    },
    bottomSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#EAEAEA',
    },
    priceSection: {
        // No specific styles needed as it uses individual text styles
    },
    priceLabel: {
        fontSize: 14,
        fontFamily: 'Sora_400Regular',
        color: '#9CA3AF',
        marginBottom: 2,
    },
    priceValue: {
        fontSize: 18,
        fontFamily: 'Sora_700Bold',
        color: '#C67C4E',
    },
    buyButton: {
        backgroundColor: '#C67C4E',
        paddingHorizontal: 28,
        paddingVertical: 14,
        borderRadius: 14,
        flex: 1,
        maxWidth: 180,
        marginLeft: 20,
    },
    buyButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Sora_600SemiBold',
        textAlign: 'center',
    },
});