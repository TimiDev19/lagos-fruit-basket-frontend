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

function App() {
  return (
    <div className=" font-inter scroll-smooth">
      <BrowserRouter>
        <Navbar />
        <SearchModal />
        <Routes>
          <Route path="/" element={<Landingpage />} />
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
