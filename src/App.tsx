import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DiseasesPage from './pages/DiseasesPage';
import DrugsPage from './pages/DrugsPage';
import CoursesPage from './pages/CoursesPage';
import RefillPage from './pages/RefillPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SearchResultPage from './pages/SearchResultPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1 pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/diseases" element={<DiseasesPage />} />
            <Route path="/drugs" element={<DrugsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/refill" element={<RefillPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/search" element={<SearchResultPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;