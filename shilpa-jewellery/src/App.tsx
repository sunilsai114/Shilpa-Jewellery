import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Collections } from './components/Collections';
import { CulturalHighlights } from './components/CulturalHighlights';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="container">
          <Hero />
          <div className="cultural-divider" />
          <About />
          <Collections />
          <div className="cultural-divider" />
          <CulturalHighlights />
          <Testimonials />
          <div className="cultural-divider" />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;