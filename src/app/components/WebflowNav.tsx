import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function WebflowNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'publications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Publications', id: 'publications' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Main Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative text-white text-2xl lg:text-3xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                    HM
                  </span>
                </div>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className={`relative z-10 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-white/60 group-hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 rounded-full transition-all duration-500 blur-sm" />
                </motion.button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="https://github.com/Hirak26"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-colors overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">GitHub</span>
                <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-white/40 transition-all duration-300" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hirak-modi-6a08181b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2.5 text-sm font-medium text-white overflow-hidden rounded-full group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">LinkedIn</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 group"
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-white/5 rounded-full border border-white/10 group-hover:border-white/20 transition-colors" />
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="relative w-5 h-0.5 bg-white transition-all"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="relative w-5 h-0.5 bg-white transition-all"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="relative w-5 h-0.5 bg-white transition-all"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Side Navigation Indicator (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-40"
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative"
            >
              <div className="relative">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 w-10 h-1 shadow-lg shadow-blue-500/50'
                      : 'bg-white/30 group-hover:bg-white/60 group-hover:scale-125'
                  }`}
                />
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 blur-md opacity-50 animate-pulse" />
                )}
              </div>
              <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-medium text-white whitespace-nowrap bg-black/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 pointer-events-none">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="lg:hidden fixed inset-x-6 top-28 bottom-6 z-40 flex flex-col bg-gradient-to-br from-black via-purple-950/20 to-black rounded-3xl border border-white/10 overflow-hidden"
            >
              {/* Gradient Orbs */}
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl" />

              <nav className="relative flex flex-col items-center justify-center gap-6 flex-1 px-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className="relative group"
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 rounded-2xl blur-xl transition-all duration-500" />
                    <span
                      className={`relative text-3xl font-bold transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent'
                          : 'text-white/40 group-hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                ))}

                {/* Mobile Social Links */}
                <div className="flex gap-4 mt-8">
                  <motion.a
                    href="https://github.com/Hirak26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 text-sm font-medium text-white/80 border border-white/20 rounded-full hover:text-white hover:border-white/40 transition-all"
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/hirak-modi-6a08181b4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-8 py-3 text-sm font-medium text-white rounded-full overflow-hidden group"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">LinkedIn</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600" />
                  </motion.a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}