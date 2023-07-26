import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
