import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import PackageSection from "./components/PackageSection";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactUsClick = () => {
    setShowContactForm(true);
  };

  const handleCloseModal = () => {
    setShowContactForm(false);
  };

  return (
    <>
      <Navbar handleContactUsClick={handleContactUsClick} />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <PackageSection />
      <Testimonials />
      <ContactForm isOpen={showContactForm} onClose={handleCloseModal} />
    </>
  );
};

export default App;
