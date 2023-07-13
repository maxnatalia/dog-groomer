import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./features/pages/Home";
import About from "./features/pages/About";
import Offer from "./features/pages/Offer";
import Error from "./features/pages/Error";
import Visit from "./features/pages/Visit";
import Layout from "./features/pages/Layout";

const App = () => {
  return (
    <AnimatePresence>
      <BrowserRouter basename="dog-groomer">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/visit" element={<Visit />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default App;
