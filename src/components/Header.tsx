
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-spice-saffron to-spice-chili p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-spice-chili text-xl font-bold">🍛</span>
          </div>
          <h1 className="text-2xl font-rajdhani font-bold">Indian AI Kitchen Delights</h1>
        </Link>
        
        <div className="hidden md:flex space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/20" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/20" asChild>
            <Link to="/recipes">Recipes</Link>
          </Button>
        </div>
        
        <Button size="icon" variant="ghost" className="md:hidden text-white hover:bg-white/20" asChild>
          <Link to="/recipes">
            <Search className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
