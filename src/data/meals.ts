
import { MealType } from '../types';

export const meals: MealType[] = [
  {
    id: '1',
    name: 'Butter Chicken',
    ingredients: ['chicken', 'butter', 'cream', 'tomato', 'garam masala', 'ginger', 'garlic', 'onion', 'kasuri methi', 'yogurt', 'turmeric'],
    recipe: '1. Marinate chicken with yogurt, turmeric, and garam masala for 2 hours.\n2. In a pan, sauté onions until golden brown.\n3. Add ginger-garlic paste and cook for 2 minutes.\n4. Add tomato puree and cook until oil separates.\n5. Add marinated chicken and cook for 15 minutes.\n6. Add butter and cream, simmer for 10 minutes.\n7. Finish with kasuri methi and serve hot with naan.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=640',
    prepTime: '40 minutes',
    region: 'North India'
  },
  {
    id: '2',
    name: 'Palak Paneer',
    ingredients: ['paneer', 'spinach', 'onion', 'tomato', 'ginger', 'garlic', 'garam masala', 'cream', 'cumin seeds', 'turmeric'],
    recipe: '1. Blanch spinach for 2 minutes, then blend into a smooth puree.\n2. Heat oil, add cumin seeds until they crackle.\n3. Sauté onions until translucent, add ginger-garlic paste.\n4. Add tomatoes and cook until soft.\n5. Add spices: garam masala, turmeric, salt.\n6. Mix in spinach puree and simmer for 10 minutes.\n7. Add pan-fried paneer cubes and cream.\n8. Cook for 5 more minutes and serve hot.',
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=640',
    prepTime: '30 minutes',
    region: 'North India'
  },
  {
    id: '3',
    name: 'Chicken Biryani',
    ingredients: ['basmati rice', 'chicken', 'onion', 'tomato', 'yogurt', 'ginger', 'garlic', 'biryani masala', 'saffron', 'mint', 'ghee'],
    recipe: '1. Soak saffron in warm milk.\n2. Marinate chicken with yogurt, ginger-garlic paste, and biryani masala for 2 hours.\n3. Cook basmati rice with whole spices until 70% done.\n4. In a heavy bottom pot, layer: marinated chicken, partially cooked rice.\n5. Add fried onions, mint leaves, and saffron milk.\n6. Seal pot with dough and cook on low heat for 25 minutes.\n7. Let it rest for 10 minutes before opening.\n8. Gently mix and serve hot with raita.',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=640',
    prepTime: '60 minutes',
    region: 'Hyderabad'
  },
  {
    id: '4',
    name: 'Masala Dosa',
    ingredients: ['rice', 'urad dal', 'potato', 'onion', 'mustard seeds', 'curry leaves', 'turmeric', 'green chili'],
    recipe: 'Ferment rice and urad dal batter. Make potato filling with spices. Spread batter on hot griddle. Add filling and fold dosa.',
    image: 'https://images.unsplash.com/photo-1589516261367-33594a0af623?q=80&w=640',
    prepTime: '30 minutes (plus fermentation time)',
    region: 'South India'
  },
  {
    id: '5',
    name: 'Chole Bhature',
    ingredients: ['chickpeas', 'flour', 'onion', 'tomato', 'ginger', 'garlic', 'green chili', 'spices', 'yogurt'],
    recipe: 'Cook chickpeas with spices and tomatoes. Make a dough with flour and yogurt. Deep fry the dough to make bhature. Serve with chole.',
    image: 'https://images.unsplash.com/photo-1626777552726-4dca0447bcd4?q=80&w=640',
    prepTime: '45 minutes (plus soaking time)',
    region: 'North India'
  },
  {
    id: '6',
    name: 'Paneer Tikka',
    ingredients: ['paneer', 'bell peppers', 'onion', 'yogurt', 'ginger', 'garlic', 'tikka masala', 'lemon'],
    recipe: 'Marinate paneer and vegetables in yogurt and spices. Skewer and grill until charred. Serve with mint chutney.',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d9?q=80&w=640',
    prepTime: '25 minutes (plus marination)',
    region: 'North India'
  },
  {
    id: '7',
    name: 'Aloo Gobi',
    ingredients: ['potato', 'cauliflower', 'onion', 'tomato', 'ginger', 'garlic', 'cumin', 'coriander', 'turmeric'],
    recipe: 'Saute onions, ginger, and garlic. Add spices, tomatoes, potatoes, and cauliflower. Cover and cook until vegetables are tender.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=640',
    prepTime: '30 minutes',
    region: 'North India'
  },
  {
    id: '8',
    name: 'Pav Bhaji',
    ingredients: ['potato', 'peas', 'bell peppers', 'onion', 'tomato', 'pav bhaji masala', 'butter', 'bread rolls'],
    recipe: 'Cook vegetables until soft. Mash and add spices and butter. Serve with buttered and toasted bread rolls.',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Maharashtra'
  },
  {
    id: '9',
    name: 'Samosa',
    ingredients: ['flour', 'potato', 'peas', 'onion', 'cumin', 'coriander', 'ginger', 'green chili'],
    recipe: 'Make dough with flour. Prepare filling with spiced potatoes and peas. Fill and shape into triangles. Deep fry until golden.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=640',
    prepTime: '60 minutes',
    region: 'North India'
  },
  {
    id: '10',
    name: 'Dal Makhani',
    ingredients: ['black lentils', 'kidney beans', 'butter', 'cream', 'onion', 'tomato', 'ginger', 'garlic', 'spices'],
    recipe: 'Soak and cook lentils and beans. Prepare a tomato-based sauce with spices. Combine and simmer. Finish with butter and cream.',
    image: 'https://images.unsplash.com/photo-1626107162276-710f04bd575c?q=80&w=640',
    prepTime: '30 minutes (plus soaking time)',
    region: 'Punjab'
  },
  {
    id: '11',
    name: 'Rogan Josh',
    ingredients: ['lamb', 'yogurt', 'onion', 'ginger', 'garlic', 'kashmiri chili', 'spices'],
    recipe: 'Brown the meat. Add onions, ginger, garlic, and spices. Add yogurt and simmer until meat is tender.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=640',
    prepTime: '60 minutes',
    region: 'Kashmir'
  },
  {
    id: '12',
    name: 'Vegetable Korma',
    ingredients: ['mixed vegetables', 'onion', 'coconut milk', 'cashews', 'ginger', 'garlic', 'spices', 'cream'],
    recipe: 'Saute vegetables. Make a sauce with onion, cashew paste, spices, coconut milk, and cream. Combine and simmer.',
    image: 'https://images.unsplash.com/photo-1631292784640-2b24be663b89?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Mughlai'
  },
  {
    id: '13',
    name: 'Tandoori Chicken',
    ingredients: ['chicken', 'yogurt', 'lemon', 'ginger', 'garlic', 'tandoori masala', 'red chili powder'],
    recipe: 'Marinate chicken in yogurt and spices. Cook in a tandoor or bake until charred and cooked through.',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=640',
    prepTime: '30 minutes (plus marination)',
    region: 'Punjab'
  },
  {
    id: '14',
    name: 'Malai Kofta',
    ingredients: ['potato', 'paneer', 'corn flour', 'onion', 'cream', 'cashews', 'tomato', 'spices'],
    recipe: 'Make koftas with mashed potatoes and paneer. Deep fry until golden. Prepare a creamy tomato sauce. Combine and serve.',
    image: 'https://images.unsplash.com/photo-1645177628401-5f14bb5f2a58?q=80&w=640',
    prepTime: '45 minutes',
    region: 'North India'
  },
  {
    id: '15',
    name: 'Idli Sambhar',
    ingredients: ['rice', 'urad dal', 'toor dal', 'vegetables', 'tamarind', 'sambhar masala', 'mustard seeds', 'curry leaves'],
    recipe: 'Ferment rice and urad dal batter. Steam to make idlis. Cook toor dal with vegetables, tamarind, and spices for sambhar.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=640',
    prepTime: '30 minutes (plus fermentation)',
    region: 'South India'
  }
];
