import dogCateg1 from './dog-categ-1.png';
import dogCateg2 from './dog-categ-2.png';
import dogCateg3 from './dog-categ-3.png';
import dogCateg4 from './dog-categ-4.png';

export const serviceLists = {
    smart: {
        title: "Smart Offert",
        list: [
            "Bathing and grooming",
            "Trimming and shaping",
            "Ear and nail care",
            "Tick protection"
        ]
    },
    premium: {
        title: "Premium offer",
        list: [
            "All services from smart package",
            "Skin massage and care",
            "Additional trimming and shaping",
            "Parasite protection",
        ],

    },
    royal: {
        title: "Royal Offer",
        list: [
            "All services from premium package",
            "Professional bathing and care using natural products",
            "Additional skin massage and care",
            "Supplementation of essential vitamins and minerals",
        ]
    },
};

export const offerData = {
    smart: [
        {
            id: 1,
            image: dogCateg1,
            name: 'small',
            dogCategory: '1 - 9 kg',
            price: 20,
        },
        {
            id: 2,
            image: dogCateg2,
            name: 'medium',
            dogCategory: '10 - 19 kg',
            price: 80,
        },
        {
            id: 3,
            image: dogCateg3,
            name: 'big',
            dogCategory: '20 - 29 kg',
            price: 140,
        },
        {
            id: 4,
            image: dogCateg4,
            name: 'super',
            dogCategory: '30 - 39 kg',
            price: 200,
        },
    ],
    premium: [
        {
            id: 1,
            image: dogCateg1,
            name: 'small',
            dogCategory: '1 - 9 kg',
            price: 40,
        },
        {
            id: 2,
            image: dogCateg2,
            name: 'medium',
            dogCategory: '10 - 19 kg',
            price: 100,
        },
        {
            id: 3,
            image: dogCateg3,
            name: 'big',
            dogCategory: '20 - 29 kg',
            price: 160,
        },
        {
            id: 4,
            image: dogCateg4,
            name: 'super',
            dogCategory: '30 - 39 kg',
            price: 210,
        },
    ],
    royal: [
        {
            id: 1,
            image: dogCateg1,
            name: 'small',
            dogCategory: '1 - 9 kg',
            price: 60,
        },
        {
            id: 2,
            image: dogCateg2,
            name: 'medium',
            dogCategory: '10 - 19 kg',
            price: 120,
        },
        {
            id: 3,
            image: dogCateg3,
            name: 'big',
            dogCategory: '20 - 29 kg',
            price: 180,
        },
        {
            id: 4,
            image: dogCateg4,
            name: 'super',
            dogCategory: '30 - 39 kg',
            price: 220,
        },
    ],
};