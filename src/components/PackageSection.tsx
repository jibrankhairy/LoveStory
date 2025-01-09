import { motion } from "framer-motion";
import { packages } from "../data/package";

interface PackagesProps {
  handleBookingClick: () => void;
}

const PackageSection = ({ handleBookingClick }: PackagesProps) => {
  return (
    <section id="packages">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-10 sm:py-16 lg:py-20 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 font-serif text-center">
            Packages
          </h2>
          <p className="text-center text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Choose from our carefully curated wedding packages designed to suit
            every couple's needs. From intimate ceremonies to grand
            celebrations, we have the perfect plan for your special day.
          </p>
          <div className="flex flex-wrap justify-center items-stretch">
            {packages.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="w-full sm:w-1/2 lg:w-1/3 p-4"
              >
                <motion.div
                  className="h-full p-6 border border-neutral-700 rounded-xl bg-white hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
                  initial={{ scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      {option.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {option.description}
                    </p>
                    <p className="text-lg font-bold mb-4">{option.price}</p>
                    <ul className="mb-6">
                      {option.servicesIncluded.map((service, idx) => (
                        <li key={idx} className="text-sm text-gray-600 mb-2">
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.button
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleBookingClick();
                    }}
                  >
                    Book Now
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PackageSection;
