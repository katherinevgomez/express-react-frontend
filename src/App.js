import './App.css'
//Import Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Route, Switch} from "react-router-dom"
//Import Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {
    const URL ="http://localhost:4000/"
    return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route exact path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
