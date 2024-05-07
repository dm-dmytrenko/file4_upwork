import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import ContactForm from "./pages/contact-form/contact-form";
import SalesPage from "./pages/sales-page/sales-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SalesPage />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
