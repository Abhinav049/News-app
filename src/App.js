import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import Navbar from "./components/nav";
import News from "./components/News";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <News />
      <Footer />
    </div>
  );
}

export default App;
