import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./features/HomePage";
import PricingPage from "./features/PricingPage";
import AppointmentPage from "./features/AppointmentPage";
import Navigation from "./common/Navigation";
import Reminder from "./features/Reminder";
import Questions from "./features/Questions";
import Slider from "./features/Slider";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/price"><PricingPage /></Route>
        <Route path="/appointment"><AppointmentPage /></Route>
        <Route path="/reminder"><Reminder /></Route>
        <Route path="/questions"><Questions /></Route>
        <Route path="/slider"><Slider /></Route>
        <Route path="/"><HomePage /></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
