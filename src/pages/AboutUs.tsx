
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 font-rajdhani text-spice-chili">About Indian AI Kitchen Delights</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-spice-masala">Our Story</h2>
            <p className="mb-4 text-gray-700">
              Indian AI Kitchen Delights was founded with a passion for making authentic Indian cuisine accessible to everyone. 
              Our journey began when we realized how challenging it could be to find recipes that match the ingredients you already have at home.
            </p>
            <p className="text-gray-700">
              Our AI-powered platform helps you discover delicious Indian recipes based on the ingredients in your pantry, 
              making cooking easier and reducing food waste.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-spice-masala">Our Mission</h2>
            <p className="text-gray-700">
              We aim to preserve and promote the rich culinary heritage of India while making it accessible to cooks of all skill levels.
              By bridging traditional recipes with modern technology, we help you explore the diverse and flavorful world of Indian cuisine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-spice-masala">Our Values</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-semibold text-spice-chili">Authenticity:</span> We honor traditional cooking techniques and flavors</li>
                <li><span className="font-semibold text-spice-chili">Accessibility:</span> Making complex recipes approachable for everyone</li>
                <li><span className="font-semibold text-spice-chili">Sustainability:</span> Reducing food waste through smart recipe suggestions</li>
                <li><span className="font-semibold text-spice-chili">Innovation:</span> Blending culinary arts with cutting-edge AI technology</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-spice-masala">What We Offer</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-semibold text-spice-turmeric">Smart Recipe Finder:</span> Find recipes based on what's already in your kitchen</li>
                <li><span className="font-semibold text-spice-turmeric">Regional Cuisines:</span> Explore dishes from all regions of India</li>
                <li><span className="font-semibold text-spice-turmeric">Difficulty Levels:</span> Recipes for beginners to expert cooks</li>
                <li><span className="font-semibold text-spice-turmeric">Dietary Options:</span> Find vegetarian, vegan, and gluten-free alternatives</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-spice-masala">Contact Us</h2>
            <p className="mb-4 text-gray-700">
              We'd love to hear from you! Whether you have questions, feedback, or want to share your cooking experiences,
              drop us a line at <span className="font-semibold text-spice-chili">hello@indianaikitchen.com</span>
            </p>
            <p className="text-gray-700">
              Follow us on social media for daily recipe inspiration, cooking tips, and more:
            </p>
            <div className="flex gap-4 mt-4">
              <div className="bg-spice-saffron/20 p-3 rounded-full">📸</div>
              <div className="bg-spice-turmeric/20 p-3 rounded-full">📱</div>
              <div className="bg-spice-chili/20 p-3 rounded-full">📘</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
