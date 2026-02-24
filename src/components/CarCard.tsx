import { motion } from "framer-motion";
import { Users, Cog, Wind } from "lucide-react";
import type { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
  index?: number;
}

const CarCard = ({ car, index = 0 }: CarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
      className="card-shimmer border-glow group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 card-shadow"
      style={{ willChange: "transform" }}
    >
      {/* Image area */}
      <div className="relative h-48 bg-secondary flex items-center justify-center overflow-hidden p-4">
        <motion.img
          src={car.image}
          alt={car.name}
          className="max-h-full max-w-full object-contain"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          loading="lazy"
        />

        {/* Category badge */}
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 + 0.2, duration: 0.3 }}
          className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-semibold px-2 py-1 rounded"
        >
          {car.category}
        </motion.span>

        {/* Hover overlay glow */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Card body */}
      <div className="p-4">
        <h3 className="font-heading font-semibold text-foreground text-lg">{car.name}</h3>
        <motion.p
          className="text-primary font-bold text-xl mt-1"
          whileHover={{ scale: 1.03, originX: 0 }}
          transition={{ duration: 0.15 }}
        >
          {car.priceNum ? `PKR ${car.price}` : car.price}
        </motion.p>

        <div className="flex items-center gap-4 mt-3 text-muted-foreground text-xs">
          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{car.seats} Seats</span>
          <span className="flex items-center gap-1"><Cog className="w-3.5 h-3.5" />{car.transmission}</span>
          {car.ac && <span className="flex items-center gap-1"><Wind className="w-3.5 h-3.5" />AC</span>}
        </div>

        <motion.a
          href={`https://wa.me/923124891113?text=Hi, I want to book ${car.name}`}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.02, boxShadow: "0 6px 20px hsl(2 100% 44% / 0.3)" }}
          whileTap={{ scale: 0.97 }}
          className="mt-4 block text-center bg-primary text-primary-foreground py-2.5 rounded-md text-sm font-semibold hover:bg-primary-glow transition-colors"
        >
          Book Now
        </motion.a>
      </div>
    </motion.div>
  );
};

export default CarCard;
