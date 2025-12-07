import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Details from "./pages/Details";
import Booking from "./pages/Booking";
import Signup from "./pages/Singup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Moredetails from "./pages/Moredetails";

export default function App() {
  return (
    <BrowserRouter>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20 pb-20 px-6 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars/:id/more" element={<Moredetails />} />
        </Routes>
      </main>

      {/* Fixed Footer */}
      <Footer />
    </BrowserRouter>
  );
}