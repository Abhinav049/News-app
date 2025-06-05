import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import Navbar from "./components/nav";
import News from "./components/News";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="textdiv">Breaking News</div>
        <Routes>
          <Route path="/" element={<News key="/" category={"general"} />} />
          <Route
            path="/home"
            element={<News key="general" category={"general"} />}
          />
          <Route
            path="/sports"
            element={<News key="sports" category={"sports"} />}
          />
          <Route
            path="/science"
            element={<News key="science" category={"science"} />}
          />
          <Route
            path="/health"
            element={<News key="health" category={"health"} />}
          />

          <Route
            path="/technology"
            element={<News key="technology" category={"technology"} />}
          />
          <Route
            path="/business"
            element={<News key="business" category={"business"} />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
