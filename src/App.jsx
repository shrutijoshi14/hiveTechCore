import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';

import About from './pages/About';
import Contact from './pages/Contact';
import DemoPortal from './pages/DemoPortal';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import Work from './pages/Work';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* 🔹 MAIN WEBSITE (Navbar + Footer) */}
        <Route
          path="/"
          element={
            <PageTransition>
              <Navbar />
              <main>
                <Home />
              </main>
              <Footer />
            </PageTransition>
          }
        />

        <Route
          path="/services"
          element={
            <PageTransition>
              <Navbar />
              <main>
                <Services />
              </main>
              <Footer />
            </PageTransition>
          }
        />

        <Route
          path="/work"
          element={
            <PageTransition>
              <Navbar />
              <main>
                <Work />
              </main>
              <Footer />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <Navbar />
              <main>
                <About />
              </main>
              <Footer />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Navbar />
              <main>
                <Contact />
              </main>
              <Footer />
            </PageTransition>
          }
        />

        {/* 🔹 SERVICE DETAIL PAGE (NO Navbar, NO Footer) */}
        <Route
          path="/service/:id"
          element={
            <PageTransition>
              <ServiceDetail />
            </PageTransition>
          }
        />

        {/* 🔹 DEMO PORTAL (Has its own DemoBar) */}
        <Route
          path="/work/:id"
          element={
            <PageTransition>
              <DemoPortal />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
