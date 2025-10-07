import { motion } from "motion/react";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const socialPlatforms = [
  { icon: Instagram, href: "#", color: "hover:text-pink-500" },
  { icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { icon: Youtube, href: "#", color: "hover:text-red-500" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 relative">
      {/* Sticky social media bar */}
      <motion.div
        className="fixed bottom-0 right-6 z-40 bg-secondary text-white p-3 rounded-t-lg shadow-lg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex flex-col gap-3">
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.href}
              className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${platform.color}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <platform.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content - modular layout */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          {/* Brand section - asymmetric positioning */}
          <motion.div
            className="col-span-5 col-start-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl tracking-wide">AFTER BITES</h3>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Crafting extraordinary confections that challenge expectations
                and create lasting memories. Each piece tells a story of
                artisanship and innovation.
              </p>

              {/* Contact info with architectural lines */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>Consolacion Cebu, Philippines</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Phone className="w-4 h-4" />
                  <span>(+639) 16 653 8803</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Mail className="w-4 h-4" />
                  <span>afterbitesph@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation links - staggered layout */}
          <motion.div
            className="col-span-2 col-start-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-6 text-gray-400 tracking-wide text-sm">
              EXPLORE
            </h4>
            <ul className="space-y-3">
              {["Collections", "Seasonal", "Gift Sets", "About Us"].map(
                (item, index) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm relative"
                      whileHover={{ x: 4 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-900 transition-all duration-300 hover:w-full" />
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            className="col-span-2 col-start-11"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="mb-6 text-gray-400 tracking-wide text-sm">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              {["Contact", "FAQ", "Shipping", "Returns"].map((item, index) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm relative"
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-900 transition-all duration-300 hover:w-full" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter signup - wireframe style */}
        <motion.div
          className="border-2 border-dashed border-gray-300 p-8 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center space-y-4">
            <h4 className="text-lg">Join Our Artisan Circle</h4>
            <p className="text-gray-600 text-sm">
              Be the first to discover new collections and exclusive tastings
            </p>

            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 border border-gray-300 focus:border-gray-600 focus:outline-none text-sm"
              />
              <button className="px-6 py-2 bg-secondary text-white text-sm hover:bg-primary transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar with architectural elements */}
        <motion.div
          className="border-t border-gray-200 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <span>© 2025 After Bites. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-gray-700 transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-gray-700 transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-gray-700 transition-colors">
                  Cookies
                </a>
              </div>
            </div>

            {/* Blueprint-style corner decoration */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-gray-300" />
              <div className="w-2 h-2 border border-gray-300 rotate-45" />
              <div className="w-8 h-px bg-gray-300" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Geometric footer decoration */}
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-gray-200 opacity-30" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-gray-200 opacity-20" />
    </footer>
  );
}
