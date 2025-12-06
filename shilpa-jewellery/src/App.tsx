import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Collections from './components/Collections.tsx';
import CulturalHighlights from './components/CulturalHighlights.tsx';
import Testimonials from './components/Testimonials.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collections />
        <CulturalHighlights />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
// End of shilpa-jewellery/src/App.tsx