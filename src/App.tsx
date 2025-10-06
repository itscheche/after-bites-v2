import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProductCarousel } from './components/ProductCarousel';
import { CategoryGrid } from './components/CategoryGrid';
import { TestimonialSection } from './components/TestimonialSection';
import { SeasonalSection } from './components/SeasonalSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProductCarousel />
      <CategoryGrid />
      <TestimonialSection />
      <SeasonalSection />
      <Footer />
    </div>
  );
}