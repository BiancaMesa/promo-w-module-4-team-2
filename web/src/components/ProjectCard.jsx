import PropTypes from "prop-types";
import "../scss/components/ProjectCard.scss";
import { Link } from "react-router-dom";


function ProjectCard({ project, previewUrl }) {
  return (


    <li className="project">
      {/* <Link to={`https://proyectos-paintones.onrender.com/detail/${project.idProject}`}> */}
      <Link to={previewUrl}>
        <article className="projectCard" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8)), url(${project.projectImage})` }}>
          <h2 className="projectCard__projectTitle">
            <span className="projectCard__projectTitle--text">
              Personal Project Card
            </span>
          </h2>

          <div className="projectCard__author">
            <div
              className="projectCard__authorPhoto"
              style={{ backgroundImage: `url(${project.authorImage})` }}
            >
              {" "}
            </div>
            <h3 className="projectCard__name">
              {project.authorName || "Diego Velázquez"}
            </h3>
            <p className="projectCard__job">
              {project.jobName || "Professional Baroque Artist"}
            </p>
          </div>

          <div className="projectCard__project">
            <h3 className="projectCard__name">
              {project.projectName || "Personal Project Card"}
            </h3>
            <p className="projectCard__slogan">
              {project.slogan ||
                "“Velázquez: Donde la grandeza de la corte cobra vida en el lienzo.”"}
            </p>
            <h3 className="projectCard__descriptionTitle">
              Product description
            </h3>
            <p className="projectCard__description">
              {project.description ||
                `Designado por la corte de Carlos III, me enfrento al reto de plasmar “Las Meninas”, un proyecto donde arte y visión de la corte se entrelazan. Como Diego Velázquez, utilizo técnicas de claroscuro y perspectiva para capturar la complejidad y el esplendor del entorno, con cada figura meticulosamente posicionada reflejando las expectativas de mis mecenas, los verdaderos Product Owners. Este lienzo es mi campo de trabajo, donde cada pincelada une técnica y narrativa en una obra maestra destinada a perdurar.`}
            </p>


            <div className="projectCard__technicalInfo">
              <p className="projectCard__technologies">
                {project.techs || "Oil painting"}
              </p>

              <a
                className="projectIcon projectIcon__www"
                href={"http://" + project.demo}
                target="_blank"
                title="Haz click para ver el proyecto online"
              >
                Web link
              </a>
              <a
                className="projectIcon projectIcon__github"
                href={"http://" + project.repo}
                target="_blank"
                title="Haz click para ver el código del proyecto"
              >
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </Link>
    </li>


  );
}

ProjectCard.propTypes = {
  addFormData: PropTypes.object,
  updateAvatar: PropTypes.string,
  project: PropTypes.object
};

export default ProjectCard;