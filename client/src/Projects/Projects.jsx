import "./Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div class="container">
      <div class="card card0">
        <div class="border">
          <a className="whereto-link" href="https://wheretoforyou.netlify.app/">
            WhereTo
            </a>
            <p>This app allows the user to select a continent and view attractions of the selected region.</p>
        </div>
      </div>

      <div class="card card1">
        <div class="border">
          <a className="careforyou-link" href="http://careforyou.netlify.app">
            CareForYou
            </a>
            <p>This app requires the user to register to view different medical services for a particular part of the body. The user will then be able to view reviews and leave reviews on a selected medical service.</p>
        </div>
      </div>

      <div class="card card2">
        <div class="border">
          <a className="techcare-link" href="https://tech-care.netlify.app/">
            TechCare
            </a>
            <p>This app focuses on the products needed for users in the tech field. The user will sign up to view different laptops and also leave reviews. </p>
        </div>
      </div>
      </div>
  );
}
