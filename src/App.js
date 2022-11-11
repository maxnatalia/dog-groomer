import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./features/HomePage";
import PricingPage from "./features/PricingPage";
import AppointmentPage from "./features/AppointmentPage";
import Navigation from "./common/Navigation";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Switch>
        <Route path="/price"><PricingPage /></Route>
        <Route path="/appointment"><AppointmentPage /></Route>
        <Route path="/"><HomePage /></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
