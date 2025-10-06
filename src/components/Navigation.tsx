import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
      <div className="relative">
        {/* Main nav bar - minimal */}
        <motion.div 
          className="flex justify-between items-center p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="text-white mix-blend-difference cursor-pointer tracking-wider"
              whileHover={{ letterSpacing: '0.2em' }}
              transition={{ duration: 0.3 }}
            >
              AFTER BITES
            </motion.div>
            <div className="absolute -bottom-1 left-0 w-0 h-px bg-white mix-blend-difference transition-all duration-300 group-hover:w-full" />
          </div>

          <div className="flex items-center gap-6">
            <Search className="w-5 h-5 text-white mix-blend-difference cursor-pointer hover:scale-110 transition-transform" />
            <ShoppingBag className="w-5 h-5 text-white mix-blend-difference cursor-pointer hover:scale-110 transition-transform" />
            
            <motion.button
              className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-6 h-px bg-white mix-blend-difference mb-1"
                animate={{ 
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 4 : 0 
                }}
              />
              <motion.div
                className="w-6 h-px bg-white mix-blend-difference mb-1"
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              <motion.div
                className="w-6 h-px bg-white mix-blend-difference"
                animate={{ 
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -4 : 0 
                }}
              />
            </motion.button>
          </div>
        </motion.div>

        {/* Expanded menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-8 grid grid-cols-3 gap-8">
                <div>
                  <h3 className="mb-4 text-gray-400 tracking-wide">EXPLORE</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="hover:text-gray-600 transition-colors">New Arrivals</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition-colors">Best Sellers</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition-colors">Categories</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition-colors">Seasonal</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-gray-400 tracking-wide">ABOUT</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="hover:text-gray-600 transition-colors">Our Story</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition-colors">Sustainability</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition-colors">Reviews</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-gray-400 tracking-wide">SUPPORT</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="hover:text-gray-600 transition-colors">Contact</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition-colors">FAQ</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition-colors">Shipping</a></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}