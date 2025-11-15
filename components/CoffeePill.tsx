import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CoffeePillProps } from '../interfaces/Coffee';

export default function CoffeePill({ category, isSelected, onPress }: CoffeePillProps) {
    return (
        <TouchableOpacity
            onPress={() => onPress(category)}
            style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 12,
                marginRight: 12,
                backgroundColor: isSelected ? '#C67C4E' : '#E3E3E3'
            }}
        >
            <Text
                style={{
                    fontFamily: 'Sora_500Medium',
                    color: isSelected ? 'white' : '#313131'
                }}
            >
                {category}
            </Text>
        </TouchableOpacity>
    );
}