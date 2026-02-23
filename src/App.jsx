import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import About from './pages/About';
import Contact from './pages/Contact';
import DemoPortal from './pages/DemoPortal';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import Work from './pages/Work';

function App() {
  return (
    <Routes>
      {/* 🔹 MAIN WEBSITE (Navbar + Footer) */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <main>
              <Home />
            </main>
            <Footer />
          </>
        }
      />

      <Route
        path="/services"
        element={
          <>
            <Navbar />
            <main>
              <Services />
            </main>
            <Footer />
          </>
        }
      />

      <Route
        path="/work"
        element={
          <>
            <Navbar />
            <main>
              <Work />
            </main>
            <Footer />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <main>
              <About />
            </main>
            <Footer />
          </>
        }
      />

      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <main>
              <Contact />
            </main>
            <Footer />
          </>
        }
      />

      {/* 🔹 SERVICE DETAIL PAGE (NO Navbar, NO Footer) */}
      <Route path="/service/:id" element={<ServiceDetail />} />

      {/* 🔹 DEMO PORTAL (Has its own DemoBar) */}
      <Route path="/work/:id" element={<DemoPortal />} />
    </Routes>
  );
}

export default App;
