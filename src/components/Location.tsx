import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Clock, Phone, Globe } from "lucide-react";

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
          {/* Real Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden border border-border h-80 md:h-full min-h-[320px]"
          >
            <iframe
              title="Trasimeno Coffee House Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.5!2d35.8585749!3d32.0278329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c9fa1baa070bd%3A0x634ac530bf3cc8a2!2sTrasimeno%20Coffee%20House!5e0!3m2!1sen!2sjo!4v1700000000000"
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
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Every Day</span>
                  <span className="font-medium text-accent">Open 24 Hours</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Drive thru & walk-up window available around the clock
              </p>
            </div>

            {/* Address */}
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-accent" />
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Address
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-2">
                Amman, Jordan
              </p>
              <p className="text-xs text-muted-foreground">
                Plus Code: 2VH5+4C Amman
              </p>
              <a
                href="https://maps.app.goo.gl/EST7UCyUva35FCnn9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Contact */}
            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Contact
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+96265868888"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone size={16} />
                  +962 6 586 8888
                </a>
                <a
                  href="https://trasimenocoffee.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Globe size={16} />
                  trasimenocoffee.com
                </a>
              </div>
            </div>

            {/* Rating */}
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif text-2xl font-bold text-foreground">4.6</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-lg ${star <= 4 ? "text-accent" : "text-accent/40"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Google Maps Rating</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
