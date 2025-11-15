export interface Coffee {
    id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: any;
}

export interface CoffeePillProps {
    category: string;
    isSelected: boolean;
    onPress: (category: string) => void;
}

