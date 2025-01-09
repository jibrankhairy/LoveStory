import { testimonials } from "../data/testimonials";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="py-10 sm:py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 font-serif text-center">
            Testimonials
          </h2>
          <p className="text-center text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Our satisfied guests have praised our services and our exceptional
            attention to detail. Here are a few testimonials to inspire you.
          </p>
          <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="w-full sm:w-1/2 lg:w-1/3 p-4"
              >
                <motion.div
                  className="p-6 border border-neutral-700 rounded-xl bg-white hover:shadow-lg transition-shadow duration-300"
                  initial={{ scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <p className="text-sm text-gray-600 mb-4">
                    {testimonial.feedback}
                  </p>
                  <p className="text-lg font-bold mb-4">{testimonial.name}</p>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`mr-2 ${
                          testimonial.rating >= i + 0.5
                            ? "text-yellow-600"
                            : "text-gray-300"
                        }`}
                        size={20}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      ({testimonial.rating}/5)
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
