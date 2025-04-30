
import { useState } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import MealGrid from '../components/MealGrid';
import { meals } from '../data/meals';
import { MealType } from '../types';

const Index = () => {
  const [filteredMeals, setFilteredMeals] = useState<MealType[]>([]);
  const [searchIngredients, setSearchIngredients] = useState<string[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (ingredients: string[]) => {
    if (ingredients.length === 0) {
      setFilteredMeals([]);
      setHasSearched(false);
      return;
    }

    const filtered = meals.filter(meal => 
      ingredients.some(ingredient => 
        meal.ingredients.some(mealIngredient => 
          mealIngredient.toLowerCase().includes(ingredient.toLowerCase())
        )
      )
    );

    setFilteredMeals(filtered);
    setSearchIngredients(ingredients);
    setHasSearched(true);
  };

  const handleRandomMeal = () => {
    const randomIndex = Math.floor(Math.random() * meals.length);
    const randomMeal = meals[randomIndex];
    setFilteredMeals([randomMeal]);
    setSearchIngredients([]);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {!hasSearched && <Hero />}
      
      <div className="container mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} onRandom={handleRandomMeal} />
        {hasSearched && <MealGrid meals={filteredMeals} searchTerm={searchIngredients} />}
        {!hasSearched && <MealGrid meals={meals.slice(0, 6)} />}
      </div>
    </div>
  );
};

export default Index;
