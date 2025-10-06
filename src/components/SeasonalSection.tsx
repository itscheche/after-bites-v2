import { motion } from 'motion/react';
import { Calendar, Sparkles, Clock, ArrowRight } from 'lucide-react';

const seasonalItems = [
  {
    id: 1,
    name: 'Winter Solstice Collection',
    description: 'Dark chocolate infused with warming spices and crystallized ginger',
    timeLeft: '12 days left',
    status: 'limited',
    availability: '68% remaining'
  },
  {
    id: 2,
    name: 'New Year Midnight',
    description: 'Champagne truffles with edible gold leaf',
    timeLeft: '3 days left',
    status: 'almost-gone',
    availability: '12% remaining'
  },
  {
    id: 3,
    name: 'Valentine\'s Premiere',
    description: 'Rose-infused collection launching soon',
    timeLeft: 'Coming Feb 1st',
    status: 'upcoming',
    availability: 'Pre-order now'
  }
];

export function SeasonalSection() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated constellation background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          {/* Stars */}
          {Array.from({ length: 50 }, (_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1200}
              cy={Math.random() * 800}
              r="1"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
          
          {/* Connecting lines - constellation effect */}
          <motion.path
            d="M200,200 L400,150 L600,250 M600,250 L800,180 M400,150 L500,350"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header with seasonal metaphor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
            <span className="text-sm text-gray-400 tracking-wider">SEASONAL & LIMITED EDITIONS</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </div>
          
          <h2 className="text-4xl mb-4">Celestial Moments</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Like rare astronomical events, our seasonal collections appear for brief, magical moments. 
            Each edition captures the essence of its time, never to be repeated exactly the same way again.
          </p>
        </motion.div>

        {/* Seasonal items as orbital objects */}
        <div className="relative">
          {/* Central "sun" - brand core */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-gradient-radial from-yellow-400/20 via-orange-500/10 to-transparent border border-yellow-400/30 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-yellow-400" />
            </div>
          </motion.div>

          {/* Orbiting seasonal items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group cursor-pointer"
              >
                <div className="bg-gray-800 border border-gray-700 group-hover:border-gray-500 transition-all duration-300 p-8 relative overflow-hidden">
                  
                  {/* Status indicator orbital ring */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      className={`w-12 h-12 rounded-full border-2 ${
                        item.status === 'limited' ? 'border-yellow-400' :
                        item.status === 'almost-gone' ? 'border-red-400' :
                        'border-blue-400'
                      } flex items-center justify-center`}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <div className={`w-6 h-6 rounded-full ${
                        item.status === 'limited' ? 'bg-yellow-400' :
                        item.status === 'almost-gone' ? 'bg-red-400' :
                        'bg-blue-400'
                      }`} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl mb-2 group-hover:text-gray-300 transition-colors">{item.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>

                    {/* Time indicator */}
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className={`${
                        item.status === 'almost-gone' ? 'text-red-400' :
                        item.status === 'limited' ? 'text-yellow-400' :
                        'text-blue-400'
                      }`}>
                        {item.timeLeft}
                      </span>
                    </div>

                    {/* Availability bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Availability</span>
                        <span>{item.availability}</span>
                      </div>
                      <div className="w-full h-1 bg-gray-700 rounded">
                        <motion.div
                          className={`h-full rounded ${
                            item.status === 'limited' ? 'bg-yellow-400' :
                            item.status === 'almost-gone' ? 'bg-red-400' :
                            'bg-blue-400'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ 
                            width: item.status === 'limited' ? '68%' :
                                   item.status === 'almost-gone' ? '12%' :
                                   '100%'
                          }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        />
                      </div>
                    </div>

                    {/* Action */}
                    <button className="group/btn flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mt-6">
                      <span>
                        {item.status === 'upcoming' ? 'Notify Me' : 'View Collection'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating elements around each card */}
                <motion.div
                  className="absolute -top-2 -left-2 w-4 h-4 border border-gray-600 rotate-45"
                  animate={{ 
                    rotate: [45, 225, 45],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-2 -right-2 w-3 h-3 bg-gray-600 rounded-full"
                  animate={{ 
                    y: [-5, 5, -5],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <button className="group relative px-8 py-3 border border-gray-600 hover:border-white transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2 group-hover:text-gray-900 transition-colors">
              Join the Constellation Club
              <Sparkles className="w-4 h-4 group-hover:animate-spin" />
            </span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
          <p className="text-gray-500 text-sm mt-3">Get early access to all seasonal releases and limited editions</p>
        </motion.div>
      </div>
    </section>
  );
}