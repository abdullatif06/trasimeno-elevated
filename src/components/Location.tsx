import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "7:00 – 20:00" },
  { day: "Saturday", time: "8:00 – 21:00" },
  { day: "Sunday", time: "8:00 – 18:00" },
];

const Location = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="location" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.25em] uppercase text-accent font-medium mb-4"
          >
            Find Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-foreground"
          >
            Visit Trasimeno
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden border border-border h-80 md:h-full min-h-[320px] bg-muted flex items-center justify-center"
          >
            <iframe
              title="Trasimeno Coffee Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.123456789!2d12.1!3d43.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA2JzAwLjAiTiAxMsKwMDYnMDAuMCJF!5e0!3m2!1sen!2sit!4v1234567890"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Hours */}
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} className="text-accent" />
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium text-foreground">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-accent" />
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Address
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Lake Trasimeno Area, Umbria, Italy
              </p>
            </div>

            {/* Contact */}
            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Contact
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+390000000000"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone size={16} />
                  +39 000 000 0000
                </a>
                <a
                  href="mailto:info@trasimenocoffee.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail size={16} />
                  info@trasimenocoffee.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
