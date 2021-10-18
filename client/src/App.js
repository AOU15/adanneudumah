import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import Projects from './Projects/Projects';
import { Switch, Route } from 'react-router-dom'
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';

function App() {
  return (
    <>
    <div className='App'>
      <Switch>

      <Route path='/projects'>
      <Projects />
      </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route path='/contact'>
          <Contact />
          </Route>
      <Route path='/'>
      <Home />
      </Route>
      </Switch>
      <NavBar />
    </div>
    <footer className='footer'></footer>
    </>
  )
}

export default App;
