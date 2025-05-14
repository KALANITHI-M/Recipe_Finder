import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MealGrid from '../components/MealGrid';
import { meals } from '../data/meals';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../components/ui/pagination';

/**
 * Recipe page component that displays a searchable grid of meals with pagination
 * @returns {JSX.Element} The rendered Recipes page
 */
const RecipesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredMeals, setFilteredMeals] = useState(meals);
  const [searchIngredients, setSearchIngredients] = useState([]);
  const recipesPerPage = 12;
  const totalPages = Math.ceil(filteredMeals.length / recipesPerPage);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredMeals.slice(indexOfFirstRecipe, indexOfLastRecipe);

  /**
   * Handle page change in pagination
   * @param {number} page - The page number to navigate to
   */
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Filter meals based on ingredients
   * @param {string[]} ingredients - Array of ingredient names to filter by
   */
  const handleSearch = (ingredients) => {
    if (ingredients.length === 0) {
      setFilteredMeals(meals);
      setSearchIngredients([]);
      return;
    }

    // Filter for recipes that contain ALL of the specified ingredients exactly
    const filtered = meals.filter(meal => 
      ingredients.every(searchIngredient => 
        meal.ingredients.some(mealIngredient => 
          mealIngredient.toLowerCase() === searchIngredient.toLowerCase()
        )
      )
    );

    setFilteredMeals(filtered);
    setSearchIngredients(ingredients);
    setCurrentPage(1); // Reset to first page when searching
  };

  /**
   * Select a random meal from the full meal list
   */
  const handleRandomMeal = () => {
    const randomIndex = Math.floor(Math.random() * meals.length);
    const randomMeal = meals[randomIndex];
    setFilteredMeals([randomMeal]);
    setSearchIngredients([]);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Explore Indian Recipes</h1>
        <SearchBar onSearch={handleSearch} onRandom={handleRandomMeal} />
        
        <MealGrid meals={currentRecipes} searchTerm={searchIngredients} />
        
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => handlePageChange(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default RecipesPage; 