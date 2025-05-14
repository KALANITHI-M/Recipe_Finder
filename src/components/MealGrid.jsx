import MealCard from './MealCard';

/**
 * @param {Object} props
 * @param {Array} props.meals - Array of meal objects
 * @param {Array<string>} [props.searchTerm=[]] - Array of search terms
 */
const MealGrid = ({ meals, searchTerm = [] }) => {
  const hasSearch = searchTerm.length > 0;
  
  return (
    <div className="mt-8 mb-10">
      {hasSearch && (
        <div className="mb-6 text-center">
          <h2 className="text-xl font-medium">
            {meals.length > 0 
              ? `Found ${meals.length} recipe${meals.length === 1 ? '' : 's'} with: `
              : 'No recipes found with: '}
            <span className="text-primary font-semibold">{searchTerm.join(', ')}</span>
          </h2>
        </div>
      )}
      
      {!hasSearch && meals.length > 0 && (
        <div className="mb-6 text-center">
          <h2 className="text-xl font-medium">
            {meals.length === 1 ? 'Your random recipe' : 'Available recipes'}
          </h2>
        </div>
      )}
      
      {meals.length === 0 ? (
        <div className="text-center py-12 bg-muted rounded-lg">
          <h3 className="text-xl font-medium mb-2">No recipes found</h3>
          <p className="text-muted-foreground">Try different ingredients or get a random recipe</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MealGrid; 