import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Cars", path: "/cars" },
  { name: "About Us", path: "/about" },
  { name: "Book Your Ride", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/92 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_hsl(0_0%_0%/0.4)]"
          : "bg-background/60 backdrop-blur-md border-b border-border/40"
      }`}
    >
      <div className="container mx-auto flex items-center h-20 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 mr-8">
          <motion.img
            src={logo}
            alt="Faiz Car Rental"
            className="h-14 md:h-16 object-contain"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: "easeOut" }}
              >
                <Link
                  to={link.path}
                  className={`nav-underline text-sm font-body font-medium transition-colors pb-0.5 ${
                    isActive ? "text-primary active" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="block absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <motion.a
          href="tel:+923009461207"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          whileHover={{ scale: 1.04, boxShadow: "0 6px 20px hsl(2 100% 44% / 0.3)" }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary-glow transition-colors flex-shrink-0"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </motion.a>

        {/* Mobile right side */}
        <div className="flex items-center gap-4 ml-auto md:hidden">
          <a href="tel:+923009461207" className="text-primary">
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: "easeOut" }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
