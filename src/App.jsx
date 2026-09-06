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

const components = new Map([
  ['navbar', Navbar],
  ['hero', Hero],
  ['jobListings', JobListings],
  ['categories', Categories],
  ['career', CareerSection],
  ['whyChefSetu', WhyChefSetu],
  ['howItWorks', HowItWorks],
  ['cta', CTA],
  ['employer', EmployerSection],
  ['about', About],
  ['contact', Contact],
  ['footer', Footer],
]);

function App() {
  const sections = [
    'navbar',
    'hero',
    'jobListings',
    'categories',
    'career',
    'whyChefSetu',
    'howItWorks',
    'cta',
    'employer',
    'about',
    'contact',
    'footer',
  ];

  return (
    <div className="min-h-screen">
      {sections.map((section) => {
        const Component = components.get(section);

        return Component ? <Component key={section} /> : null;
      })}
    </div>
  );
}

export default App;