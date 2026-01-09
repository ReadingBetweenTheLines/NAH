import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FluencyCheck from './components/FluencyCheck';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Features />
      <FluencyCheck />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
