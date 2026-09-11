import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ApplyModal from './components/ApplyModal.jsx'; // <-- 1. Import Modal

// Pages
import Home from './pages/Home.jsx';
import JobsPage from './pages/JobsPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import EmployersPage from './pages/EmployersPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import InternshipsPage from './pages/InternshipsPage.jsx'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/employer" element={<EmployersPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
        <ApplyModal /> {/* <-- 2. Add Modal Component Here */}
      </div>
    </Router>
  );
}

export default App;