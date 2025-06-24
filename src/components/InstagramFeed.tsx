import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      likes: 234,
      caption: "Diving into paradise 🐠"
    },
    {
      url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      likes: 456,
      caption: "Sunset vibes at Radhanagar Beach 🌅"
    },
    {
      url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      likes: 789,
      caption: "Island life is the best life 🏝️"
    },
    {
      url: "https://images.unsplash.com/photo-1583212292454-39d2a21af845?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      likes: 321,
      caption: "Morning yoga by the beach 🧘‍♀️"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-turquoise">Instagram</h2>
          <a 
            href="#" 
            className="flex items-center text-coral hover:text-turquoise transition-colors"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow Us
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img 
                src={image.url} 
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <p className="font-semibold mb-2">{image.likes} likes</p>
                  <p className="text-sm">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;