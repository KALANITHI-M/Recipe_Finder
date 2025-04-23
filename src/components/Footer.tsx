
const Footer = () => {
  return (
    <footer className="bg-spice-masala text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Indian AI Kitchen Delights</h3>
            <p className="text-white/80">
              Discover authentic Indian recipes with our AI-powered recipe finder. 
              Find meals based on ingredients you already have at home.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">Home</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">All Recipes</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Popular Cuisines</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">North Indian</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">South Indian</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Punjabi</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Gujarati</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Bengali</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Maharashtrian</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Indian AI Kitchen Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
