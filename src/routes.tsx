import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import PackageSection from "./components/PackageSection";
import Testimonials from "./components/Testimonials";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/hero" element={<HeroSection />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/packages" element={<PackageSection />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
