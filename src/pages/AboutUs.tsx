
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
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-spice-masala">The Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-spice-saffron/20 mx-auto flex items-center justify-center mb-4">
                  <span className="text-4xl">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-bold">Raj Sharma</h3>
                <p className="text-gray-600">Master Chef & Founder</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-spice-turmeric/20 mx-auto flex items-center justify-center mb-4">
                  <span className="text-4xl">👩‍💻</span>
                </div>
                <h3 className="text-xl font-bold">Priya Patel</h3>
                <p className="text-gray-600">AI Engineer & Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
