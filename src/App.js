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
          <Route
            path="/"
            element={
              <News
                key="/"
                category={"general"}
                apikey={process.env.REACT_APP_NEWS_API_KEY}
              />
            }
          />
          <Route
            path="/home"
            element={
              <News
                key="general"
                category={"general"}
                apikey={process.env.REACT_APP_NEWS_API_KEY}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                key="sports"
                category={"sports"}
                apikey={process.env.REACT_APP_NEWS_API_KEY}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key="science"
                category={"science"}
                apikey={process.env.REACT_APP_NEWS_API_KEY}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                key="health"
                category={"health"}
                apikey={process.env.REACT_APP_NEWS_API_KEY}
              />
            }
          />

          <Route
            path="/technology"
            element={
              <News
                key="technology"
                category={"technology"}
                apikey={process.env.REACT_APP_NEWS_API_KEY}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                category={"business"}
                apikey={process.env.REACT_APP_NEWS_API_KEY}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
