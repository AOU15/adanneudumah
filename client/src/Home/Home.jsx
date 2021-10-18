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
      </>
  );
}
