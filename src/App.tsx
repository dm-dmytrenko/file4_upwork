import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import ContactForm from "./pages/contact-form/contact-form";
import LandingPage from "./pages/landing-page/landing-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
