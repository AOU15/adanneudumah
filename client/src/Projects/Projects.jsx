import "./Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
    <div class="container">
      <div class="card card0">
        <div class="border">
          

          <a className="whereto-link" href="https://wheretoforyou.netlify.app/">
            {" "}
            WhereTo
          </a>
        </div>
      </div>

      <div class="card card1">
        <div class="border">
          

          <a className="careforyou-link" href="http://careforyou.netlify.app">
            {" "}
            CareForYou
          </a>
        </div>
      </div>

      <div class="card card2">
        <div class="border">
          

          <a className="techcare-link" href="https://tech-care.netlify.app/">
            {" "}
            TechCare
          </a>
        </div>
      </div>
      </div>
    </>
  );
}
