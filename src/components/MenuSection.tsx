import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type MenuItem = { name: string; description: string; price: string };

const menuData: Record<string, MenuItem[]> = {
  "Hot Drinks": [
    { name: "Espresso", description: "Rich and bold single shot", price: "€2.50" },
    { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "€3.50" },
    { name: "Flat White", description: "Double shot with velvety microfoam", price: "€3.80" },
    { name: "Latte", description: "Smooth espresso with steamed milk", price: "€3.50" },
    { name: "Hot Chocolate", description: "Rich Belgian chocolate blend", price: "€3.80" },
    { name: "Chai Latte", description: "Spiced tea with steamed milk", price: "€3.80" },
  ],
  "Iced Drinks": [
    { name: "Iced Americano", description: "Chilled espresso over ice", price: "€3.50" },
    { name: "Iced Latte", description: "Cold milk with espresso", price: "€4.00" },
    { name: "Cold Brew", description: "Slow-steeped for 18 hours", price: "€4.00" },
    { name: "Iced Matcha", description: "Japanese matcha over ice", price: "€4.50" },
    { name: "Frappe", description: "Blended iced coffee drink", price: "€4.50" },
    { name: "Fresh Lemonade", description: "House-made with mint", price: "€3.50" },
  ],
  Food: [
    { name: "Avocado Toast", description: "Sourdough, poached egg, chilli flakes", price: "€8.50" },
    { name: "Açaí Bowl", description: "Topped with granola and fresh fruits", price: "€9.00" },
    { name: "Club Sandwich", description: "Chicken, bacon, lettuce, tomato", price: "€9.50" },
    { name: "Caesar Salad", description: "Romaine, parmesan, croutons", price: "€8.50" },
    { name: "Pancakes", description: "Fluffy stack with maple syrup", price: "€7.50" },
    { name: "Eggs Benedict", description: "Poached eggs with hollandaise", price: "€9.00" },
  ],
  Desserts: [
    { name: "Tiramisu", description: "Classic Italian coffee dessert", price: "€5.50" },
    { name: "Carrot Cake", description: "Moist cake with cream cheese frosting", price: "€5.00" },
    { name: "Chocolate Brownie", description: "Warm with vanilla ice cream", price: "€5.50" },
    { name: "Cheesecake", description: "New York style, berry compote", price: "€5.50" },
    { name: "Croissant", description: "Freshly baked butter croissant", price: "€3.00" },
    { name: "Affogato", description: "Vanilla gelato drowned in espresso", price: "€4.50" },
  ],
};

const categories = Object.keys(menuData);

const MenuSection = () => {
  const [active, setActive] = useState(categories[0]);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="menu" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.25em] uppercase text-accent font-medium mb-4"
          >
            What We Serve
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-foreground"
          >
            Our Menu
          </motion.h2>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-none border ${
                active === cat
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
          >
            {menuData[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group p-6 bg-background border border-border rounded-lg hover:shadow-md hover:border-accent/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-accent font-semibold text-sm ml-4 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Full menu link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://trasimenocoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-accent hover:text-accent/80 transition-colors border-b border-accent/30 hover:border-accent pb-0.5"
          >
            View Full Digital Menu →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
