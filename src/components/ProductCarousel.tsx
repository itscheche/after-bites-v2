import { motion, useMotionValue, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const products = [
  { id: 1, name: 'Midnight Truffle', price: '$24', rating: 4.9, category: 'Chocolate' },
  { id: 2, name: 'Lavender Honey', price: '$18', rating: 4.8, category: 'Botanical' },
  { id: 3, name: 'Citrus Burst', price: '$22', rating: 4.7, category: 'Fruit' },
  { id: 4, name: 'Spiced Caramel', price: '$26', rating: 4.9, category: 'Caramel' },
  { id: 5, name: 'Rose Petals', price: '$20', rating: 4.6, category: 'Floral' },
  { id: 6, name: 'Sea Salt Dark', price: '$28', rating: 5.0, category: 'Premium' },
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0.6, 1, 0.6]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gray-400" />
              <span className="text-sm text-gray-500 tracking-wider">FEATURED COLLECTION</span>
            </div>
            <h2 className="text-4xl text-gray-800">Signature Series</h2>
          </motion.div>

          <div className="flex gap-2">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-gray-800 hover:bg-gray-800 hover:text-white transition-all disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentIndex(Math.min(products.length - 3, currentIndex + 1))}
              className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-gray-800 hover:bg-gray-800 hover:text-white transition-all disabled:opacity-50"
              disabled={currentIndex >= products.length - 3}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <motion.div
          ref={constraintsRef}
          className="flex gap-8 px-6 max-w-7xl mx-auto"
          style={{ x }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="flex-none w-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ opacity }}
            >
              <div className="group cursor-pointer">
                {/* Product wireframe */}
                <div className="relative bg-gray-50 aspect-square mb-6 overflow-hidden">
                  <div className="absolute inset-0 border-2 border-dashed border-gray-300 group-hover:border-gray-500 transition-colors" />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-4 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 group-hover:from-gray-300 group-hover:to-gray-200 transition-all duration-500" />
                  
                  {/* Product representation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-24 h-24 rounded-full bg-gray-600 group-hover:bg-gray-800 transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", damping: 15 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20" />
                    </motion.div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs text-gray-600 tracking-wide">
                    {product.category}
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs">{product.rating}</span>
                  </div>
                </div>

                {/* Product info */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg group-hover:text-gray-600 transition-colors">{product.name}</h3>
                    <span className="text-lg text-gray-800">{product.price}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-px bg-gray-300 group-hover:bg-gray-800 transition-colors" />
                    <button className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: products.length - 2 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-gray-800 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-32 h-32 border border-gray-200 rotate-45 -translate-y-1/2 translate-x-1/2 opacity-30" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border border-gray-200 -rotate-12 -translate-x-1/2 translate-y-1/2 opacity-20" />
    </section>
  );
}