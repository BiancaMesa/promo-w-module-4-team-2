import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import "../scss/components/Projects.scss";

function Projects({ addFormData, updateAvatar, projectsList }) {


  return (

    <main className="mainProjects">
      <section className="heroProjects">
        <Link to="/">
          <h2 className="projectsTitle">Proyectos Paintones</h2>
        </Link>
        <p className="heroProjects__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>

        <div className="projects-buttons">
          <Link to="/card">
            <button className="projects-buttons__newCard">Nuevo Proyecto</button>
          </Link>
          <Link to="/">
            <button className="projects-buttons__landing">Volver a inicio</button>
          </Link>
        </div>
      </section>


      <section className="projectsContainer">
        <ul className="projectsList">
          {projectsList.map((project) => {
            return <ProjectCard project={project} addFormData={addFormData} updateAvatar={updateAvatar} key={project.idProject} />;
          })}
        </ul>
      </section>



    </main>
  );
}

Projects.propTypes = {
  addFormData: PropTypes.object,
  updateAvatar: PropTypes.string,
  updateProjectImg: PropTypes.string,
  previewUrl: PropTypes.string,
  projectsList: PropTypes.array,
};

export default Projects;
