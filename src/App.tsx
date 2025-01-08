import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import PackageSection from "./components/PackageSection";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <PackageSection />
      <Testimonials />
    </>
  );
};

export default App;
