import './App.css';
import './../app/globals.css';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Footer from './components/Footer';
import Aboutpage from './pages/Aboutpage';
import DermalFillers from './categories/DermalFillers';
import Shop from './pages/Shop';
import Mesotherapy from './categories/Mesotherapy';
import HairTreatments from './categories/HairTreatments';
import { FadeReveal } from './components/animations/FadeReveal';
import Beauty from './categories/Beauty';
import FatDissolvers from './categories/FatDissolvers';
import ChemicalPeels from './categories/ChemicalPeels';
import Miscellaneous from './categories/Miscellaneous';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
import Botulinum from './categories/Botulinum';
import PaymentSucess from './pages/PaymentSucess';
import PaymentFailure from './pages/PaymentFailure';
import StickyButton from './components/StickyButton';

function App() {
  return (
    <div className=" font-inter scroll-smooth">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          {/* <Route path="/about" element={<Aboutpage />} /> */}
          <Route path="/shop" element={<Shop />} />
          {/* <Route
            path="/dermalfillers"
            element={
              <FadeReveal>
                <DermalFillers />
              </FadeReveal>
            }
          />
          <Route
            path="/mesotherapy"
            element={
              <FadeReveal>
                <Mesotherapy />
              </FadeReveal>
            }
          />
          <Route
            path="/hairTreatments"
            element={
              <FadeReveal>
                <HairTreatments />
              </FadeReveal>
            }
          />
          <Route
            path="/beauty"
            element={
              <FadeReveal>
                <Beauty />
              </FadeReveal>
            }
          />
          <Route
            path="/fatDissolvers"
            element={
              <FadeReveal>
                <FatDissolvers />
              </FadeReveal>
            }
          />
          <Route
            path="/chemicalPeels"
            element={
              <FadeReveal>
                <ChemicalPeels />
              </FadeReveal>
            }
          />
          <Route
            path="/botulinum"
            element={
              <FadeReveal>
                <Botulinum />
              </FadeReveal>
            }
          />
          <Route
            path="/miscellaneous"
            element={
              <FadeReveal>
                <Miscellaneous />
              </FadeReveal>
            }
          />
          <Route
            path="/contact"
            element={
              <FadeReveal>
                <Contact />
              </FadeReveal>
            }
          /> */}
          <Route
            path="/product/:id"
            element={
              <FadeReveal>
                <ProductPage />
              </FadeReveal>
            }
          />
          <Route
            path="/paymentSuccess"
            element={
              <FadeReveal>
                <PaymentSucess />
              </FadeReveal>
            }
          />
          <Route
            path="/paymentFailure"
            element={
              <FadeReveal>
                <PaymentFailure />
              </FadeReveal>
            }
          />
        </Routes>
        <StickyButton/>
      </BrowserRouter>
    </div>
  );
}

export default App;