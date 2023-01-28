import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./features/HomePage";
import PricingPage from "./features/PricingPage";
import AppointmentPage from "./features/AppointmentPage";
import Navigation from "./common/Navigation";
import Questions from "./features/Questions";
import Staff from "./features/Staff";
import Footer from "./common/Footer";
import ErrorPage from "./features/ErrorPage";
import ScrollToTop from "./common/ScrollToTop";
import Newsletter from "./common/Newsletter";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Newsletter />
      <ScrollToTop>
        <Routes>
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/price" element={<PricingPage />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </HashRouter>
  );
};

export default App;
