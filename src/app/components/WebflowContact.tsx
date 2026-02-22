import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export function WebflowContact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white py-32 overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          style={{ y }}
          className="mb-24 max-w-7xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 tracking-[0.3em] uppercase mb-6"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight"
          >
            Let's
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Email */}
            <div className="group">
              <p className="text-sm text-gray-500 mb-3 tracking-wider">EMAIL</p>
              <a
                href="mailto:hirak.modi2025@gmail.com"
                className="text-2xl md:text-3xl font-semibold hover:text-blue-400 transition-colors flex items-center gap-3 group"
              >
                hirak.modi2025@gmail.com
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="text-sm text-gray-500 mb-3 tracking-wider">LOCATION</p>
              <p className="text-2xl md:text-3xl font-semibold">Chicago Area, Illinois</p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 mb-6 tracking-wider">SOCIAL</p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/Hirak26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Github size={24} />
                    <span className="text-xl font-semibold">GitHub</span>
                  </div>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hirak-modi-6a08181b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Linkedin size={24} />
                    <span className="text-xl font-semibold">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Twitter size={24} />
                    <span className="text-xl font-semibold">Twitter</span>
                  </div>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <p className="text-sm text-gray-400 tracking-wider">AVAILABILITY</p>
              </div>
              <p className="text-xl font-semibold">
                Open to full-time opportunities in Data Science & ML
              </p>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="group">
                <label htmlFor="name" className="block text-sm text-gray-500 mb-3 tracking-wider">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/20 group-hover:border-white/40 focus:border-white py-4 text-xl outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label htmlFor="email" className="block text-sm text-gray-500 mb-3 tracking-wider">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/20 group-hover:border-white/40 focus:border-white py-4 text-xl outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="block text-sm text-gray-500 mb-3 tracking-wider">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b-2 border-white/20 group-hover:border-white/40 focus:border-white py-4 text-xl outline-none resize-none transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full py-6 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-12 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 mb-2">© 2026 Hirak Modi. All rights reserved.</p>
          <p className="text-sm text-gray-600">
            Crafted with precision using React, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}