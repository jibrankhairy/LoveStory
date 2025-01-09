import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import PackageSection from "./components/PackageSection";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/forms/ContactForm";
import BookingForm from "./components/forms/BookingForm";

const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleContactUsClick = () => {
    setShowContactForm(true);
  };

  const handleCloseModal = () => {
    setShowContactForm(false);
  };

  const handleBookingClick = () => {
    setShowBookingForm(true);
  };

  const handleBookingCloseModal = () => {
    setShowBookingForm(false);
  };

  return (
    <>
      <Navbar handleContactUsClick={handleContactUsClick} />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <PackageSection handleBookingClick={handleBookingClick} />
      <Testimonials />
      <ContactForm isOpen={showContactForm} onClose={handleCloseModal} />
      <BookingForm isOpen={showBookingForm} onClose={handleBookingCloseModal} />
    </>
  );
};

export default App;
