import dogCateg1 from '../PricingPage/dog-categ-1.png';
import dogCateg2 from '../PricingPage/dog-categ-2.png';
import dogCateg3 from '../PricingPage/dog-categ-3.png';
import dogCateg4 from '../PricingPage/dog-categ-4.png';

export const dataServicePrice = [
    {
        id: 1,
        image: dogCateg1,
        name: 'small',
        dogCategory: '1 - 9 kg',
        services: [
            {
                name: 'smart',
                price: 20,
                list: ["Bathing and grooming", "Trimming and shaping", "Ear and nail care", "Tick protection"],
            },
            {
                name: 'premium',
                price: 40,
                list: ["All services from smart package", "Skin massage and care", "Additional trimming and shaping", "Parasite protection"],
            },
            {
                name: 'royal',
                price: 60,
                list: ["All services from premium package", "Professional bathing and care using natural products", "Additional skin massage and care", "Supplementation of essential vitamins and minerals"],
            },
        ],
    },
    {
        id: 2,
        name: 'medium',
        image: dogCateg2,
        dogCategory: '10 - 19 kg',
        services: [
            {
                name: 'smart',
                price: 80,
                list: ["Bathing and grooming", "Trimming and shaping", "Ear and nail care", "Tick protection"],
            },
            {
                name: 'premium',
                price: 100,
                list: ["All services from smart package", "Skin massage and care", "Additional trimming and shaping", "Parasite protection"],
            },
            {
                name: 'royal',
                price: 120,
                list: ["All services from premium package", "Professional bathing and care using natural products", "Additional skin massage and care", "Supplementation of essential vitamins and minerals"],
            },
        ],
    },
    {
        id: 3,
        name: 'big',
        image: dogCateg3,
        dogCategory: '20 - 29 kg',
        services: [
            {
                name: 'smart',
                price: 140,
                list: ["Bathing and grooming", "Trimming and shaping", "Ear and nail care", "Tick protection"],
            },
            {
                name: 'premium',
                price: 160,
                list: ["All services from smart package", "Skin massage and care", "Additional trimming and shaping", "Parasite protection"],
            },
            {
                name: 'royal',
                price: 180,
                list: ["All services from premium package", "Professional bathing and care using natural products", "Additional skin massage and care", "Supplementation of essential vitamins and minerals"],
            },
        ],
    },
    {
        id: 4,
        name: 'super',
        image: dogCateg4,
        dogCategory: '30 - 39 kg',
        services: [
            {
                name: 'smart',
                price: 200,
                list: ["Bathing and grooming", "Trimming and shaping", "Ear and nail care", "Tick protection"],
            },
            {
                name: 'premium',
                price: 210,
                list: ["All services from smart package", "Skin massage and care", "Additional trimming and shaping", "Parasite protection"],
            },
            {
                name: 'royal',
                price: 220,
                list: ["All services from premium package", "Professional bathing and care using natural products", "Additional skin massage and care", "Supplementation of essential vitamins and minerals"],
            },
        ],
    },
];