import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Hello from "./pages/Hello";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/hello">Hello</Link>
      </nav>

      <Switch>
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route component={Hello} path="/hello/:name/:age" />
        <Route component={Hello} path="/hello/:name" />
        <Route component={Hello} path="/hello" />
        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
