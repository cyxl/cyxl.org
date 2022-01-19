import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import ErrorPage from "./pages/ErrorPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='about/' element={<About />}/>
            <Route path='projects/' element={<Projects />}/>
            <Route path='contact/' element={<Contact />}/>
            <Route path='*' element={<ErrorPage />}/>
          </Routes>
    </Router>
  );
}

export default App;
