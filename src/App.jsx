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
import ChefProtectionPage from './pages/ChefProtectionPage.jsx';
import EventsPage from './pages/EventsPage.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans flex flex-col">

        <Navbar />

        <main className="flex-grow">
          <Routes>

            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Jobs */}
            <Route path="/jobs" element={<JobsPage />} />

            {/* Internships */}
            <Route path="/internships" element={<InternshipsPage />} />

            {/* Careers */}
            <Route path="/careers" element={<CareersPage />} />

            {/* Employers */}
            <Route path="/employer" element={<EmployersPage />} />

            {/* About */}
            <Route path="/about" element={<AboutPage />} />

            {/* Chef Protection */}
            <Route path="/protection" element={<ChefProtectionPage />} />

            {/* Events */}
            <Route path="/events" element={<EventsPage />} />

          </Routes>
        </main>

        <Footer />

        <ApplyModal />

      </div>
    </Router>
  );
}

export default App;
