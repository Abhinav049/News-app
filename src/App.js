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
      {/* <marquee style={{ fontSize: "30px", color: "grey" }}>
        Breaking News
      </marquee> */}
      <div className="textdiv">Breaking News</div>

      <News category="general" />
      <Footer />
    </div>
  );
}

export default App;
