import { motion } from "framer-motion";
import Image1 from "../assets/Aboutimg/img1.jpg";
import Image2 from "../assets/Aboutimg/img2.jpg";
import Image3 from "../assets/Aboutimg/img3.jpg";
import React from "react";

const AboutSection = React.memo(() => {
  return (
    <section id="about">
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Flex container untuk deskripsi dan grid gambar */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Deskripsi di sebelah kiri */}
            <motion.div
              className="lg:w-1/2 lg:mt-16 sm:mt-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 font-serif lg:text-left text-center">
                About Us
              </h2>
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 uppercase lg:text-left text-center"
                style={{ fontFamily: "Playfair Display" }}
              >
                Experience Our Magic
              </h1>
              <p className="text-sm sm:text-base lg:text-lg mb-4 lg:text-left text-center">
                We are a team of passionate wedding planners dedicated to making
                your dream wedding come true. With years of experience, we
                ensure every detail is perfect, from the venue to the
                decorations.
              </p>
              <p className="text-sm sm:text-base lg:text-lg lg:text-left text-center">
                Our mission is to create unforgettable memories for you and your
                loved ones. Let us handle the stress while you enjoy your
                special day. We pride ourselves on our creativity, attention to
                detail, and commitment to turning your vision into reality. Your
                happiness is our top priority, and we go above and beyond to
                make your wedding day truly magical.
              </p>
            </motion.div>

            {/* Grid gambar di sebelah kanan */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                <motion.div
                  className="col-span-2 lg:col-span-1 lg:row-span-3 bg-gray-200 h-64 sm:h-96 lg:h-full rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={Image1}
                    alt="Image 1"
                    className="w-full h-full object-cover lazyload"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  className="col-span-1 row-span-1 lg:row-span-2 bg-gray-200 h-48 sm:h-72 lg:h-96 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={Image2}
                    alt="Image 2"
                    className="w-full h-full object-cover lazyload"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  className="col-span-1 row-span-1 bg-gray-200 h-48 sm:h-48 lg:h-48 rounded-lg overflow-hidden "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={Image3}
                    alt="Image 3"
                    className="w-full h-full object-cover lazyload"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
