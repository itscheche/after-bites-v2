import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { 
    name: 'Artisan Chocolates', 
    count: '24 Items', 
    description: 'Hand-crafted with premium cocoa',
    size: 'large',
    position: 'col-span-2 row-span-2'
  },
  { 
    name: 'Seasonal Treats', 
    count: '12 Items', 
    description: 'Limited time offerings',
    size: 'medium',
    position: 'col-span-1 row-span-1'
  },
  { 
    name: 'Gift Sets', 
    count: '8 Items', 
    description: 'Curated collections',
    size: 'small',
    position: 'col-span-1 row-span-1'
  },
  { 
    name: 'Sugar-Free', 
    count: '16 Items', 
    description: 'Guilt-free indulgence',
    size: 'medium',
    position: 'col-span-1 row-span-2'
  },
  { 
    name: 'Exotic Flavors', 
    count: '20 Items', 
    description: 'Unique taste experiences',
    size: 'large',
    position: 'col-span-2 row-span-1'
  },
];

export function CategoryGrid() {
  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="categories-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="0.5" fill="#d1d5db"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#categories-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gray-400" />
            <span className="text-sm text-gray-500 tracking-wider">BROWSE BY CATEGORY</span>
            <div className="w-16 h-px bg-gray-400" />
          </div>
          <h2 className="text-4xl text-gray-800 mb-4">Discover Your Perfect Match</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Each category represents a carefully curated selection of our finest confections, designed to satisfy every craving and occasion.</p>
        </motion.div>

        {/* Staggered grid layout */}
        <div className="grid grid-cols-4 grid-rows-3 gap-6 h-[600px]">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className={`group cursor-pointer relative overflow-hidden ${category.position}`}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15,
                type: "spring",
                damping: 15,
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02, 
                rotate: 1,
                transition: { duration: 0.3 }
              }}
            >
              <div className="w-full h-full bg-white border-2 border-gray-200 group-hover:border-gray-400 transition-all duration-300 relative">
                {/* Wireframe overlay */}
                <div className="absolute inset-0 border-2 border-dashed border-gray-300 opacity-0 group-hover:opacity-60 transition-opacity duration-300 m-4" />
                
                {/* Content */}
                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-2">
                        <h3 className="text-xl group-hover:text-gray-600 transition-colors">{category.name}</h3>
                        <p className="text-sm text-gray-500">{category.count}</p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-800 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                  </div>

                  {/* Visual representation */}
                  <div className="mt-6">
                    <div className="flex items-end gap-2 mb-4">
                      {Array.from({ length: category.size === 'large' ? 5 : category.size === 'medium' ? 3 : 2 }, (_, i) => (
                        <motion.div
                          key={i}
                          className="bg-gray-300 group-hover:bg-gray-600 transition-colors"
                          style={{ 
                            width: '8px', 
                            height: `${20 + (i * 10)}px` 
                          }}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          transition={{ delay: 0.5 + (index * 0.1) + (i * 0.05) }}
                        />
                      ))}
                    </div>
                    
                    <div className="w-full h-px bg-gray-200 group-hover:bg-gray-400 transition-colors" />
                  </div>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-100 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="group relative px-8 py-3 border border-gray-400 hover:border-gray-800 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
              View All Categories
              <ArrowUpRight className="w-4 h-4 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </span>
            <div className="absolute inset-0 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}