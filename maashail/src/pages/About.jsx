import React from "react";

import AboutImage1 from "../assets/aboutimg.jpeg";
import AboutImage2 from "../assets/aboutimg2.png";

const About = () => {
  return (
    <div className="bg-[#FFF4CC] min-h-screen flex flex-col">
     

      {/* About Section */}
      <main className="max-w-6xl mx-auto mt-12 px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="text-[#0B2342] space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">About Us</h1>
              <h2 className="text-2xl font-semibold text-gray-600">The Journey of Rahat Rooh</h2>
            </div>
            <div className="text-lg leading-relaxed text-justify space-y-6">
              <p>
               In the realm of nawabs, where grandeur and wisdom reigned supreme, the rishis of the time crafted natural Ayurvedic oils that bestowed extraordinary benefits upon the royalty, that later spread across the entire kingdom. It was within this opulent tapestry that the idea of Rahat Rooh was born in 1881, nearly 150 years ago. 
              </p>
              <p>
               From hair care and body care to medicinal and emergency needs, Rahat Rooh emerged as the quintessential companion for every requirement. Its legacy of trust and expertise has been diligently passed down through generations, permeating every precious drop.
              </p>
              <p>
              With the blessings of our beloved grandmother Ujjwal Chaudhary, Rahat Rooh built space in the shelves and hearts of almost every Indian household. The next generation of Late Pradeep Chaudhary and Pankaj Chaudhary carried the legacy of Rahat Rooh forward. With an aim to bring Ayurveda a household solution in the 21st Century, Rahul Chaudhary and Rohan Chaudhary shape the future of Rahat Rooh, consistently driven to uphold the ideology - Nature always has a remedy.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={AboutImage1}
              alt="About MaaSail"
              className="w-full mt-20  h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="border-t border-gray-300 my-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
            <div>
              <h2 className="text-3xl font-bold mb-4">Empowered by Women</h2>
              <p className="text-lg leading-relaxed text-justify">
              We at Rahat Rooh are firm believers of women empowerment. Women have played a key role in the formulation of some of our time-honoured solutions. Today, our production facility runs on the tensile and tenacious shoulders of strong women, from management to day-to-day operations.
              </p>
            </div>
          </div>
      </main>

      
    </div>
  );
};

export default About;
