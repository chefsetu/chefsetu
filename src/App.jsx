import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ApplyModal from './components/ApplyModal.jsx'; 

// Pages
import Home from './pages/Home.jsx';
import JobsPage from './pages/JobsPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import EmployersPage from './pages/EmployersPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import InternshipsPage from './pages/InternshipsPage.jsx';
import ChefProtectionPage from './pages/ChefProtectionPage.jsx'; // <-- 1. Import new page

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/employer" element={<EmployersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/protection" element={<ChefProtectionPage />} /> {/* <-- 2. Add Route */}
          </Routes>
        </main>

        <Footer />
        <ApplyModal />
      </div>
    </Router>
  );
}

export default App;