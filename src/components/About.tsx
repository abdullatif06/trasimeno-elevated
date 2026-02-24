import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Coffee, Heart, Utensils } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Dedicated to Quality",
    description:
      "We pride ourselves on providing organic, fair trade tea and coffee. We work with local dairy suppliers and bakeries to source the freshest, highest quality offerings.",
  },
  {
    icon: Heart,
    title: "Stay Awhile",
    description:
      "Comfortable seating inside our cafe with free wifi and plenty of outlets! Our drive thru and walk-up window make it easy to grab your favorites on the go.",
  },
  {
    icon: Utensils,
    title: "More Than Drinks",
    description:
      "We offer a wide variety of hot and iced drinks, plus savory and sweet food options. Whether it's morning coffee, lunch, or an afternoon snack — we've got you covered!",
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.25em] uppercase text-accent font-medium mb-4"
          >
            About Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Trasimeno Coffee House
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Located in the heart of Amman, Jordan, Trasimeno Coffee House is your
            neighborhood spot for great food and strong coffee. Open 24 hours,
            we're here whenever you need us — with drive thru convenience and
            a welcoming atmosphere that feels like home.
          </motion.p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="group text-center p-8 rounded-lg bg-card border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                <feature.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
