import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradientContainer: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollContentContainer: {
        flexGrow: 1,
    },
    headerSection: {
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 24,
    },
    locationContainer: {
        marginBottom: 24,
    },
    locationLabel: {
        color: '#9CA3AF',
        fontSize: 14,
        fontFamily: 'Sora_400Regular',
        marginBottom: 4,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Sora_600SemiBold',
        marginRight: 8,
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    searchBar: {
        flex: 1,
        backgroundColor: '#2A2A2A',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    searchInput: {
        color: 'white',
        marginLeft: 12,
        flex: 1,
        fontFamily: 'Sora_400Regular',
    },
    filterButton: {
        backgroundColor: '#C67C4E',
        width: 48,
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerContainer: {
        borderRadius: 16,
        marginBottom: 24,
        position: 'relative',
        overflow: 'hidden',
    },
    bannerImage: {
        width: '100%',
        height: 140,
        borderRadius: 16,
    },
    bannerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 24,
    },
    bannerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bannerTextSection: {
        flex: 1,
    },
    promoBadge: {
        backgroundColor: '#BBBBBB',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignSelf: 'flex-start',
        marginBottom: 12,
    },
    promoBadgeText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Sora_700Bold',
    },
    bannerTitle: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Sora_700Bold',
        marginBottom: 8,
    },
    categoriesScrollView: {
        marginBottom: 24,
    },
    categoriesRow: {
        flexDirection: 'row',
    },
    contentSection: {
        paddingHorizontal: 24,
    },
    coffeeGridScrollView: {
        height: 400,
    },
    coffeeGridContainer: {
        paddingBottom: 24,
    },
    coffeeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});