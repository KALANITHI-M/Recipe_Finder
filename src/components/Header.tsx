
import { Search } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-spice-saffron to-spice-chili p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-spice-chili text-xl font-bold">🍛</span>
          </div>
          <h1 className="text-2xl font-rajdhani font-bold">Indian AI Kitchen Delights</h1>
        </div>
        
        <div className="hidden md:flex space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/20">Home</Button>
          <Button variant="ghost" className="text-white hover:bg-white/20">Recipes</Button>
          <Button variant="ghost" className="text-white hover:bg-white/20">About</Button>
        </div>
        
        <Button size="icon" variant="ghost" className="md:hidden text-white hover:bg-white/20">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
