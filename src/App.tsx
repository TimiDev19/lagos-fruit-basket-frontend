import "./App.css";
import "./../app/globals.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Shop from "./pages/Shop";
import { FadeReveal } from "./components/animations/FadeReveal";
import ProductPage from "./pages/ProductPage";
import PaymentSucess from "./pages/PaymentSucess";
import PaymentFailure from "./pages/PaymentFailure";
import StickyButton from "./components/StickyButton";
import SearchModal from "./modals/SearchModal";
import ValentineBaskets from "./pages/ValentineBaskets";
import ChristmasBaskets from "./pages/ChristmasBaskets";
import RamadanBaskets from "./pages/RamadanBaskets";
import BirthdayBaskets from "./pages/BirthdayBaskets";
import CorporateBaskets from "./pages/CorporateBaskets";
import OrderConfirmed from "./pages/OrderConfirmed";
import ReturnsAndRefunds from "./pages/ReturnsAndRefunds";
import ShippingAndDelivery from "./pages/ShippingAndDelivery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className=" font-inter scroll-smooth">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <SearchModal />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/orderConfirmed" element={<OrderConfirmed />} />
          <Route
            path="/returnsandrefundspolicy"
            element={<ReturnsAndRefunds />}
          />
          <Route
            path="/shippinganddelivery"
            element={<ShippingAndDelivery />}
          />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/shop" element={<Shop />} />
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
            path="/valentine"
            element={
              <FadeReveal>
                <ValentineBaskets />
              </FadeReveal>
            }
          />
          <Route
            path="/christmas"
            element={
              <FadeReveal>
                <ChristmasBaskets />
              </FadeReveal>
            }
          />
          <Route
            path="/ramadan"
            element={
              <FadeReveal>
                <RamadanBaskets />
              </FadeReveal>
            }
          />
          <Route
            path="/birthday"
            element={
              <FadeReveal>
                <BirthdayBaskets />
              </FadeReveal>
            }
          />
          <Route
            path="/corporate"
            element={
              <FadeReveal>
                <CorporateBaskets />
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
        <StickyButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
