import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/molecules/Footer";
import Header from "./components/molecules/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
