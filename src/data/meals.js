/**
 * @typedef {Object} Meal
 * @property {string} id - Unique identifier for the meal
 * @property {string} name - Name of the dish
 * @property {string[]} ingredients - List of ingredients required
 * @property {string} recipe - Step by step cooking instructions
 * @property {string} image - URL of the dish image
 * @property {string} prepTime - Preparation time
 * @property {string} region - Region where the dish originates from
 */

/** @type {Meal[]} */
export const meals = [
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
  },
  {
    id: '16',
    name: 'Pongal',
    ingredients: ['rice', 'moong dal', 'black pepper', 'ginger', 'cashews', 'curry leaves'],
    recipe: '1. Dry roast moong dal until golden.\n2. Cook rice and dal together in water until soft.\n3. Temper with black pepper, ginger, cashews, and curry leaves in ghee.\n4. Mix the tempering with the cooked rice-dal mixture and serve.',
    image: 'https://images.unsplash.com/photo-1607742344855-f76f3cbe6609?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Tamil Nadu'
  },
  {
    id: '17',
    name: 'Gobi Manchurian',
    ingredients: ['cauliflower', 'cornflour', 'ginger', 'garlic', 'soy sauce', 'green chili', 'onion', 'capsicum'],
    recipe: '1. Coat cauliflower florets in a batter made of cornflour and deep fry until crispy.\n2. In a pan, sauté garlic, ginger, and green chilies.\n3. Add soy sauce, onions, capsicum, and sauté.\n4. Toss fried cauliflower in the sauce and serve hot.',
    image: 'https://images.unsplash.com/photo-1614147213815-2a9b4819db01?q=80&w=640',
    prepTime: '40 minutes',
    region: 'All India'
  },
  {
    id: '18',
    name: 'Tandoori Chicken',
    ingredients: ['chicken', 'yogurt', 'tandoori masala', 'garam masala', 'lemon', 'ginger', 'garlic'],
    recipe: '1. Marinate chicken with yogurt, tandoori masala, garam masala, ginger, garlic, and lemon for 4 hours.\n2. Preheat the oven or grill.\n3. Cook the marinated chicken on the grill or in the oven until charred and cooked through.',
    image: 'https://images.unsplash.com/photo-1606171162285-f0f7c1246b01?q=80&w=640',
    prepTime: '4 hours (including marination)',
    region: 'North India'
  },
  {
    id: '19',
    name: 'Rava Upma',
    ingredients: ['semolina', 'onion', 'green chili', 'mustard seeds', 'ginger', 'cashews', 'curry leaves'],
    recipe: '1. Roast semolina in a pan until golden.\n2. Heat oil, temper mustard seeds, curry leaves, ginger, and green chili.\n3. Add onions and sauté until translucent.\n4. Add water, bring to a boil, and stir in the roasted semolina.\n5. Cook until the water is absorbed and garnish with cashews.',
    image: 'https://images.unsplash.com/photo-1589981353805-6db86cf0877d?q=80&w=640',
    prepTime: '20 minutes',
    region: 'South India'
  },
  {
    id: '20',
    name: 'Chole Bhature',
    ingredients: ['chickpeas', 'flour', 'yogurt', 'onion', 'tomato', 'garam masala', 'tamarind', 'cumin'],
    recipe: '1. Soak chickpeas overnight and cook them.\n2. For bhature, mix flour, yogurt, and water to make a dough, then let it rise.\n3. Roll and deep fry bhature until golden.\n4. Cook chickpeas with onions, tomatoes, and spices to make the curry.\n5. Serve the chickpeas with bhature and tamarind chutney.',
    image: 'https://images.unsplash.com/photo-1605164520638-3b7f61f3ae49?q=80&w=640',
    prepTime: '40 minutes (plus soaking)',
    region: 'North India'
  },
  {
    id: '21',
    name: 'Dosa',
    ingredients: ['rice', 'urad dal', 'fenugreek seeds', 'water', 'salt'],
    recipe: '1. Soak rice, urad dal, and fenugreek seeds overnight.\n2. Grind into a smooth batter and let it ferment for 12-24 hours.\n3. Heat a griddle and pour a ladle of batter, spreading it thin.\n4. Cook until crispy and serve with chutney and sambar.',
    image: 'https://images.unsplash.com/photo-1600912135951-dbc41a61e9c6?q=80&w=640',
    prepTime: '2 days (including fermentation)',
    region: 'South India'
  },
  {
    id: '22',
    name: 'Pav Bhaji',
    ingredients: ['potato', 'peas', 'tomato', 'onion', 'bell pepper', 'garam masala', 'butter', 'pav'],
    recipe: '1. Boil potatoes and mash them.\n2. Sauté onions, bell peppers, tomatoes, and peas with spices.\n3. Add mashed potatoes, cook, and adjust seasoning.\n4. Toast pav with butter and serve with the bhaji.',
    image: 'https://images.unsplash.com/photo-1597037677596-bc08475ea6fd?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Maharashtra'
  },
  {
    id: '23',
    name: 'Pulao',
    ingredients: ['rice', 'onion', 'peas', 'carrot', 'cloves', 'cinnamon', 'cardamom', 'bay leaves'],
    recipe: '1. Sauté onions and whole spices in oil.\n2. Add carrots, peas, and rice.\n3. Cook the rice with water until fluffy and serve hot.',
    image: 'https://images.unsplash.com/photo-1565892524-e0e2823be594?q=80&w=640',
    prepTime: '25 minutes',
    region: 'All India'
  },
  {
    id: '24',
    name: 'Malai Kofta',
    ingredients: ['paneer', 'potato', 'onion', 'tomato', 'garam masala', 'cream', 'coriander leaves'],
    recipe: '1. Mash potatoes and paneer together, form into balls.\n2. Fry the koftas until golden.\n3. Sauté onions and tomatoes with spices, then blend into a smooth gravy.\n4. Add cream to the gravy and cook the koftas in it for a few minutes. Garnish with coriander leaves.',
    image: 'https://images.unsplash.com/photo-1603397415005-3be98c9c1b9d?q=80&w=640',
    prepTime: '45 minutes',
    region: 'North India'
  },
  {
    id: '25',
    name: 'Momos',
    ingredients: ['flour', 'cabbage', 'carrot', 'garlic', 'ginger', 'soya sauce', 'sesame oil'],
    recipe: '1. Mix flour and water to make a dough and rest.\n2. Finely chop cabbage, carrots, and sauté with garlic and ginger.\n3. Stuff the mixture into dumplings and steam for 15-20 minutes.\n4. Serve with soy-based dipping sauce.',
    image: 'https://images.unsplash.com/photo-1597792345037-45335db62d6c?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Tibet'
  },
  {
    id: '26',
    name: 'Kadhi Pakora',
    ingredients: ['gram flour', 'yogurt', 'onion', 'ginger', 'garlic', 'cumin', 'turmeric', 'green chili'],
    recipe: '1. Make gram flour batter for pakoras and fry small fritters.\n2. For kadhi, whisk yogurt with gram flour, add water, and cook with spices.\n3. Once the kadhi is thickened, add fried pakoras and cook for a few minutes.',
    image: 'https://images.unsplash.com/photo-1571826448-e5617d89de50?q=80&w=640',
    prepTime: '35 minutes',
    region: 'Punjab'
  },
  {
    id: '27',
    name: 'Biryani',
    ingredients: ['rice', 'chicken', 'onion', 'tomato', 'yogurt', 'garam masala', 'saffron'],
    recipe: '1. Cook chicken with yogurt, garam masala, and spices until tender.\n2. Prepare rice separately and layer with cooked chicken.\n3. Steam the biryani until the flavors meld together. Garnish with fried onions and serve with raita.',
    image: 'https://images.unsplash.com/photo-1605625987987-f31db7b404c7?q=80&w=640',
    prepTime: '1 hour',
    region: 'Hyderabad'
  },
  {
    id: '28',
    name: 'Rajma',
    ingredients: ['kidney beans', 'onion', 'tomato', 'garam masala', 'ginger', 'garlic'],
    recipe: '1. Soak kidney beans overnight and cook until soft.\n2. Sauté onions, ginger, garlic, and tomatoes.\n3. Add garam masala and cooked kidney beans, simmer to blend flavors.\n4. Serve with rice.',
    image: 'https://images.unsplash.com/photo-1605973781336-d474ea74adf9?q=80&w=640',
    prepTime: '45 minutes (plus soaking)',
    region: 'North India'
  },
  {
    id: '29',
    name: 'Vada Pav',
    ingredients: ['potato', 'bread bun', 'mustard seeds', 'green chili', 'turmeric', 'garam masala', 'coriander leaves'],
    recipe: '1. Boil and mash potatoes, mix with spices to form a patty.\n2. Coat the patty with chickpea flour batter and fry until crispy.\n3. Serve in a bread bun with chutney and fried green chilies.',
    image: 'https://images.unsplash.com/photo-1580837173779-4798b9c9b1b5?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Maharashtra'
  },
  {
    id: '30',
    name: 'Pesarattu',
    ingredients: ['green gram', 'onion', 'green chili', 'ginger', 'cumin', 'coriander leaves'],
    recipe: '1. Soak green gram overnight and grind it into a smooth batter.\n2. Add finely chopped onions, chilies, and cumin.\n3. Pour batter on a hot griddle and cook until crisp on both sides.\n4. Serve with chutney or sambar.',
    image: 'https://images.unsplash.com/photo-1603194577879-2b97f3d68953?q=80&w=640',
    prepTime: '25 minutes',
    region: 'Andhra Pradesh'
  },
  {
    id: '31',
    name: 'Aloo Gobi',
    ingredients: ['potato', 'cauliflower', 'onion', 'tomato', 'garam masala', 'turmeric', 'coriander leaves'],
    recipe: '1. Heat oil and sauté onions until golden.\n2. Add chopped potatoes, cauliflower, tomatoes, and spices.\n3. Cook until the vegetables are tender.\n4. Garnish with fresh coriander leaves.',
    image: 'https://images.unsplash.com/photo-1597065078989-e078039ff034?q=80&w=640',
    prepTime: '30 minutes',
    region: 'North India'
  },
  {
    id: '32',
    name: 'Samosa',
    ingredients: ['potato', 'peas', 'onion', 'cumin', 'garam masala', 'flour', 'oil'],
    recipe: '1. Prepare the filling by sautéing potatoes, peas, onions, and spices.\n2. Make a dough with flour and water, roll it into thin sheets.\n3. Fill with the prepared mixture, fold into a triangular shape, and deep fry until golden.\n4. Serve with mint chutney.',
    image: 'https://images.unsplash.com/photo-1616464330737-7c9f3006be8b?q=80&w=640',
    prepTime: '45 minutes',
    region: 'All India'
  },
  {
    id: '33',
    name: 'Dhokla',
    ingredients: ['gram flour', 'yogurt', 'mustard seeds', 'green chili', 'curry leaves', 'sugar', 'turmeric'],
    recipe: '1. Mix gram flour, yogurt, turmeric, and sugar into a batter.\n2. Steam the batter for 15-20 minutes until cooked.\n3. Prepare tempering with mustard seeds, curry leaves, and green chili and pour over the steamed dhokla.\n4. Garnish with coriander leaves.',
    image: 'https://images.unsplash.com/photo-1594704799000-94d3d8cc17fd?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Gujarat'
  },
  {
    id: '34',
    name: 'Kebabs',
    ingredients: ['chicken', 'onion', 'garlic', 'ginger', 'cumin', 'coriander powder', 'yogurt'],
    recipe: '1. Marinate chicken with yogurt, garlic, ginger, and spices for a few hours.\n2. Skewer the chicken and grill or bake until cooked through.\n3. Serve with mint chutney and salad.',
    image: 'https://images.unsplash.com/photo-1615281862960-c6c282d0b9d0?q=80&w=640',
    prepTime: '1 hour',
    region: 'North India'
  },
  {
    id: '35',
    name: 'Pani Puri',
    ingredients: ['semolina', 'potato', 'peas', 'mint leaves', 'coriander', 'tamarind chutney'],
    recipe: '1. Prepare puris by deep frying semolina dough until crisp.\n2. Make the pani by blending mint, coriander, and spices.\n3. Stuff the puris with potato and peas and serve with tamarind chutney and flavored water.',
    image: 'https://images.unsplash.com/photo-1605734709253-b9b3cf3fae60?q=80&w=640',
    prepTime: '30 minutes',
    region: 'All India'
  },
  {
    id: '36',
    name: 'Gulab Jamun',
    ingredients: ['milk powder', 'flour', 'ghee', 'cardamom', 'sugar', 'rose water'],
    recipe: '1. Prepare the dough by mixing milk powder, flour, and ghee.\n2. Shape into small balls and fry them until golden.\n3. Soak the fried balls in warm sugar syrup flavored with cardamom and rose water.',
    image: 'https://images.unsplash.com/photo-1595374250529-288b7c46b35f?q=80&w=640',
    prepTime: '1 hour',
    region: 'All India'
  },
  {
    id: '37',
    name: 'Methi Thepla',
    ingredients: ['fenugreek leaves', 'wheat flour', 'ginger', 'green chili', 'cumin', 'turmeric'],
    recipe: '1. Mix fenugreek leaves, wheat flour, spices, and water to make a dough.\n2. Roll into thin circles and cook on a griddle with ghee or oil.\n3. Serve with yogurt or pickle.',
    image: 'https://images.unsplash.com/photo-1572172888-fb8c4dffbf78?q=80&w=640',
    prepTime: '25 minutes',
    region: 'Gujarat'
  },
  {
    id: '38',
    name: 'Pongal',
    ingredients: ['rice', 'moong dal', 'black pepper', 'ginger', 'cumin seeds', 'cashews'],
    recipe: '1. Roast moong dal and rice together.\n2. Cook with water until soft.\n3. Heat ghee and temper cumin, pepper, ginger, and cashews.\n4. Mix the tempering with the cooked rice and dal, then serve.',
    image: 'https://images.unsplash.com/photo-1585424762257-b2bfa18c32b2?q=80&w=640',
    prepTime: '30 minutes',
    region: 'South India'
  },
  {
    id: '39',
    name: 'Chole Bhature',
    ingredients: ['chickpeas', 'onion', 'tomato', 'garam masala', 'turmeric', 'flour', 'yogurt'],
    recipe: '1. Cook chickpeas with onions, tomatoes, and spices until soft.\n2. Make the bhature dough using flour, yogurt, and baking soda.\n3. Roll the dough into discs and deep fry.\n4. Serve the chole with hot bhature.',
    image: 'https://images.unsplash.com/photo-1602017397497-bbfb10694f0f?q=80&w=640',
    prepTime: '1 hour',
    region: 'North India'
  },
  {
    id: '40',
    name: 'Masala Dosa',
    ingredients: ['rice', 'urad dal', 'potato', 'onion', 'mustard seeds', 'curry leaves', 'tamarind'],
    recipe: '1. Soak rice and urad dal overnight and grind to make a batter.\n2. Ferment the batter overnight.\n3. Cook potato with onions, mustard seeds, and curry leaves to make the masala filling.\n4. Make dosas by spreading the batter on a hot griddle, fill with potato masala, and serve with chutneys and sambar.',
    image: 'https://images.unsplash.com/photo-1601881366171-90cf5b49c34b?q=80&w=640',
    prepTime: '1 hour',
    region: 'South India'
  },
  {
    id: '41',
    name: 'Biryani',
    ingredients: ['basmati rice', 'chicken', 'yogurt', 'onion', 'garam masala', 'saffron', 'coriander leaves'],
    recipe: '1. Marinate chicken with yogurt, spices, and saffron.\n2. Layer partially cooked rice with the marinated chicken and cook everything together on low heat.\n3. Garnish with fried onions and fresh coriander leaves.',
    image: 'https://images.unsplash.com/photo-1607029946541-fb3d1e9d17f8?q=80&w=640',
    prepTime: '1 hour 30 minutes',
    region: 'All India'
  },
  {
    id: '42',
    name: 'Gobi Manchurian',
    ingredients: ['cauliflower', 'corn flour', 'soya sauce', 'ginger', 'garlic', 'onion', 'spring onions'],
    recipe: '1. Dip cauliflower florets in a batter made of corn flour and fry them until crispy.\n2. Prepare the sauce by sautéing garlic, ginger, onions, and adding soy sauce.\n3. Toss the fried cauliflower in the sauce and garnish with spring onions.',
    image: 'https://images.unsplash.com/photo-1611692235452-039742e7d495?q=80&w=640',
    prepTime: '30 minutes',
    region: 'All India'
  },
  {
    id: '43',
    name: 'Lassi',
    ingredients: ['yogurt', 'sugar', 'cardamom', 'water'],
    recipe: '1. Blend yogurt, sugar, and water until smooth.\n2. Add cardamom powder and ice if desired.\n3. Serve chilled.',
    image: 'https://images.unsplash.com/photo-1585292390690-1a46d658e1b5?q=80&w=640',
    prepTime: '10 minutes',
    region: 'North India'
  },
  {
    id: '44',
    name: 'Pulao',
    ingredients: ['rice', 'peas', 'carrot', 'onion', 'garam masala', 'bay leaf'],
    recipe: '1. Sauté onion, carrots, and peas with garam masala and bay leaf.\n2. Add rice and cook with water until fluffy.\n3. Serve hot as a side dish.',
    image: 'https://images.unsplash.com/photo-1595846737852-83cf59fae2ef?q=80&w=640',
    prepTime: '30 minutes',
    region: 'All India'
  },
  {
    id: '45',
    name: 'Malai Kofta',
    ingredients: ['paneer', 'potato', 'onion', 'tomato', 'cream', 'garam masala', 'coriander'],
    recipe: '1. Prepare koftas by mixing paneer and mashed potato, then deep fry.\n2. Make a gravy with onions, tomatoes, and spices.\n3. Add the koftas to the gravy and simmer for a few minutes.\n4. Garnish with fresh coriander and serve with naan.',
    image: 'https://images.unsplash.com/photo-1596675374977-0a8f2468c780?q=80&w=640',
    prepTime: '1 hour',
    region: 'North India'
  },
  {
    id: '46',
    name: 'Aloo Tikki',
    ingredients: ['potato', 'peas', 'onion', 'coriander', 'cumin', 'garam masala'],
    recipe: '1. Mash boiled potatoes and mix with peas, onions, and spices.\n2. Shape the mixture into small patties and shallow fry.\n3. Serve with chutneys and yogurt.',
    image: 'https://images.unsplash.com/photo-1591970324680-cfe984fb9a3b?q=80&w=640',
    prepTime: '30 minutes',
    region: 'All India'
  },
  {
    id: '47',
    name: 'Rajma',
    ingredients: ['kidney beans', 'onion', 'tomato', 'garam masala', 'cumin', 'ginger'],
    recipe: '1. Cook kidney beans until soft.\n2. Sauté onions, tomatoes, and spices to make the gravy.\n3. Add the cooked beans to the gravy and simmer for 15-20 minutes.\n4. Serve with rice.',
    image: 'https://images.unsplash.com/photo-1592270895223-084e3e5c1638?q=80&w=640',
    prepTime: '1 hour',
    region: 'North India'
  },
  {
    id: '48',
    name: 'Kadhi Pakora',
    ingredients: ['gram flour', 'yogurt', 'onion', 'ginger', 'garam masala', 'cumin seeds'],
    recipe: '1. Prepare pakoras by mixing gram flour with spices and deep frying.\n2. Make kadhi by whisking yogurt and spices, then cook until it thickens.\n3. Add the pakoras to the kadhi and simmer for a few minutes.',
    image: 'https://images.unsplash.com/photo-1595851484680-5f7f60437eae?q=80&w=640',
    prepTime: '45 minutes',
    region: 'North India'
  },
  {
    id: '49',
    name: 'Pasta Primavera',
    ingredients: ['pasta', 'bell pepper', 'zucchini', 'cherry tomatoes', 'olive oil', 'garlic', 'parmesan cheese'],
    recipe: '1. Cook the pasta according to package instructions.\n2. Sauté bell pepper, zucchini, and cherry tomatoes with garlic and olive oil.\n3. Toss the cooked pasta with the sautéed vegetables and top with parmesan cheese.',
    image: 'https://images.unsplash.com/photo-1587411258349-96e399efb20e?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Italian'
  },
  {
    id: '50',
    name: 'Chicken Caesar Salad',
    ingredients: ['chicken breast', 'romaine lettuce', 'croutons', 'parmesan cheese', 'Caesar dressing'],
    recipe: '1. Grill the chicken breast and slice it.\n2. Toss the lettuce, croutons, and parmesan cheese with Caesar dressing.\n3. Top with grilled chicken slices and serve.',
    image: 'https://images.unsplash.com/photo-1603052876734-3d51370a2435?q=80&w=640',
    prepTime: '25 minutes',
    region: 'American'
  },
  {
    id: '51',
    name: 'Vegetable Stir Fry',
    ingredients: ['carrot', 'bell pepper', 'broccoli', 'onion', 'soy sauce', 'ginger', 'garlic'],
    recipe: '1. Chop the vegetables into small pieces.\n2. Stir fry the vegetables with garlic and ginger in a wok.\n3. Add soy sauce and stir to coat.\n4. Serve hot with rice or noodles.',
    image: 'https://images.unsplash.com/photo-1571064440867-03cb1a8ea72a?q=80&w=640',
    prepTime: '20 minutes',
    region: 'Chinese'
  },
  {
    id: '52',
    name: 'Shakshuka',
    ingredients: ['eggs', 'tomatoes', 'onion', 'garlic', 'chili pepper', 'olive oil', 'coriander'],
    recipe: '1. Sauté onions, garlic, and chili peppers in olive oil until soft.\n2. Add chopped tomatoes and cook until the sauce thickens.\n3. Crack the eggs into the sauce and cook until the whites are set.\n4. Garnish with coriander and serve with pita bread.',
    image: 'https://images.unsplash.com/photo-1605370701420-16f493a60e7e?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Middle Eastern'
  },
  {
    id: '53',
    name: 'Sushi Rolls',
    ingredients: ['sushi rice', 'nori', 'salmon', 'avocado', 'cucumber', 'soy sauce'],
    recipe: '1. Prepare sushi rice according to package instructions.\n2. Lay a sheet of nori on a sushi mat, spread rice on top, and add thinly sliced salmon, avocado, and cucumber.\n3. Roll tightly and slice into pieces.\n4. Serve with soy sauce for dipping.',
    image: 'https://images.unsplash.com/photo-1585430222989-3029516bfe71?q=80&w=640',
    prepTime: '1 hour',
    region: 'Japanese'
  },
  {
    id: '54',
    name: 'Paella',
    ingredients: ['rice', 'shrimp', 'chicken', 'chorizo', 'bell pepper', 'peas', 'saffron'],
    recipe: '1. Sauté chicken, chorizo, and shrimp in a large pan.\n2. Add rice, bell pepper, peas, and saffron to the pan.\n3. Pour in broth and cook until the rice is tender and liquid is absorbed.\n4. Serve hot, garnished with fresh herbs.',
    image: 'https://images.unsplash.com/photo-1591962642336-2cc76f6f102e?q=80&w=640',
    prepTime: '1 hour',
    region: 'Spanish'
  },
  {
    id: '55',
    name: 'Ratatouille',
    ingredients: ['eggplant', 'zucchini', 'tomato', 'onion', 'garlic', 'herbs'],
    recipe: '1. Slice the vegetables into rounds and sauté with garlic and herbs until soft.\n2. Layer the vegetables in a baking dish and bake until tender.\n3. Serve with fresh bread or rice.',
    image: 'https://images.unsplash.com/photo-1595424730363-0603e88f7407?q=80&w=640',
    prepTime: '40 minutes',
    region: 'French'
  },
  {
    id: '56',
    name: 'Fettuccine Alfredo',
    ingredients: ['fettuccine pasta', 'heavy cream', 'butter', 'parmesan cheese', 'garlic'],
    recipe: '1. Cook the fettuccine according to package instructions.\n2. In a pan, melt butter and sauté garlic until fragrant.\n3. Add heavy cream and parmesan cheese, stirring until the sauce thickens.\n4. Toss the pasta in the sauce and serve.',
    image: 'https://images.unsplash.com/photo-1571766570580-0d35f1444f94?q=80&w=640',
    prepTime: '25 minutes',
    region: 'Italian'
  },
  {
    id: '57',
    name: 'Falafel',
    ingredients: ['chickpeas', 'onion', 'garlic', 'parsley', 'cumin', 'coriander', 'flour'],
    recipe: '1. Soak chickpeas overnight and blend with onion, garlic, and herbs.\n2. Shape the mixture into balls and fry until golden brown.\n3. Serve in pita bread with tahini sauce and fresh vegetables.',
    image: 'https://images.unsplash.com/photo-1574386790707-97ad5a0b91e0?q=80&w=640',
    prepTime: '1 hour',
    region: 'Middle Eastern'
  },
  {
    id: '58',
    name: 'Beef Tacos',
    ingredients: ['ground beef', 'taco shells', 'onion', 'tomato', 'cheese', 'sour cream', 'lettuce'],
    recipe: '1. Cook ground beef with onions and spices.\n2. Warm the taco shells and fill them with the beef mixture.\n3. Top with tomatoes, cheese, lettuce, and sour cream.',
    image: 'https://images.unsplash.com/photo-1579115354361-f365ee064303?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Mexican'
  },
  {
    id: '59',
    name: 'Eggplant Parmesan',
    ingredients: ['eggplant', 'tomato sauce', 'mozzarella cheese', 'parmesan cheese', 'bread crumbs', 'basil'],
    recipe: '1. Slice the eggplant and bread it by dipping in breadcrumbs.\n2. Fry the eggplant slices until golden.\n3. Layer the eggplant in a baking dish, topping with tomato sauce, mozzarella, and parmesan.\n4. Bake until the cheese is melted and bubbly.\n5. Garnish with fresh basil.',
    image: 'https://images.unsplash.com/photo-1604410481472-bcd8c041e94b?q=80&w=640',
    prepTime: '45 minutes',
    region: 'Italian'
  },
  {
    id: '60',
    name: 'Tom Yum Soup',
    ingredients: ['shrimp', 'lemongrass', 'galangal', 'lime leaves', 'chili', 'fish sauce', 'lime juice', 'coriander'],
    recipe: '1. Bring water to a boil with lemongrass, galangal, lime leaves, and chili.\n2. Add shrimp and cook until they turn pink.\n3. Season with fish sauce and lime juice to taste.\n4. Garnish with fresh coriander before serving.',
    image: 'https://images.unsplash.com/photo-1605500870951-f35ee92e77a2?q=80&w=640',
    prepTime: '25 minutes',
    region: 'Thai'
  },
  {
    id: '61',
    name: 'Banh Mi Sandwich',
    ingredients: ['baguette', 'pork', 'pickled vegetables', 'cilantro', 'cucumber', 'mayonnaise', 'sriracha'],
    recipe: '1. Grill or pan-fry pork slices.\n2. Slice a baguette and spread mayonnaise mixed with sriracha.\n3. Add grilled pork, pickled vegetables, cucumber, and cilantro.\n4. Close the sandwich and serve.',
    image: 'https://images.unsplash.com/photo-1572195806092-8c7a3ed732ac?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Vietnamese'
  },
  {
    id: '62',
    name: 'Moussaka',
    ingredients: ['eggplant', 'ground lamb', 'tomato sauce', 'onion', 'garlic', 'béchamel sauce', 'parmesan cheese'],
    recipe: '1. Layer fried eggplant slices at the bottom of a baking dish.\n2. Brown ground lamb with onions and garlic, then mix with tomato sauce.\n3. Layer the meat mixture over the eggplant.\n4. Top with béchamel sauce and parmesan, then bake until golden.',
    image: 'https://images.unsplash.com/photo-1592440778882-6a9e5ac9d6ae?q=80&w=640',
    prepTime: '1 hour 30 minutes',
    region: 'Greek'
  },
  {
    id: '63',
    name: 'Samosa',
    ingredients: ['potato', 'peas', 'onion', 'coriander', 'cumin', 'curry powder', 'flour'],
    recipe: '1. Cook potatoes and peas, then mash with sautéed onions and spices.\n2. Roll out dough and cut into circles.\n3. Fill each dough circle with the potato mixture and fold into triangles.\n4. Fry until golden and serve with tamarind chutney.',
    image: 'https://images.unsplash.com/photo-1581291518854-dc9d10c6a736?q=80&w=640',
    prepTime: '40 minutes',
    region: 'Indian'
  },
  {
    id: '64',
    name: 'Goulash',
    ingredients: ['beef', 'onion', 'paprika', 'tomato paste', 'garlic', 'potatoes', 'carrot', 'beef broth'],
    recipe: '1. Brown the beef with onions and garlic.\n2. Add paprika, tomato paste, carrots, and potatoes.\n3. Pour in beef broth and simmer until the meat and vegetables are tender.\n4. Serve hot with fresh bread.',
    image: 'https://images.unsplash.com/photo-1597104262279-7595cc07a34e?q=80&w=640',
    prepTime: '1 hour',
    region: 'Hungarian'
  },
  {
    id: '65',
    name: 'Kebabs',
    ingredients: ['ground lamb', 'onion', 'garlic', 'parsley', 'cumin', 'coriander', 'yogurt'],
    recipe: '1. Mix ground lamb with onions, garlic, parsley, and spices.\n2. Form into skewers and grill until cooked through.\n3. Serve with yogurt sauce and pita bread.',
    image: 'https://images.unsplash.com/photo-1572442369263-99ab2a9c67a2?q=80&w=640',
    prepTime: '40 minutes',
    region: 'Middle Eastern'
  },
  {
    id: '66',
    name: 'Kimchi',
    ingredients: ['napa cabbage', 'radish', 'garlic', 'ginger', 'gochugaru', 'fish sauce'],
    recipe: '1. Slice napa cabbage and radish, then salt and let them sit for a few hours.\n2. Blend garlic, ginger, gochugaru, and fish sauce to make a paste.\n3. Mix the paste with the cabbage and radish, then let it ferment for a few days.',
    image: 'https://images.unsplash.com/photo-1605406920057-f15b8fe21917?q=80&w=640',
    prepTime: '3-4 days (fermentation)',
    region: 'Korean'
  },
  {
    id: '67',
    name: 'Lamb Tagine',
    ingredients: ['lamb', 'apricots', 'onion', 'garlic', 'cinnamon', 'ginger', 'turmeric', 'almonds'],
    recipe: '1. Brown lamb pieces in a tagine pot.\n2. Add onions, garlic, and spices, then cook until fragrant.\n3. Add apricots and almonds, and simmer until the lamb is tender.\n4. Serve with couscous.',
    image: 'https://images.unsplash.com/photo-1581280130769-4ffb4cb91c5b?q=80&w=640',
    prepTime: '2 hours',
    region: 'Moroccan'
  },
  {
    id: '68',
    name: 'Churros',
    ingredients: ['flour', 'water', 'butter', 'sugar', 'cinnamon', 'chocolate'],
    recipe: '1. Heat water and butter until the butter melts, then stir in flour.\n2. Let the dough cool slightly, then pipe into churros shapes.\n3. Fry until golden, then roll in cinnamon sugar.\n4. Serve with chocolate dipping sauce.',
    image: 'https://images.unsplash.com/photo-1581432325313-44ccf1b8e0fa?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Spanish'
  },
  {
    id: '69',
    name: 'Chicken Shawarma',
    ingredients: ['chicken thighs', 'garlic', 'cumin', 'paprika', 'coriander', 'tahini', 'lemon', 'pita bread'],
    recipe: '1. Marinate chicken thighs in garlic, cumin, paprika, coriander, and lemon juice for a few hours.\n2. Grill or roast the chicken until cooked through.\n3. Serve in pita bread with tahini, lettuce, tomatoes, and cucumbers.',
    image: 'https://images.unsplash.com/photo-1568732096-e9c3498d7ec5?q=80&w=640',
    prepTime: '1 hour 30 minutes',
    region: 'Middle Eastern'
  },
  {
    id: '70',
    name: 'Paella',
    ingredients: ['rice', 'seafood', 'chicken', 'saffron', 'bell peppers', 'peas', 'tomato', 'garlic'],
    recipe: '1. Brown chicken pieces in a pan, then add garlic, bell peppers, and tomato.\n2. Add rice and saffron, then pour in chicken broth.\n3. Add seafood and peas, and cook until the rice is tender and the seafood is cooked through.',
    image: 'https://images.unsplash.com/photo-1604267127595-57d4bcbcb750?q=80&w=640',
    prepTime: '45 minutes',
    region: 'Spanish'
  },
  {
    id: '71',
    name: 'Bulgur Wheat Salad',
    ingredients: ['bulgur wheat', 'tomato', 'cucumber', 'parsley', 'olive oil', 'lemon juice'],
    recipe: '1. Cook bulgur wheat according to package instructions.\n2. Chop tomatoes, cucumber, and parsley, and mix them with the bulgur.\n3. Dress with olive oil and lemon juice, and season with salt and pepper.',
    image: 'https://images.unsplash.com/photo-1596081212243-e8370102e9ac?q=80&w=640',
    prepTime: '20 minutes',
    region: 'Mediterranean'
  },
  {
    id: '72',
    name: 'Peking Duck',
    ingredients: ['duck', 'hoisin sauce', 'scallions', 'cucumber', 'pancakes'],
    recipe: '1. Roast the duck until the skin is crispy and golden.\n2. Carve the duck and serve with hoisin sauce, scallions, cucumber, and thin pancakes.\n3. Assemble the pancakes by spreading hoisin sauce and adding duck and vegetables.',
    image: 'https://images.unsplash.com/photo-1600195290009-9ec66d058810?q=80&w=640',
    prepTime: '2 hours',
    region: 'Chinese'
  },
  {
    id: '73',
    name: 'Fish Tacos',
    ingredients: ['white fish fillets', 'cabbage', 'lime', 'avocado', 'cilantro', 'corn tortillas'],
    recipe: '1. Grill or fry the fish fillets until cooked through.\n2. Warm the corn tortillas, and top with fish, shredded cabbage, cilantro, and avocado slices.\n3. Squeeze lime juice over the tacos and serve.',
    image: 'https://images.unsplash.com/photo-1591804281010-df6cdbf02ff7?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Mexican'
  },
  {
    id: '74',
    name: 'Risotto',
    ingredients: ['arborio rice', 'chicken broth', 'parmesan cheese', 'onion', 'butter', 'white wine'],
    recipe: '1. Sauté onions in butter until soft, then add the rice and toast it lightly.\n2. Gradually add chicken broth and white wine, stirring constantly.\n3. Once the rice is tender, stir in parmesan cheese and season with salt and pepper.',
    image: 'https://images.unsplash.com/photo-1587692340055-5f1fc8eafc61?q=80&w=640',
    prepTime: '40 minutes',
    region: 'Italian'
  },
  {
    id: '75',
    name: 'Sushi Rolls',
    ingredients: ['sushi rice', 'seaweed sheets', 'cucumber', 'avocado', 'salmon', 'soy sauce'],
    recipe: '1. Cook sushi rice and let it cool to room temperature.\n2. Lay a seaweed sheet on a bamboo mat and spread rice on top.\n3. Add thinly sliced cucumber, avocado, and salmon.\n4. Roll the sushi tightly and slice into pieces. Serve with soy sauce.',
    image: 'https://images.unsplash.com/photo-1587599280232-717e9b6d5b99?q=80&w=640',
    prepTime: '1 hour',
    region: 'Japanese'
  },
  {
    id: '76',
    name: 'Falafel',
    ingredients: ['chickpeas', 'garlic', 'onion', 'coriander', 'cumin', 'parsley', 'flour'],
    recipe: '1. Blend chickpeas with garlic, onion, herbs, and spices.\n2. Form into balls and fry until crispy.\n3. Serve with pita bread, hummus, and salad.',
    image: 'https://images.unsplash.com/photo-1602195430836-dab2b1e75a6e?q=80&w=640',
    prepTime: '1 hour',
    region: 'Middle Eastern'
  },
  {
    id: '77',
    name: 'Tomato Basil Soup',
    ingredients: ['tomatoes', 'garlic', 'onion', 'basil', 'cream', 'vegetable broth'],
    recipe: '1. Sauté garlic and onion in a pot until soft.\n2. Add chopped tomatoes and vegetable broth, then simmer for 20 minutes.\n3. Blend the soup and stir in cream and fresh basil.\n4. Season with salt and pepper and serve hot.',
    image: 'https://images.unsplash.com/photo-1564517910-d39eaa580058?q=80&w=640',
    prepTime: '40 minutes',
    region: 'American'
  },
  {
    id: '78',
    name: 'Vegetable Stir-Fry',
    ingredients: ['broccoli', 'bell peppers', 'carrots', 'tofu', 'soy sauce', 'ginger', 'garlic'],
    recipe: '1. Stir-fry garlic and ginger in oil until fragrant.\n2. Add chopped vegetables and tofu, then stir-fry until tender.\n3. Pour in soy sauce and cook for a few more minutes. Serve with rice or noodles.',
    image: 'https://images.unsplash.com/photo-1603844917053-5c9061c91321?q=80&w=640',
    prepTime: '25 minutes',
    region: 'Asian Fusion'
  },
  {
    id: '79',
    name: 'Grilled Cheese Sandwich',
    ingredients: ['bread', 'cheese', 'butter'],
    recipe: '1. Butter one side of each slice of bread.\n2. Place cheese between the unbuttered sides.\n3. Grill the sandwich in a pan until golden brown on both sides and the cheese is melted.',
    image: 'https://images.unsplash.com/photo-1591804281904-e9bc9fa7b0b9?q=80&w=640',
    prepTime: '10 minutes',
    region: 'American'
  },
  {
    id: '80',
    name: 'Tandoori Chicken',
    ingredients: ['chicken', 'yogurt', 'garam masala', 'cumin', 'paprika', 'lemon juice'],
    recipe: '1. Marinate chicken in yogurt, garam masala, cumin, paprika, and lemon juice for at least 2 hours.\n2. Grill or bake the chicken until cooked through and slightly charred.\n3. Serve with naan or rice and a side of salad.',
    image: 'https://images.unsplash.com/photo-1600185107215-56b831ee1692?q=80&w=640',
    prepTime: '3 hours',
    region: 'Indian'
  },
  {
    id: '81',
    name: 'Pasta Primavera',
    ingredients: ['pasta', 'zucchini', 'bell peppers', 'cherry tomatoes', 'garlic', 'parmesan cheese'],
    recipe: '1. Cook pasta according to package instructions.\n2. Sauté garlic and chopped vegetables in olive oil.\n3. Toss cooked pasta with vegetables and grated parmesan cheese.',
    image: 'https://images.unsplash.com/photo-1600491322417-5f314e58d4f2?q=80&w=640',
    prepTime: '25 minutes',
    region: 'Italian'
  },
  {
    id: '82',
    name: 'BBQ Ribs',
    ingredients: ['pork ribs', 'BBQ sauce', 'brown sugar', 'garlic powder', 'paprika'],
    recipe: '1. Rub pork ribs with a mixture of brown sugar, garlic powder, paprika, salt, and pepper.\n2. Roast or grill the ribs, basting with BBQ sauce every 20 minutes.\n3. Serve with coleslaw and corn on the cob.',
    image: 'https://images.unsplash.com/photo-1561948959-fd897e0fc69d?q=80&w=640',
    prepTime: '3 hours',
    region: 'American'
  },
  {
    id: '83',
    name: 'Crispy Spring Rolls',
    ingredients: ['rice paper', 'cabbage', 'carrots', 'shrimp', 'rice noodles', 'herbs'],
    recipe: '1. Soften rice paper in warm water.\n2. Place a handful of cabbage, carrots, shrimp, rice noodles, and herbs in the center of each rice paper.\n3. Roll tightly and serve with dipping sauce.',
    image: 'https://images.unsplash.com/photo-1591804232247-44db5b5a1d7d?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Vietnamese'
  },
  {
    id: '84',
    name: 'Mushroom Risotto',
    ingredients: ['arborio rice', 'mushrooms', 'onion', 'parmesan cheese', 'vegetable broth'],
    recipe: '1. Sauté onions and mushrooms in butter.\n2. Add rice and stir until lightly toasted.\n3. Gradually add vegetable broth, stirring until the rice is tender and creamy.\n4. Stir in parmesan cheese.',
    image: 'https://images.unsplash.com/photo-1564517910-e79d6a63107c?q=80&w=640',
    prepTime: '40 minutes',
    region: 'Italian'
  },
  {
    id: '85',
    name: 'Lentil Soup',
    ingredients: ['lentils', 'carrots', 'celery', 'tomato paste', 'garlic', 'vegetable broth'],
    recipe: '1. Sauté carrots, celery, and garlic in olive oil.\n2. Add lentils, tomato paste, and vegetable broth. Simmer until the lentils are tender.\n3. Season with salt and pepper and serve hot.',
    image: 'https://images.unsplash.com/photo-1581302731864-7a67ec63b7f0?q=80&w=640',
    prepTime: '40 minutes',
    region: 'Middle Eastern'
  },
  {
    id: '86',
    name: 'Vegetarian Burrito',
    ingredients: ['flour tortillas', 'beans', 'avocado', 'cheese', 'lettuce', 'sour cream'],
    recipe: '1. Warm the tortillas and layer with beans, avocado, cheese, lettuce, and sour cream.\n2. Roll up the burrito and serve with salsa.',
    image: 'https://images.unsplash.com/photo-1571281013152-b89d2e2d063b?q=80&w=640',
    prepTime: '15 minutes',
    region: 'Mexican'
  },
  {
    id: '87',
    name: 'Chicken Parmesan',
    ingredients: ['chicken breasts', 'bread crumbs', 'egg', 'parmesan cheese', 'marinara sauce', 'mozzarella cheese'],
    recipe: '1. Bread chicken breasts with egg and breadcrumbs, then fry until golden brown.\n2. Top each piece with marinara sauce and mozzarella cheese.\n3. Bake until the cheese is melted and bubbly.\n4. Serve with spaghetti.',
    image: 'https://images.unsplash.com/photo-1587591589116-9f5c2cc7fbc7?q=80&w=640',
    prepTime: '45 minutes',
    region: 'Italian'
  },
  {
    id: '88',
    name: 'Beef Tacos',
    ingredients: ['ground beef', 'taco seasoning', 'taco shells', 'lettuce', 'tomatoes', 'cheese'],
    recipe: '1. Brown ground beef and season with taco seasoning.\n2. Fill taco shells with beef, lettuce, tomatoes, and cheese.\n3. Serve with salsa and sour cream.',
    image: 'https://images.unsplash.com/photo-1587591589116-9f5c2cc7fbc7?q=80&w=640',
    prepTime: '25 minutes',
    region: 'Mexican'
  },
  {
    id: '89',
    name: 'Chana Masala',
    ingredients: ['chickpeas', 'onion', 'tomato', 'garam masala', 'cumin', 'coriander', 'spinach'],
    recipe: '1. Sauté onions and tomatoes in oil with spices until fragrant.\n2. Add chickpeas and cook with spices and water until tender.\n3. Stir in spinach and cook until wilted. Serve with rice or naan.',
    image: 'https://images.unsplash.com/photo-1604548431053-4c6b773e2c72?q=80&w=640',
    prepTime: '45 minutes',
    region: 'Indian'
  },
  {
    id: '90',
    name: 'Grilled Salmon',
    ingredients: ['salmon fillets', 'lemon', 'garlic', 'olive oil', 'dill'],
    recipe: '1. Marinate salmon fillets with garlic, lemon juice, olive oil, and dill.\n2. Grill salmon for about 5-6 minutes per side.\n3. Serve with roasted vegetables or a fresh salad.',
    image: 'https://images.unsplash.com/photo-1600195327464-0979b320c11f?q=80&w=640',
    prepTime: '30 minutes',
    region: 'American'
  },
  {
    id: '91',
    name: 'Shakshuka',
    ingredients: ['eggs', 'tomatoes', 'onions', 'bell peppers', 'garlic', 'spices'],
    recipe: '1. Sauté onions, bell peppers, and garlic in olive oil until soft.\n2. Add tomatoes and spices like cumin, paprika, and chili flakes.\n3. Make little wells in the sauce and crack eggs into them.\n4. Cover and cook until eggs are set.\n5. Serve with warm bread.',
    image: 'https://images.unsplash.com/photo-1612202854619-39e0531e5e51?q=80&w=640',
    prepTime: '25 minutes',
    region: 'Middle Eastern'
  },
  {
    id: '92',
    name: 'Peking Duck',
    ingredients: ['duck', 'hoisin sauce', 'scallions', 'cucumber', 'pancakes'],
    recipe: '1. Roast the duck until the skin is crispy and golden.\n2. Serve with hoisin sauce, sliced scallions, cucumber, and thin pancakes.\n3. Slice the duck and wrap in pancakes with vegetables and sauce.',
    image: 'https://images.unsplash.com/photo-1606157962723-b9062e6f8a92?q=80&w=640',
    prepTime: '2 hours',
    region: 'Chinese'
  },
  {
    id: '93',
    name: 'Pad Thai',
    ingredients: ['rice noodles', 'shrimp', 'tofu', 'peanuts', 'egg', 'lime', 'fish sauce'],
    recipe: '1. Cook rice noodles according to package instructions.\n2. Stir-fry shrimp and tofu in a pan.\n3. Add cooked noodles, scrambled egg, fish sauce, and a squeeze of lime.\n4. Garnish with chopped peanuts and fresh cilantro.',
    image: 'https://images.unsplash.com/photo-1575361431230-9c122e68a2e2?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Thai'
  },
  {
    id: '94',
    name: 'Fettuccine Alfredo',
    ingredients: ['fettuccine pasta', 'butter', 'cream', 'parmesan cheese', 'garlic'],
    recipe: '1. Cook fettuccine pasta until al dente.\n2. In a pan, melt butter and sauté garlic until fragrant.\n3. Add cream and parmesan cheese, stirring until the sauce thickens.\n4. Toss cooked pasta in the sauce and serve hot.',
    image: 'https://images.unsplash.com/photo-1600805079110-10344f6d99ff?q=80&w=640',
    prepTime: '20 minutes',
    region: 'Italian'
  },
  {
    id: '95',
    name: 'Falafel',
    ingredients: ['chickpeas', 'onion', 'garlic', 'parsley', 'cumin', 'coriander', 'flour'],
    recipe: '1. Blend chickpeas, onion, garlic, and herbs in a food processor.\n2. Add flour and spices, then form into balls.\n3. Deep fry until golden brown.\n4. Serve with pita bread, tahini sauce, and salad.',
    image: 'https://images.unsplash.com/photo-1600162765332-7cfe4e9a9d8d?q=80&w=640',
    prepTime: '40 minutes',
    region: 'Middle Eastern'
  },
  {
    id: '96',
    name: 'Chicken Tikka Masala',
    ingredients: ['chicken', 'yogurt', 'onion', 'tomato paste', 'garam masala', 'cream'],
    recipe: '1. Marinate chicken in yogurt and spices.\n2. Sauté onions and tomatoes, then add chicken and cook until tender.\n3. Stir in cream to make the sauce rich and creamy.\n4. Serve with naan or rice.',
    image: 'https://images.unsplash.com/photo-1603412881455-59fd6b9ebd0c?q=80&w=640',
    prepTime: '1 hour',
    region: 'Indian'
  },
  {
    id: '97',
    name: 'Crispy Tempura',
    ingredients: ['shrimp', 'vegetables', 'tempura batter', 'oil'],
    recipe: '1. Prepare tempura batter.\n2. Dip shrimp and vegetables into the batter, then fry in hot oil until golden brown.\n3. Serve with a dipping sauce and enjoy!',
    image: 'https://images.unsplash.com/photo-1616469190907-42d49c4d4d82?q=80&w=640',
    prepTime: '30 minutes',
    region: 'Japanese'
  },
  {
    id: '98',
    name: 'Bangers and Mash',
    ingredients: ['sausages', 'potatoes', 'butter', 'onion', 'gravy'],
    recipe: '1. Boil potatoes until soft, then mash with butter and salt.\n2. Cook sausages in a pan until browned.\n3. Serve sausages on top of mashed potatoes with onion gravy.',
    image: 'https://images.unsplash.com/photo-1587431565649-e6ffb7609f39?q=80&w=640',
    prepTime: '40 minutes',
    region: 'British'
  },
  {
    id: '99',
    name: 'Korean BBQ',
    ingredients: ['beef short ribs', 'soy sauce', 'garlic', 'sesame oil', 'scallions'],
    recipe: '1. Marinate beef short ribs in soy sauce, garlic, sesame oil, and scallions.\n2. Grill the ribs until caramelized and cooked through.\n3. Serve with kimchi and rice.',
    image: 'https://images.unsplash.com/photo-1589742338180-beb76bc0365a?q=80&w=640',
    prepTime: '1 hour',
    region: 'Korean'
  },
  {
    id: '100',
    name: 'Tacos al Pastor',
    ingredients: ['pork', 'pineapple', 'onions', 'coriander', 'taco tortillas'],
    recipe: '1. Marinate pork in a blend of spices, pineapple, and vinegar.\n2. Grill or roast the pork until crispy and tender.\n3. Slice and serve in taco tortillas with onions and fresh coriander.',
    image: 'https://images.unsplash.com/photo-1563274350-df7f153a38c1?q=80&w=640',
    prepTime: '2 hours',
    region: 'Mexican'
  }
]; 