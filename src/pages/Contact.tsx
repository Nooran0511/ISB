import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/923124891113?text=${text}`, "_blank");
  };

  return (
    <main className="pt-20">
      {/* ── Header ── */}
      <section className="py-12 section-gradient relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-primary/10 top-[-60px] right-[-80px] animate-orb-drift" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 {...fadeUp()} className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Book Your <span className="text-gradient">Ride</span>
          </motion.h1>
          <motion.p {...fadeUp(0.15)} className="text-muted-foreground mt-3">
            Get in touch and we'll have you on the road in no time
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* ── Form ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card border border-border rounded-lg p-8 space-y-5 card-shadow"
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Send us a Message</h2>
            {[
              { key: "name", label: "Full Name", type: "text" },
              { key: "email", label: "Email Address", type: "email" },
              { key: "phone", label: "Phone Number", type: "tel" },
            ].map((field, i) => (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              >
                <label className="block text-sm text-muted-foreground mb-1.5">{field.label} *</label>
                <input
                  type={field.type}
                  required
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  onFocus={() => setFocused(field.key)}
                  onBlur={() => setFocused(null)}
                  className={`w-full bg-secondary border rounded-md px-4 py-2.5 text-foreground text-sm outline-none transition-all duration-200 ${
                    focused === field.key
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-border/80"
                  }`}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.39, duration: 0.4 }}
            >
              <label className="block text-sm text-muted-foreground mb-1.5">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`w-full bg-secondary border rounded-md px-4 py-2.5 text-foreground text-sm outline-none transition-all duration-200 resize-none ${
                  focused === "message"
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border hover:border-border/80"
                }`}
              />
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 24px hsl(2 100% 44% / 0.35)" }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:bg-primary-glow transition-colors"
            >
              Send via WhatsApp
            </motion.button>
          </motion.form>

          {/* ── Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="card-shimmer border-glow bg-card border border-border rounded-lg p-8 space-y-5 card-shadow">
              <h2 className="text-2xl font-heading font-bold text-foreground">Contact Information</h2>
              <div className="space-y-4 text-sm">
                {[
                  { href: "tel:+923039249367", icon: Phone, text: "+92 303 9249367" },
                  { href: "tel:+923219461207", icon: Phone, text: "+92 321 9461207" },
                  { href: "tel:+923009461207", icon: Phone, text: "+92 300 9461207" },
                  { href: "tel:+923227773337", icon: Phone, text: "+92 322 777 3337" },
                  { href: "tel:+924235140699", icon: Phone, text: "+92 423 514 0699" },
                  { href: "mailto:info@faizcarrental.com", icon: Mail, text: "info@faizcarrental.com" },
                ].map(({ href, icon: Icon, text }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    whileHover={{ x: 4, color: "hsl(var(--primary))" }}
                    className="flex items-center gap-3 text-muted-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    {text}
                  </motion.a>
                ))}
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" /> Lahore, Pakistan
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" /> Mon–Sun: 24/7 Available
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                {[
                  { href: "https://www.facebook.com/faizcarrental1", icon: Facebook },
                  { href: "https://www.instagram.com/faiz_rentacar/", icon: Instagram },
                  //{ href: "https://youtube.com/channel/UCU_TywujCjVx2gtF_eY3o2w", icon: Youtube },
                ].map(({ href, icon: Icon }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="rounded-lg overflow-hidden border border-border"
            >
              <iframe
                title="Faiz Car Rental Location"
                src="https://share.google/jB2eqx9UFXnJtwepR"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
