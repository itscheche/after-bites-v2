"use client";

import { motion, useMotionValue, animate, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Milk Tea Crème",
    price: "$24",
    rating: 4.9,
    category: "Chocolate",
    image: "/assets/brownsugarmilktea.jpeg",
  },
  {
    id: 2,
    name: "Lemon Cheese",
    price: "$18",
    rating: 4.8,
    category: "Lemon",
    image: "/assets/lemoncheese.jpeg",
  },
  {
    id: 3,
    name: "Matcha Custard",
    price: "$22",
    rating: 4.7,
    category: "Matcha",
    image: "/assets/matchacustard.jpeg",
  },
  {
    id: 4,
    name: "Mango Coco",
    price: "$26",
    rating: 4.9,
    category: "Mango",
    image: "/assets/mangococo.jpeg",
  },
  {
    id: 5,
    name: "Pineapple Curd",
    price: "$20",
    rating: 4.6,
    category: "Pineapple",
    image: "/assets/pineapplecurd.jpeg",
  },
  {
    id: 6,
    name: "Sea Salt Dark",
    price: "$28",
    rating: 5.0,
    category: "Premium",
  },
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  // const opacity = useTransform(x, [-100, 0, 100], [0.6, 1, 0.6]);

  // Width of each product card + gap (w-80 + gap-8)
  const CARD_WIDTH = 320 + 32; // 352px total per card
  const VISIBLE_COUNT = 3;

  useEffect(() => {
    // Animate to new position whenever index changes
    const controls = animate(x, -currentIndex * CARD_WIDTH, {
      type: "spring",
      stiffness: 100,
      damping: 20,
    });
    return controls.stop;
  }, [currentIndex]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Header */}
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
              <span className="text-sm text-gray-500 tracking-wider">
                FEATURED COLLECTION
              </span>
            </div>
            <h2 className="text-4xl text-primary">Signature Series</h2>
          </motion.div>

          <div className="flex gap-2">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              className="w-12 h-12 border cursor-pointer border-gray-300 flex items-center justify-center hover:border-[var(--color-tertiary)] hover:bg-[var(--color-tertiary)] hover:text-white transition-all disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentIndex(
                  Math.min(products.length - VISIBLE_COUNT, currentIndex + 1)
                )
              }
              className="w-12 h-12 border cursor-pointer border-gray-300 flex items-center justify-center hover:border-[var(--color-tertiary)] hover:bg-[var(--color-primary)] hover:text-white transition-all disabled:opacity-50"
              disabled={currentIndex >= products.length - VISIBLE_COUNT}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <motion.div className="flex gap-8 px-6 max-w-7xl mx-auto" style={{ x }}>
          {products.map((product, index) => {
            const isVisible =
              index >= currentIndex && index < currentIndex + VISIBLE_COUNT;

            return (
              <motion.div
                key={product.id}
                className="flex-none w-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="group cursor-pointer">
                  <div className="relative bg-gray-50 aspect-square mb-6 overflow-hidden">
                    <div className="absolute inset-0 border-2 border-dashed border-[#C9BDBF] group-hover:border-[#715f63] transition-colors" />
                    <div
                      className={`absolute inset-4 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 group-hover:from-gray-300 group-hover:to-gray-200 transition-all duration-500 ${
                        isVisible ? "blur-0" : "blur-sm brightness-90"
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs text-gray-600 tracking-wide">
                      {product.category}
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{product.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg group-hover:text-gray-600 transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-lg text-gray-800">
                        {product.price}
                      </span>
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
            );
          })}
        </motion.div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-12 gap-2">
          {Array.from(
            { length: products.length - (VISIBLE_COUNT - 1) },
            (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-gray-800 w-8" : "bg-gray-300"
                }`}
              />
            )
          )}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-32 h-32 border border-gray-200 rotate-45 -translate-y-1/2 translate-x-1/2 opacity-30" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border border-gray-200 -rotate-12 -translate-x-1/2 translate-y-1/2 opacity-20" />
    </section>
  );
}
