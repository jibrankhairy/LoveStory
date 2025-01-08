import { motion } from "framer-motion";
import { gallery } from "../data/gallery";
import React from "react";

const GallerySection = React.memo(() => {
  return (
    <section id="gallery">
      <div className="py-10 sm:py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 font-serif text-center">
            Our Gallery
          </h2>
          <p className="text-center text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Explore our collection of stunning wedding moments captured over the
            years. Each photo tells a unique story of love, joy, and
            unforgettable memories.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg transition-transform transform group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default GallerySection;
