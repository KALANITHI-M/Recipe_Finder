
import { Search, LogOut, Home, Book, Info, User } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="bg-gradient-to-r from-spice-saffron to-spice-chili p-4 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-spice-chili text-xl font-bold">🍛</span>
          </div>
          <h1 className="text-2xl font-rajdhani font-bold">Indian AI Kitchen Delights</h1>
        </Link>
        
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated && (
            <span className="font-medium mr-2 bg-gradient-to-r from-white to-spice-turmeric bg-clip-text text-transparent animate-pulse font-bold px-2 py-1 rounded-md shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              Hi, {user?.name}
            </span>
          )}
          
          <Button variant="ghost" className="text-white hover:bg-white/20 flex items-center gap-1" asChild>
            <Link to="/"><Home className="h-4 w-4" /> Home</Link>
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/20 flex items-center gap-1" asChild>
            <Link to="/recipes"><Book className="h-4 w-4" /> Recipes</Link>
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/20 flex items-center gap-1" asChild>
            <Link to="/about"><Info className="h-4 w-4" /> About Us</Link>
          </Button>
          
          {!isAuthenticated ? (
            <>
              <Button variant="ghost" className="text-white hover:bg-white/20 flex items-center gap-1" asChild>
                <Link to="/login"><User className="h-4 w-4" /> Login</Link>
              </Button>
              <Button className="bg-white text-spice-chili hover:bg-white/90" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          ) : (
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/20 flex items-center gap-1" 
              onClick={logout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          )}
        </div>
        
        <div className="md:hidden flex items-center space-x-2">
          {isAuthenticated && (
            <span className="font-medium mr-2 text-sm bg-gradient-to-r from-white to-spice-turmeric bg-clip-text text-transparent animate-pulse font-bold px-1">
              Hi, {user?.name}
            </span>
          )}
          
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/20" asChild>
            <Link to="/">
              <Home className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/20" asChild>
            <Link to="/recipes">
              <Book className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/20" asChild>
            <Link to="/about">
              <Info className="h-5 w-5" />
            </Link>
          </Button>
          
          {isAuthenticated ? (
            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20" onClick={logout}>
              <LogOut className="h-5 w-5" />
            </Button>
          ) : (
            <Button size="sm" className="bg-white text-spice-chili hover:bg-white/90" asChild>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
