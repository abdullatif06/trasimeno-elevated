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
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-coffee-dark/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-6 font-sans"
        >
          Est. 2020 — Trasimeno Coffee
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] mb-6"
        >
          Great Food
          <br />
          <span className="italic font-normal">&</span> Strong Coffee
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto font-light"
        >
          A warm and inviting space where quality meets comfort.
          Exceptional drinks, fresh food, and unforgettable moments.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          onClick={() =>
            document
              .querySelector("#menu")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-8 py-3 bg-accent text-accent-foreground font-medium text-sm tracking-wide rounded-none hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
        >
          EXPLORE OUR MENU
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} className="animate-scroll-hint" />
      </motion.button>
    </section>
  );
};

export default Hero;
