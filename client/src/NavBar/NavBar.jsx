import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import './Navbar.css';



const NavBar = () => {
    return(
      <div>
        
        <AppBar style={{backgroundColor: '#E3F2FD'}}>
            <Toolbar >
              {/* <h3>Adanne Udumah</h3> */}
            <Typography variant="title" color="inherit">
              <div className='links'>
              <Link to='/'>Home</Link>
              
              <Link to='/projects'>Projects</Link>
              
              <Link to='/resume'>Resume</Link>
              
              <Link to='/contact'>Contact</Link>
              </div>
                </Typography>
            </Toolbar>
        </AppBar>
        
        </div>
    )
}
export default NavBar;