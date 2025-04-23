
import { MealType } from '../types';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

interface MealCardProps {
  meal: MealType;
}

const MealCard = ({ meal }: MealCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img 
          src={meal.image} 
          alt={meal.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-xl">{meal.name}</h3>
          <Badge variant="outline" className="bg-spice-saffron/10 text-spice-masala">
            {meal.region}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">{meal.prepTime}</div>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <div className="mb-3">
          <p className="text-sm font-medium mb-1">Ingredients:</p>
          <div className="flex flex-wrap gap-1">
            {meal.ingredients.slice(0, 5).map((ingredient, idx) => (
              <Badge key={idx} variant="secondary" className="bg-muted text-accent-foreground">
                {ingredient}
              </Badge>
            ))}
            {meal.ingredients.length > 5 && (
              <Badge variant="secondary" className="bg-muted text-accent-foreground">
                +{meal.ingredients.length - 5} more
              </Badge>
            )}
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium mb-1">Recipe:</p>
          <p className="text-sm text-muted-foreground line-clamp-3">{meal.recipe}</p>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <button className="text-sm font-medium text-primary hover:underline">
          View Full Recipe
        </button>
      </CardFooter>
    </Card>
  );
};

export default MealCard;
