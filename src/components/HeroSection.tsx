import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gray-50">
      {/* Animated wireframe background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated dashed lines */}
          <motion.path
            d="M 0 200 Q 300 100 600 200 T 1200 200"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeDasharray="10,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M 200 0 Q 400 300 600 400 T 1000 600"
            fill="none"
            stroke="#6b7280"
            strokeWidth="1.5"
            strokeDasharray="8,4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Main content - asymmetric layout */}
      <div className="relative z-10 pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6 min-h-[80vh] items-center">
            
            {/* Left column - offset */}
            <div className="col-span-7 col-start-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-8"
              >
                <div className="relative">
                  <h1 className="text-6xl leading-tight tracking-tight">
                    <span className="block">Artisanal</span>
                    <span className="block text-gray-500">Confections</span>
                    <motion.span 
                      className="block text-gray-800"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      Reimagined
                    </motion.span>
                  </h1>
                  
                  {/* Wireframe accent */}
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-transparent via-gray-400 to-transparent opacity-30" />
                </div>

                <motion.p 
                  className="text-lg text-gray-600 max-w-md leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Discover our curated collection of premium treats that blur the line between dessert and art.
                </motion.p>

                <motion.div 
                  className="flex items-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <button className="group relative px-8 py-3 border-2 border-gray-800 bg-gray-800 text-white hover:bg-transparent hover:text-gray-800 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Collection
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </button>

                  <button className="group flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors">
                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-800 transition-colors">
                      <Play className="w-4 h-4 ml-1" />
                    </div>
                    Watch Story
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right column - modular blocks */}
            <div className="col-span-4 space-y-4">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Featured product wireframe */}
                <div className="bg-white border-2 border-dashed border-gray-300 p-6 aspect-square">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 mx-auto border-2 border-gray-400 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-400 rounded-full" />
                      </div>
                      <p className="text-sm text-gray-500">Featured Product</p>
                    </div>
                  </div>
                </div>
                
                {/* Stats overlay */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gray-800 text-white p-4 text-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                >
                  <div>2.5K+ Reviews</div>
                  <div className="text-gray-400">★★★★★</div>
                </motion.div>
              </motion.div>

              {/* Secondary info blocks */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-gray-800 text-white p-4 aspect-square flex flex-col justify-between"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  <div className="text-2xl">47</div>
                  <div className="text-xs text-gray-400">Unique Flavors</div>
                </motion.div>
                
                <motion.div
                  className="border border-gray-300 p-4 aspect-square flex flex-col justify-between"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  <div className="text-2xl text-gray-800">24h</div>
                  <div className="text-xs text-gray-500">Fresh Daily</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-px h-16 bg-gray-400 mx-auto mb-2"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <p className="text-xs text-gray-500 text-center tracking-wider">SCROLL</p>
      </motion.div>
    </section>
  );
}