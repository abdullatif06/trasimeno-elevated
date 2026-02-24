import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type MenuItem = { name: string; description: string; price: string };

const menuData: Record<string, MenuItem[]> = {
  "Hot Drinks": [
    { name: "Espresso", description: "Rich and bold single shot", price: "2.00 JOD" },
    { name: "Double Espresso", description: "Intense double shot", price: "2.50 JOD" },
    { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "3.00 JOD" },
    { name: "Caffè Latte", description: "Smooth espresso with steamed milk", price: "3.25 JOD" },
    { name: "Flat White", description: "Double shot with velvety microfoam", price: "3.25 JOD" },
    { name: "Hot Chocolate", description: "Rich chocolate with steamed milk", price: "3.00 JOD" },
    { name: "Turkish Coffee", description: "Traditional fine-ground coffee", price: "2.00 JOD" },
    { name: "Chai Latte", description: "Spiced tea with steamed milk", price: "3.00 JOD" },
    { name: "Americano", description: "Espresso with hot water", price: "2.50 JOD" },
  ],
  "Iced Drinks": [
    { name: "Iced Americano", description: "Chilled espresso over ice", price: "3.00 JOD" },
    { name: "Iced Latte", description: "Cold milk with espresso over ice", price: "3.50 JOD" },
    { name: "Iced Mocha", description: "Chocolate, espresso, and cold milk", price: "3.75 JOD" },
    { name: "Cold Brew", description: "Slow-steeped for smooth flavor", price: "3.50 JOD" },
    { name: "Iced Matcha Latte", description: "Japanese matcha over ice", price: "4.00 JOD" },
    { name: "Frappe", description: "Blended iced coffee drink", price: "4.00 JOD" },
    { name: "Fresh Lemonade", description: "House-made with fresh lemons", price: "3.00 JOD" },
    { name: "Iced Chai", description: "Spiced chai tea over ice", price: "3.50 JOD" },
    { name: "Mango Smoothie", description: "Fresh mango blended smooth", price: "4.00 JOD" },
  ],
  Food: [
    { name: "Club Sandwich", description: "Chicken, lettuce, tomato, mayo", price: "5.50 JOD" },
    { name: "Chicken Wrap", description: "Grilled chicken with fresh veggies", price: "4.50 JOD" },
    { name: "Beef Burger", description: "Juicy beef patty with toppings", price: "6.00 JOD" },
    { name: "Caesar Salad", description: "Romaine, parmesan, croutons", price: "4.50 JOD" },
    { name: "Eggs Benedict", description: "Poached eggs with hollandaise", price: "5.00 JOD" },
    { name: "Pancakes", description: "Fluffy stack with maple syrup", price: "4.00 JOD" },
    { name: "Avocado Toast", description: "Sourdough with avocado spread", price: "4.50 JOD" },
    { name: "French Fries", description: "Crispy golden fries", price: "2.50 JOD" },
    { name: "Manakeesh", description: "Traditional flatbread with za'atar", price: "2.00 JOD" },
  ],
  Desserts: [
    { name: "Cheesecake", description: "Creamy New York style", price: "4.00 JOD" },
    { name: "Chocolate Brownie", description: "Warm with chocolate sauce", price: "3.50 JOD" },
    { name: "Tiramisu", description: "Classic Italian coffee dessert", price: "4.00 JOD" },
    { name: "Croissant", description: "Freshly baked butter croissant", price: "2.00 JOD" },
    { name: "Chocolate Croissant", description: "Filled with rich chocolate", price: "2.50 JOD" },
    { name: "Carrot Cake", description: "Moist with cream cheese frosting", price: "3.50 JOD" },
    { name: "Cookie", description: "Freshly baked chocolate chip", price: "1.50 JOD" },
    { name: "Muffin", description: "Blueberry or chocolate chip", price: "2.00 JOD" },
    { name: "Waffle", description: "Belgian waffle with toppings", price: "4.50 JOD" },
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
            href="https://linktr.ee/trasimenocoffee"
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
