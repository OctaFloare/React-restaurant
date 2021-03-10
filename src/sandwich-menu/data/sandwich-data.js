import funnySandwich from "../../core/images/funnySandwich.jpeg"
import crazySandwich from "../../core/images/crazySandwich.jpeg"
import uglySandwich from "../../core/images/uglySandwich.jpeg"
import fancySandwich from "../../core/images/fancySandiwch.jpeg"

export const sandwichData = [
    {
        id : 1,
        name : 'Funny sandwich',
        price : 12.00,
        img :  funnySandwich,
        alt: 'funny sandwich',
        description:'A sandwich with good jokes inside',
        ingredients: {
            meat: {
                name: "Bacon",
                weight: '150 gr'
            },
            cheese: {
                name: "Mozzarela",
                weight: '20 gr'
            },
            salad:{
                name: 'Rosii',
                weight: '5 gr',
            },
            extra: {
                name: "Weed",
                weight: '1 gr'
            },
        }
    },
    {
        id: 2,
        name: 'Crazy sandwich',
        price: 14.00,
        img: crazySandwich,
        alt: 'crazy sandwich',
        description: 'A sandwich with some shady stuff',
        ingredients: {
            meat: {
                name: "Pork",
                weight: '150 gr'
            },
            cheese: {
                name: "Cream Cheese",
                weight: '30 gr'
            },
            salad: {
                name: 'Castraveti',
                weight: '5 gr',
            },
            extra: {
                name: "Jalapeno",
                weight: '5 gr'
            },
        },
    },
    {
        id : 3,
        name : 'Ugly sandwich',
        price : 10.00,
        img :  uglySandwich,
        alt : 'ugly sandwich',
        description:'A sandwich with low self-esteem',
        ingredients: {
            meat: {
                name: "Parizel",
                weight: '150 gr'
            },
            cheese: {
                name: "Branza de oaie",
                weight: '30 gr'
            },
            salad: {
                name: 'Salata',
                weight: '5 gr',
            },
            extra: {
                name: "Ceapa",
                weight: '5 gr'
            },
        },
    },
    {
        id : 4,
        name : 'Fancy sandwich',
        price : 15.00,
        img :  fancySandwich,
        alt : 'fancy sandwich',
        description:'A sandwich with good manners and good looks',
        ingredients: {
            meat: {
                name: "Black angus",
                weight: '150 gr'
            },
            cheese: {
                name: "Feta",
                weight: '30 gr'
            },
            salad: {
                name: 'Varza',
                weight: '5 gr',
            },
            extra: {
                name: "Aur",
                weight: '5 gr'
            },
        },
    },
]