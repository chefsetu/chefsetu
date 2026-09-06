import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import JobListings from './components/JobListings.jsx';
import Categories from './components/Categories.jsx';
import CareerSection from './components/CareerSection.jsx';
import WhyChefSetu from './components/WhyChefSetu.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CTA from './components/CTA.jsx';
import EmployerSection from './components/EmployerSection.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <JobListings />
      <Categories />
      <CareerSection />
      <WhyChefSetu />
      <HowItWorks />
      <CTA />
      <EmployerSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;