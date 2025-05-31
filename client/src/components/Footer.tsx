import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Infomizer</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform into an industry-ready coder in just 30 days with expert mentorship and hands-on projects.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Courses
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/resources" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Resources
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                Ready to start your coding journey?
              </p>
              <p className="text-gray-400 text-sm">
                Email: <span className="text-primary">info@infomizer.com</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm">
            © 2025 Infomizer. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;