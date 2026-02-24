import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarCard from "@/components/CarCard";
import { cars, categories, type CarCategory } from "@/data/cars";

type SortOption = "default" | "low-high" | "high-low";

const CarsPage = () => {
  const [category, setCategory] = useState<CarCategory | "All">("All");
  const [sort, setSort] = useState<SortOption>("default");

  const filtered = useMemo(() => {
    let list = category === "All" ? [...cars] : cars.filter((c) => c.category === category);
    if (sort === "low-high") list.sort((a, b) => (a.priceNum ?? Infinity) - (b.priceNum ?? Infinity));
    if (sort === "high-low") list.sort((a, b) => (b.priceNum ?? -1) - (a.priceNum ?? -1));
    return list;
  }, [category, sort]);

  return (
    <main className="pt-20 pb-16">
      <section className="py-12 section-gradient relative overflow-hidden">
        {/* Orb */}
        <div className="orb w-[400px] h-[400px] bg-primary/10 top-[-60px] right-[-80px] animate-orb-drift" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-heading font-bold text-foreground text-center"
          >
            Our <span className="text-gradient">Fleet</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-muted-foreground mt-3 max-w-xl mx-auto"
          >
            Choose from 35+ premium vehicles for any occasion
          </motion.p>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
          >
            {["All", ...categories].map((cat, i) => (
              <motion.button
                key={cat}
                onClick={() => setCategory(cat as CarCategory | "All")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.04 }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  category === cat
                    ? "bg-primary text-primary-foreground shadow-[0_4px_14px_hsl(2_100%_44%/0.35)]"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-4"
          >
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="bg-secondary text-foreground border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            >
              <option value="default">Sort: Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={category + sort}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((car, i) => (
                <CarCard key={car.id} car={car} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground py-12"
            >
              No cars found in this category.
            </motion.p>
          )}
        </div>
      </section>
    </main>
  );
};

export default CarsPage;
