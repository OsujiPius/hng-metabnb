import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/molecules/Footer";
import Header from "./components/molecules/Header";
import ScrollToTop from "./components/utils/ScrollToTop";
import Home from "./pages/Home";
import Place from "./pages/Place";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-to-stay" element={<Place />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
