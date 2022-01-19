import Home from "./pages/Home"
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='about/' element={<About />}/>
            <Route path='*' element={<ErrorPage />}/>
          </Routes>
    </Router>
  );
}

export default App;
