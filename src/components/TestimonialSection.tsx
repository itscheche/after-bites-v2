import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "After Bites has completely transformed my understanding of what confections can be. Each piece is a work of art.",
    author: "Sarah Chen",
    role: "Food Critic",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    content: "The attention to detail is extraordinary. You can taste the passion in every single bite.",
    author: "Marcus Rodriguez",
    role: "Chef",
    rating: 5,
    featured: false
  },
  {
    id: 3,
    content: "I've never experienced flavors this complex and refined. It's like discovering a new cuisine.",
    author: "Elena Volkov",
    role: "Culinary Writer",
    rating: 5,
    featured: false
  }
];

export function TestimonialSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Fluid background shape */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M0,400 C300,200 600,600 900,400 C1050,300 1150,500 1200,400 L1200,800 L0,800 Z"
            fill="rgba(249, 250, 251, 0.5)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <Quote className="w-6 h-6 text-gray-400" />
            <span className="text-sm text-gray-500 tracking-wider">WHAT PEOPLE SAY</span>
            <Quote className="w-6 h-6 text-gray-400 rotate-180" />
          </div>
          <h2 className="text-4xl text-gray-800">Voices of Delight</h2>
        </motion.div>

        {/* Testimonials - fluid layout */}
        <div className="relative">
          {/* Featured testimonial - large fluid shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-12"
          >
            <div className="relative bg-gray-50 p-12 max-w-4xl mx-auto">
              {/* Organic shape border */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                <motion.path
                  d="M20,40 C60,10 120,30 180,25 C240,20 280,40 360,35 C380,34 390,50 385,80 C380,120 360,140 320,155 C280,170 240,165 180,170 C120,175 80,160 40,145 C15,135 5,90 20,40 Z"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, delay: 0.5 }}
                />
              </svg>

              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mx-1" />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-gray-800 leading-relaxed mb-8 max-w-3xl mx-auto">
                  "{testimonials[0].content}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-600 rounded-full" />
                  </div>
                  <div className="text-left">
                    <div className="text-gray-800">{testimonials[0].author}</div>
                    <div className="text-sm text-gray-500">{testimonials[0].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Supporting testimonials - asymmetric fluid shapes */}
          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="relative bg-white border border-gray-200 p-8">
                  {/* Irregular border effect */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                      <motion.path
                        d={index === 0 
                          ? "M10,30 C50,10 100,20 150,15 C200,10 250,25 280,30 C290,35 285,60 280,90 C275,120 250,140 200,150 C150,160 100,155 50,145 C20,140 5,80 10,30 Z"
                          : "M20,20 C40,35 80,25 120,30 C160,35 200,25 240,30 C270,35 285,55 280,85 C275,115 250,135 210,145 C170,155 130,150 90,140 C50,130 15,85 20,20 Z"
                        }
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.8 + index * 0.3 }}
                      />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-600 rounded-full" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-800">{testimonial.author}</div>
                        <div className="text-xs text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>2,500+ Happy Customers</span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Featured in 15+ Publications</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}