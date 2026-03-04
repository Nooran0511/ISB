import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, TwitterIcon } from "lucide-react";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <h3 className="text-2xl font-heading font-bold text-gradient mb-4">Faiz Car Rental</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              No#1 Car Rental Company in Lahore, Pakistan. Providing premium, reliable vehicles since 1995.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "Our Cars", path: "/cars" },
                { name: "About Us", path: "/about" },
                { name: "Book Your Ride", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {["Airport Transfers", "Corporate Rentals", "Wedding Cars", "Monthly Packages", "City Tours"].map((s) => (
                <span key={s} className="hover:text-foreground transition-colors cursor-default">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+923009461207" className="flex items-center gap-2 hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" /> +92 300 9461207
              </a>
              <a href="tel:+923227773337" className="flex items-center gap-2 hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" /> +92 322 777 3337
              </a>
              {/* <a href="tel:+924235140699" className="flex items-center gap-2 hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" /> +92 423 514 0699
              </a> */}
              <a href="tel:+923124891113" className="flex items-center gap-2 hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" /> +92 312 489 1113
              </a>
              <a href="mailto:info@faizcarrental.com" className="flex items-center gap-2 hover:text-primary transition-colors group">
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" /> info@faizcarrental.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Lahore, Pakistan
              </span>
              <div className="flex gap-3 mt-2">
                {[
                  { href: "https://www.facebook.com/faizcarrental1", icon: Facebook },
                   { href: "https://x.com/faizcarrental1", icon: TwitterIcon },
                  { href: "https://www.instagram.com/faiz_rentacar/", icon: Instagram },
                  //{ href: "https://youtube.com/channel/UCU_TywujCjVx2gtF_eY3o2w", icon: Youtube },
                ].map(({ href, icon: Icon }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <span>© {new Date().getFullYear()} Faiz Car Rental. All rights reserved.</span>
          <span>Powered by SixSenses</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
