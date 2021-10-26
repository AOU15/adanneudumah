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
      <footer className='footer'>
      <li className='linkedin'><a href="https://www.linkedin.com/in/adanneudumah/">
          <img src="https://i.imgur.com/fN4DTIB.png?1" /></a></li>
        
        <li className="github"><a href="https://github.com/AOU15">
          <img src="https://i.imgur.com/tTCalAb.png?2" />
        </a>
        </li>
      </footer>
    </div>
    
  )
}

export default App;
