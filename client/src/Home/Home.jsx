import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <header className="name-title">Adanne Udumah Software Engineer</header>
        <h1>
          <Link to="/projects">
            <button className="homebutton">View More</button>
          </Link>
        </h1>
      </div>
      <div className="Note">
        <p className="about-me">
          Welcome! Here's a little about me. I enjoy coding and designing web
          applications. I have experience with front-end development and
          back-end development. I'm constantly learning and implementing new
          features to my projects.
        </p>
      </div>
      <div className="techstacks">
        <h3>My current tech stacks</h3>
        <h3 className="images">
          <img src="https://i.imgur.com/Bpp0cxu.png?1" />
          <img src="https://i.imgur.com/i23kxnE.png?2" />
          <img src="https://i.imgur.com/IE7he7o.png?1" />
          <img src="https://i.imgur.com/NlsMWsP.png?1" />
          <img src="https://i.imgur.com/o6BNNb2.png?1" />
          <img src="https://i.imgur.com/rnpZVCR.png?1" />
          <img src="https://i.imgur.com/0wgWR9t.png?1" />
          <img src="https://i.imgur.com/NntHQJ5.png?1" />
          <img src="https://i.imgur.com/dSS5gxz.png?1" />
        </h3>
      </div>
    </>
  );
}
