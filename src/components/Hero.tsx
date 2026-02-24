import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const handleScroll = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - Real Trasimeno Coffee storefront */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/storefront.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-coffee-dark/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase text-white/70 mb-6 font-sans"
        >
          Amman, Jordan — Open 24 Hours
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6"
        >
          Great Food
          <br />
          <span className="italic font-normal">&</span> Strong Coffee
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto font-light"
        >
          Kickstart your morning with us! Quality coffee, fresh food,
          and a warm atmosphere — drive thru & walk-up window available.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-accent text-accent-foreground font-medium text-sm tracking-wide rounded-none hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
          >
            EXPLORE OUR MENU
          </button>
          <a
            href="https://maps.app.goo.gl/EST7UCyUva35FCnn9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/30 text-white font-medium text-sm tracking-wide rounded-none hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            GET DIRECTIONS
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} className="animate-scroll-hint" />
      </motion.button>
    </section>
  );
};

export default Hero;
