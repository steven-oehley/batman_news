// page components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// components
import Nav from "./components/Nav";

// custom hook
import { useFetch } from "./hooks/useFetch";

// router imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "./pages/Article";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const { data: articles, isLoading } = useFetch(
    "http://localhost:3000/articles"
  );

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          {/* Switch / Routes allows for only one component to show at a time */}
          <Route path="/" exact>
            {/* Exact needed here - router tries to match top to bottom */}
            {/* No switch / routes included would show home and about on about route */}
            {/* If switch / routes included then would only pick up home on about and contact route */}
            {/* avoid - use exact for an exact match */}
            <Home articles={articles} isLoading={isLoading} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/article/:id">
            {/* :id is a parameter */}
            {/* This is a dynamic route - declaered with : to signal a route param*/}
            <Article articles={articles} isLoading={isLoading} />
          </Route>
          {/* catch all route for redirect */}
          <Route path="*">
            <Redirect />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
