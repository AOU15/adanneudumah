import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className="home">
      
      <header className='name-title'>Adanne Udumah Software Engineer</header>
      <h1>
        <Link to="/projects">
          <button className="homebutton">View More</button>
        </Link>
      </h1>
      </div>
      <div className='Note'>
        <p className='about-me'>
       
       Welcome! Here's a little about me. I enjoy coding and designing web applications. I have experience with front-end development and back-end development. I'm constantly learning and implementing new features to my projects. 
        </p>
        </div>
      </>
  );
}
