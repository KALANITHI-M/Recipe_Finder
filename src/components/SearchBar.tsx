
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (ingredients: string[]) => void;
  onRandom: () => void;
}

const SearchBar = ({ onSearch, onRandom }: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const ingredients = searchInput
      .split(',')
      .map(item => item.trim().toLowerCase())
      .filter(item => item !== '');
    onSearch(ingredients);
  };

  return (
    <div className="bg-muted p-6 rounded-lg shadow-sm max-w-3xl mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold text-foreground">Find Your Perfect Indian Recipe</h2>
        <p className="text-muted-foreground">Enter ingredients separated by commas</p>
      </div>
      
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="rice, chicken, tomato..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-10 bg-background"
          />
        </div>
        
        <div className="flex gap-2">
          <Button type="submit" className="flex-grow sm:flex-grow-0 bg-primary hover:bg-primary/90">
            Search Recipes
          </Button>
          <Button 
            type="button" 
            onClick={onRandom}
            variant="secondary"
            className="bg-secondary hover:bg-secondary/90"
          >
            <span className="mr-2">🎲</span>
            Random
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
