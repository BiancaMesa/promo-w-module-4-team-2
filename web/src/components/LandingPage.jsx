import { Link } from "react-router-dom";
import mainImage from "../images/logo-landing.jpg";
import "../scss/components/LandingPage.scss";

function LandingPage() {
  return (
    <div className="landingContainer">
      <h1 className="landingContainer__title">Bienvenida a Proyectos Paintones</h1>
      <img
        className="landingContainer__mainImage"
        src={mainImage}
        alt="proyectos-paintones"
      />
      <Link to="/card">
        <button className="projects-buttons__newCard">Nuevo Proyecto</button>
      </Link>

      <Link to="/projects">
        <button className="projects-buttons__projects">Ver proyectos</button>
      </Link>
    </div>
  );
}

export default LandingPage;
