export interface Product {
    id: number
    name: string
    description: string
    image: string
    category: string
    badge?: string
}

export const products: Product[] = [
    {
        id: 25,
        name: "GoFresh Mineral Water",
        description: "Experience the refreshing purity of GoFresh Mineral Water - sourced, filtered, and bottled to deliver clean hydration every day. Whether you are at work, on the move, or relaxing outdoors, GoFresh keeps you refreshed and energized.",
        image: "/New_GoFresh Water_700x700.png",
        category: "GoFresh Water",
        badge: "500ml + 100ml FREE",
    },
    // Yes Soda
    {
        id: 1,
        name: "Yes Apple",
        description: "YESS Apple - Tired of the clichéd saying 'an apple a day keeps the doctor away'? It's time to break free from the ordinary.",
        image: "/YessSoda_Apple_500x500_j6kWdOJ.png?height=400&width=400",
        category: "Yes Soda",
    },
    {
        id: 2,
        name: "Yes Energy",
        description: "YESS Energy - Your ultimate source of power and vitality. Invigorating beverage enhances both body and mind.",
        image: "/YessSoda_Energy_700x700.png?height=400&width=400",
        category: "Yes Soda",
    },
    {
        id: 3,
        name: "Yes Cola",
        description: "YESS Cola - Immerse yourself in the refined flavor of caramel, as it unleashes the fizzy delight.",
        image: "/YessSoda_Cola_500x500_mswr2Lh.png?height=400&width=400",
        category: "Yes Soda",
    },
    {
        id: 4,
        name: "Yes Orange",
        description: "YESS Orange - Beyond its delightful sweet and tangy flavor, the health benefits of oranges make them a top choice.",
        image: "/YessSoda_Orange_500x500-1_eu7AdVA.png?height=400&width=400",
        category: "Yes Soda",
    },

    // Flamingo Carbonated
    {
        id: 5,
        name: "Flamingo Havana",
        description: "Elevate any occasion with these vivacious refreshments that bring a burst of brightness to your table.",
        image: "/Flamingo_Havana_500x500_rX8e1wG.png?height=400&width=400",
        category: "Flamingo Carbonated",
    },
    {
        id: 6,
        name: "Flamingo Tango Pina",
        description: "Pineapples, int addition to their delightful flavor, are nature's secret to maintaining radiant skin.",
        image: "/Flamingo_Tango_500x500_2.png?height=400&width=400",
        category: "Flamingo Carbonated",
    },
    {
        id: 7,
        name: "Flamingo Orange",
        description: "Orange juice not only aids in digestion but also enhances overall immunity.",
        image: "/Tango_Orange_700x700_g4NmcZg.png?height=400&width=400",
        category: "Flamingo Carbonated",
    },
    {
        id: 8,
        name: "Flamingo Tango Ginger",
        description: "Ginger is not only readily available but can also be stored with ease, and its distinct flavor is loved.",
        image: "/Tango_Ginger_700x700_1.png?height=400&width=400",
        category: "Flamingo Carbonated",
    },

    // Fruta Drinks
    {
        id: 9,
        name: "Fruta Mango",
        description: "A symphony of sun-ripened mangoes, bursting with vibrant flavor.",
        image: "/Fruta_Mango_700x700_new_mMSmIpY.png?height=400&width=400",
        category: "Fruta Drinks",
    },
    {
        id: 10,
        name: "Fruta Orange",
        description: "Zesty brightness of oranges in a bottle. Tangy and citrusy notes.",
        image: "/Fruta_Orange_700x700_new_e8lUANJ.png?height=400&width=400",
        category: "Fruta Drinks",
    },
    {
        id: 11,
        name: "Fruta Mixed Fruit",
        description: "Combines a medley of fruits, delivering a harmonious blend of flavors.",
        image: "/Fruta_Mixed_Fruit_700x700_new.png?height=400&width=400",
        category: "Fruta Drinks",
    },
    {
        id: 12,
        name: "Fruta Guava",
        description: "Captures the exotic essence of guava, delivering a burst of fruity sweetness.",
        image: "/Fruta_Guava_700x700_new_GfE5x5Z.png?height=400&width=400",
        category: "Fruta Drinks",
    },

    // GoFresh Concentrated
    {
        id: 13,
        name: "GoFresh Orange Concentrate",
        description: "Rich in Vitamin C and fiber, oranges are a nutritional powerhouse.",
        image: "/GoFresh_Orange_500x500.png?height=400&width=400",
        category: "GoFresh Concentrated",
    },
    {
        id: 14,
        name: "GoFresh Pineapple Concentrate",
        description: "Potent storehouse of immense nutritional value. Pineapples are your secret to radiant skin.",
        image: "/GoFresh_Pine_500x500_1_dCmzPkH.png?height=400&width=400",
        category: "GoFresh Concentrated",
    },
    {
        id: 15,
        name: "GoFresh Tropical Concentrate",
        description: "A vibrant mix of tropical fruits that brings flavor and nutrition together.",
        image: "/GoFresh_Tropical_500x500_1.png?height=400&width=400",
        category: "GoFresh Concentrated",
    },

    // Yes Flavoured Drinks
    {
        id: 17,
        name: "Yes Pineapple",
        description: "Bursting with the tropical sweetness of ripe pineapples.",
        image: "/Yess_Pineapple_500x500_y84ZKHI.png?height=400&width=400",
        category: "Yes Flavoured Drinks",
    },
    {
        id: 18,
        name: "Yes Lemon Lime",
        description: "Zesty lemon-lime combination for ultimate refreshment.",
        image: "/Yess_Original_Guava_700x700_ctYOZBn.png?height=400&width=400",
        category: "Yes Flavoured Drinks",
    },
    {
        id: 19,
        name: "Yes Guava",
        description: "Bold flavor with natural fruit essence.",
        image: "/Yess_Original_Guava_700x700_ctYOZBn.png?height=400&width=400",
        category: "Yes Flavoured Drinks",
    },
    {
        id: 20,
        name: "Yes Fruit Punch",
        description: "Exotic blend of tropical fruit flavors.",
        image: "/Yess_Original_Fruit_Punch700x700_YPAwStT.png?height=400&width=400",
        category: "Yes Flavoured Drinks",
    },

    // GoFresh Ready To Go
    {
        id: 21,
        name: "GoFresh Pineapple",
        description: "Savor the tropical vibes with ready-to-drink pineapple delight.",
        image: "/GoFresh_Pineapple_700x700_COmnrS0.png?height=400&width=400",
        category: "GoFresh Ready To Go",
    },
    {
        id: 22,
        name: "GoFresh Guava",
        description: "Experience the exotic allure of guava. Portable and delicious.",
        image: "/GoFresh_Guava_700x700_s1eNihX.png?height=400&width=400",
        category: "GoFresh Ready To Go",
    },
    {
        id: 23,
        name: "GoFresh Orange",
        description: "Delicious orange blend in convenient packaging.",
        image: "/GoFresh_Orange_700x700_VL9Kq87.png?height=400&width=400",
        category: "GoFresh Ready To Go",
    },
    {
        id: 24,
        name: "GoFresh Mixed Fruit",
        description: "Enjoy a fusion of flavors with this ready-to-drink delight.",
        image: "/GoFresh_Mixed_700x700.png?height=400&width=400",
        category: "GoFresh Ready To Go",
    },
]

