import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Clock, Star, ChevronRight, Car, ThumbsUp } from "lucide-react";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import CarCard from "@/components/CarCard";
import StatCounter from "@/components/StatCounter";
import { cars } from "@/data/cars";
import type { Variants } from "framer-motion";


const featuredCars = cars.filter((c) => c.featured).slice(0, 6);

const testimonials = [
  { name: "Ahmed Khan", text: "Best car rental service in Islamabad. Very professional and punctual!", rating: 5 },
  { name: "Sarah Ali", text: "Rented a Fortuner for a family trip to the north. Amazing experience!", rating: 5 },
  { name: "Usman Malik", text: "Affordable rates and well-maintained cars. Highly recommended!", rating: 5 },
];

/* ── Reusable stagger container ── */
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const fadeUpDelayed = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] } },
});

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax background */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={heroBg} alt="Luxury car in Islamabad" className="w-full h-full object-cover scale-110" />
          <div className="hero-overlay absolute inset-0" />
        </motion.div>

        {/* Floating ambient orbs */}
        <div
          className="orb w-[500px] h-[500px] bg-primary/20 top-[-80px] right-[-100px] animate-orb-drift"
          style={{ animationDuration: "14s" }}
        />
        <div
          className="orb w-[300px] h-[300px] bg-primary/10 bottom-[10%] left-[5%] animate-orb-drift"
          style={{ animationDuration: "18s", animationDelay: "-6s" }}
        />

        <motion.div
          className="container relative z-10 px-4 pt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            className="max-w-2xl"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-block animate-badge-pop bg-primary/20 border border-primary/40 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
                🔥 Limited Cars Available Today
              </span>
            </motion.div>

            {/* H1 — word-by-word reveal */}
            <motion.h1
              variants={staggerContainer}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight"
            >
              {["Premium", "Car", "Rentals", "in"].map((word) => (
                <motion.span key={word} variants={fadeUp} className="inline-block mr-[0.25em]">
                  {word}
                </motion.span>
              ))}
              <motion.span
                variants={fadeUp}
                className="inline-block text-gradient"
              >
                Islamabad
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUpDelayed(0.35)}
              initial="hidden"
              animate="show"
              className="text-lg md:text-xl text-muted-foreground mt-4 max-w-lg"
            >
              Luxury. Comfort. Reliability. — Experience the finest fleet in the capital.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUpDelayed(0.5)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link
                to="/contact"
                className="btn-lift bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold hover:bg-primary-glow transition-colors glow-red"
              >
                Book Now
              </Link>
              <Link
                to="/cars"
                className="btn-lift border border-border text-foreground px-8 py-3.5 rounded-md font-semibold hover:bg-secondary transition-colors flex items-center gap-2"
              >
                View Fleet <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/923124891113"
                target="_blank"
                rel="noreferrer"
                className="btn-lift border border-[hsl(142,70%,45%)] text-[hsl(142,70%,45%)] px-8 py-3.5 rounded-md font-semibold hover:bg-[hsl(142,70%,45%)]/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <StatCounter target={50} suffix="+" label="Cars Available" />
            <StatCounter target={2000} suffix="+" label="Happy Clients" />
            <StatCounter target={9} suffix="+" label="Years of Service" />
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12"
          >
            Why Choose <span className="text-gradient">Us</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Car, title: "Premium Fleet", desc: "50+ well-maintained vehicles from economy to luxury" },
              { icon: Shield, title: "Fully Insured", desc: "All cars come with comprehensive insurance coverage" },
              { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance whenever you need it" },
              { icon: ThumbsUp, title: "Best Rates", desc: "Competitive daily, weekly and monthly packages" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="card-shimmer border-glow bg-card border border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors duration-300 cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                  className="inline-block mb-4"
                >
                  <item.icon className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Cars ── */}
      <section className="py-20 section-gradient relative overflow-hidden">
        {/* Subtle background orb */}
        <div className="orb w-[600px] h-[600px] bg-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orb-drift" style={{ animationDuration: "20s" }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12"
          >
            Featured <span className="text-gradient">Cars</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car, i) => (
              <CarCard key={car.id} car={car} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-10"
          >
            <Link
              to="/cars"
              className="btn-lift inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary-glow transition-colors"
            >
              View More <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-shimmer border-glow bg-card border border-border rounded-lg p-6 relative"
              >
                {/* Decorative quote mark */}
                <span className="absolute top-4 right-5 text-5xl text-primary/10 font-serif leading-none select-none">"</span>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + j * 0.06, duration: 0.3 }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm italic mb-4">"{t.text}"</p>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
