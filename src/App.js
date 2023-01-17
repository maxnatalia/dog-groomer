import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./features/HomePage";
import PricingPage from "./features/PricingPage";
import AppointmentPage from "./features/AppointmentPage";
import Navigation from "./common/Navigation";
import Reminder from "./features/Reminder";
import Questions from "./features/Questions";
import Staff from "./features/Staff";
import Footer from "./common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/price" element={<PricingPage />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
