import { motion } from "framer-motion";
import { Shield, Clock, Users, Award } from "lucide-react";
import StatCounter from "@/components/StatCounter";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const About = () => {
  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="py-20 section-gradient relative overflow-hidden">
        {/* Orbs */}
        <div className="orb w-[400px] h-[400px] bg-primary/10 top-[-60px] right-[-80px] animate-orb-drift" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 {...fadeUp(0)} className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            About <span className="text-gradient">ISB Rent a Car</span>
          </motion.h1>
          <motion.p {...fadeUp(0.15)} className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Established in 2015, ISB Rent a Car has grown to become the most trusted car rental service in Islamabad, Pakistan. We provide a wide range of well-maintained vehicles from economy to luxury class.
          </motion.p>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="card-shimmer border-glow bg-card border border-border rounded-lg p-8"
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide safe, reliable and comfortable transportation solutions at competitive rates, ensuring every journey is a memorable experience for our customers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="card-shimmer border-glow bg-card border border-border rounded-lg p-8"
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading car rental company in Pakistan, known for premium service, modern fleet, and customer satisfaction across all major cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Trust Signals ── */}
      <section className="py-20 section-gradient relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-primary/8 bottom-0 left-[-100px] animate-orb-drift" style={{ animationDuration: "16s", animationDelay: "-4s" }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 {...fadeUp()} className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Why People <span className="text-gradient">Trust Us</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Fully Insured", desc: "Every vehicle is covered with comprehensive insurance" },
              { icon: Clock, title: "24/7 Availability", desc: "We're always ready, day or night" },
              { icon: Users, title: "Professional Drivers", desc: "Trained, courteous and experienced" },
              { icon: Award, title: "30+ Years", desc: "Trusted by thousands of customers since 2015" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="card-shimmer border-glow bg-card border border-border rounded-lg p-6 text-center"
              >
                <motion.div
                  whileHover={{ rotate: [0, -12, 12, 0], transition: { duration: 0.4 } }}
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

      {/* ── Stats ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <StatCounter target={50} suffix="+" label="Cars Available" />
            <StatCounter target={2000} suffix="+" label="Happy Clients" />
            <StatCounter target={9} suffix="+" label="Years of Service" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
