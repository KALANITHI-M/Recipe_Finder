import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { HelpCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-spice-masala to-spice-chili text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-rajdhani">
          Discover the Magic of <span className="text-spice-turmeric">Indian Cuisine</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Find delicious recipes based on ingredients you already have at home. 
          Explore the rich flavors and aromas of authentic Indian cooking.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-white text-spice-chili hover:bg-white/90" size="lg">
            Explore Recipes
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10" 
                size="lg"
              >
                <HelpCircle className="mr-2" />
                How It Works
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
              <AlertDialogHeader>
                <AlertDialogTitle>How to Use Indian AI Kitchen Delights</AlertDialogTitle>
                <AlertDialogDescription className="space-y-2">
                  <p>1. Enter Ingredients: Type in the ingredients you have at home in the search bar.</p>
                  <p>2. Search Recipes: Click search to find Indian recipes that match your ingredients.</p>
                  <p>3. Random Recipe: Click the random button to discover a surprise Indian dish.</p>
                  <p>4. View Details: Click on any recipe card to see the full recipe and instructions.</p>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=640')] bg-cover bg-center"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-spice-masala to-transparent"></div>
    </div>
  );
};

export default Hero;
