import "./App.css";
import { MovieList } from "./pages/movies/MovieList";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Project } from "./pages/Project";
import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/movies/MovieDetail";
import { Flight } from "./pages/flights/Flight";
import { Contact } from "./pages/Contact";
import { MovieNowPlaying } from "./pages/movies/MovieNowPlaying";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/project/movielist" element={<MovieList />}> </Route>
          <Route path="/project/movielist/detail/:id" element={<MovieDetail />}></Route>
          <Route path="/flight" element={<Flight />}></Route>
          <Route path="/about" element={<Contact />}></Route>
          <Route path="/project/nowplaying" element={<MovieNowPlaying />}></Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
