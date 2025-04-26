
import { MealType } from '../types';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Separator } from './ui/separator';

interface MealCardProps {
  meal: MealType;
}

const MealCard = ({ meal }: MealCardProps) => {
  // Color palette for ingredients
  const ingredientColors = [
    'bg-[#F2FCE2]', // Soft Green
    'bg-[#FEF7CD]', // Soft Yellow
    'bg-[#FEC6A1]', // Soft Orange
    'bg-[#D3E4FD]', // Soft Blue
    'bg-[#E5DEFF]', // Soft Purple
  ];

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
              <Badge 
                key={idx} 
                variant="secondary" 
                className={`${ingredientColors[idx % ingredientColors.length]} text-gray-700 font-medium`}
              >
                {ingredient}
              </Badge>
            ))}
            {meal.ingredients.length > 5 && (
              <Badge variant="secondary" className="bg-[#F1F0FB] text-gray-700 font-medium">
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
        <Dialog>
          <DialogTrigger asChild>
            <button className="text-sm font-medium text-primary hover:underline">
              View Full Recipe
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex justify-between items-start">
                <DialogTitle className="text-2xl font-bold">{meal.name}</DialogTitle>
                <Badge variant="outline" className="bg-spice-saffron/10 text-spice-masala">
                  {meal.region}
                </Badge>
              </div>
              <DialogDescription className="text-base">
                Preparation time: {meal.prepTime}
              </DialogDescription>
            </DialogHeader>
            
            <div className="my-4">
              <img 
                src={meal.image} 
                alt={meal.name} 
                className="w-full h-64 object-cover rounded-md"
              />
            </div>

            <div className="my-6">
              <h4 className="font-semibold text-lg mb-2">Ingredients</h4>
              <ul className="grid grid-cols-2 gap-2">
                {meal.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span className="capitalize">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Separator />
            
            <div className="my-6">
              <h4 className="font-semibold text-lg mb-2">Preparation</h4>
              <div className="space-y-2 whitespace-pre-line text-muted-foreground">
                {meal.recipe}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default MealCard;
