import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../scss/components/Projects.scss";

function Projects({ addFormData, updateAvatar, updateProjectImg, previewUrl }) {
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
          <button className="projects-buttons__newCard">Nuevo Projecto</button>
        </Link>
        <Link to="/">
          <button className="projects-buttons__landing">Volver a inicio</button>
        </Link>
      </div>
      </section>

      

      <section className="projectsContainer">
        {/* CARD 1 */}
        <section className="project">
          {/* <div
            className="project__projectImg"
            style={{ backgroundImage: `url(${updateProjectImg})` }}
          >
            {" "}
          </div> */}
          <article className="projectCard">
            <h2 className="projectCard__projectTitle">
              <span className="projectCard__projectTitle--text">
                Personal Project Card
              </span>
            </h2>

            <div className="projectCard__author">
              <div
                className="projectCard__authorPhoto"
                style={{ backgroundImage: `url(${updateAvatar})` }}
              >
                {" "}
              </div>
              <p className="projectCard__job">
                {addFormData.userJob || "Professional Baroque Artist"}
              </p>
              <h3 className="projectCard__name">
                {addFormData.userName || "Diego Velázquez"}
              </h3>
            </div>

            <div className="projectCard__project">
              <h3 className="projectCard__name">
                {addFormData.projectName || "Personal Project Card"}
              </h3>
              <p className="projectCard__slogan">
                {addFormData.slogan ||
                  "“Velázquez: Donde la grandeza de la corte cobra vida en el lienzo.”"}
              </p>
              <h3 className="projectCard__descriptionTitle">
                Product description
              </h3>
              <p className="projectCard__description">
                {addFormData.descriptions ||
                  `Designado por la corte de Carlos III, me enfrento al reto de plasmar “Las Meninas”, un proyecto donde arte y visión de la corte se entrelazan. Como Diego Velázquez, utilizo técnicas de claroscuro y perspectiva para capturar la complejidad y el esplendor del entorno, con cada figura meticulosamente posicionada reflejando las expectativas de mis mecenas, los verdaderos Product Owners. Este lienzo es mi campo de trabajo, donde cada pincelada une técnica y narrativa en una obra maestra destinada a perdurar.`}
              </p>

              <a href={previewUrl} target="_blank">
                {previewUrl}
              </a>

              <div className="projectCard__technicalInfo">
                <p className="projectCard__technologies">
                  {addFormData.usedTechs || "Oil painting"}
                </p>

                <a
                  className="projectIcon projectIcon__www"
                  href={addFormData.demoLink}
                  target="_blank"
                  title="Haz click para ver el proyecto online"
                >
                  Web link
                </a>
                <a
                  className="projectIcon projectIcon__github"
                  href={addFormData.repoLink}
                  target="_blank"
                  title="Haz click para ver el código del proyecto"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* CARD 2 */}
        <section className="project">
          {/* <div
            className="project__projectImg"
            style={{ backgroundImage: `url(${updateProjectImg})` }}
          >
            {" "}
          </div> */}
          <article className="projectCard">
            <h2 className="projectCard__projectTitle">
              <span className="projectCard__projectTitle--text">
                Personal Project Card
              </span>
            </h2>

            <div className="projectCard__author">
              <div
                className="projectCard__authorPhoto"
                style={{ backgroundImage: `url(${updateAvatar})` }}
              >
                {" "}
              </div>
              <p className="projectCard__job">
                {addFormData.userJob || "Professional Baroque Artist"}
              </p>
              <h3 className="projectCard__name">
                {addFormData.userName || "Diego Velázquez"}
              </h3>
            </div>

            <div className="projectCard__project">
              <h3 className="projectCard__name">
                {addFormData.projectName || "Personal Project Card"}
              </h3>
              <p className="projectCard__slogan">
                {addFormData.slogan ||
                  "“Velázquez: Donde la grandeza de la corte cobra vida en el lienzo.”"}
              </p>
              <h3 className="projectCard__descriptionTitle">
                Product description
              </h3>
              <p className="projectCard__description">
                {addFormData.descriptions ||
                  `Designado por la corte de Carlos III, me enfrento al reto de plasmar “Las Meninas”, un proyecto donde arte y visión de la corte se entrelazan. Como Diego Velázquez, utilizo técnicas de claroscuro y perspectiva para capturar la complejidad y el esplendor del entorno, con cada figura meticulosamente posicionada reflejando las expectativas de mis mecenas, los verdaderos Product Owners. Este lienzo es mi campo de trabajo, donde cada pincelada une técnica y narrativa en una obra maestra destinada a perdurar.`}
              </p>

              <a href={previewUrl} target="_blank">
                {previewUrl}
              </a>

              <div className="projectCard__technicalInfo">
                <p className="projectCard__technologies">
                  {addFormData.usedTechs || "Oil painting"}
                </p>

                <a
                  className="projectIcon projectIcon__www"
                  href={addFormData.demoLink}
                  target="_blank"
                  title="Haz click para ver el proyecto online"
                >
                  Web link
                </a>
                <a
                  className="projectIcon projectIcon__github"
                  href={addFormData.repoLink}
                  target="_blank"
                  title="Haz click para ver el código del proyecto"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* CARD 3 */}
        <section className="project">
          {/* <div
            className="project__projectImg"
            style={{ backgroundImage: `url(${updateProjectImg})` }}
          >
            {" "}
          </div> */}
          <article className="projectCard">
            <h2 className="projectCard__projectTitle">
              <span className="projectCard__projectTitle--text">
                Personal Project Card
              </span>
            </h2>

            <div className="projectCard__author">
              <div
                className="projectCard__authorPhoto"
                style={{ backgroundImage: `url(${updateAvatar})` }}
              >
                {" "}
              </div>
              <p className="projectCard__job">
                {addFormData.userJob || "Professional Baroque Artist"}
              </p>
              <h3 className="projectCard__name">
                {addFormData.userName || "Diego Velázquez"}
              </h3>
            </div>

            <div className="projectCard__project">
              <h3 className="projectCard__name">
                {addFormData.projectName || "Personal Project Card"}
              </h3>
              <p className="projectCard__slogan">
                {addFormData.slogan ||
                  "“Velázquez: Donde la grandeza de la corte cobra vida en el lienzo.”"}
              </p>
              <h3 className="projectCard__descriptionTitle">
                Product description
              </h3>
              <p className="projectCard__description">
                {addFormData.descriptions ||
                  `Designado por la corte de Carlos III, me enfrento al reto de plasmar “Las Meninas”, un proyecto donde arte y visión de la corte se entrelazan. Como Diego Velázquez, utilizo técnicas de claroscuro y perspectiva para capturar la complejidad y el esplendor del entorno, con cada figura meticulosamente posicionada reflejando las expectativas de mis mecenas, los verdaderos Product Owners. Este lienzo es mi campo de trabajo, donde cada pincelada une técnica y narrativa en una obra maestra destinada a perdurar.`}
              </p>

              <a href={previewUrl} target="_blank">
                {previewUrl}
              </a>

              <div className="projectCard__technicalInfo">
                <p className="projectCard__technologies">
                  {addFormData.usedTechs || "Oil painting"}
                </p>

                <a
                  className="projectIcon projectIcon__www"
                  href={addFormData.demoLink}
                  target="_blank"
                  title="Haz click para ver el proyecto online"
                >
                  Web link
                </a>
                <a
                  className="projectIcon projectIcon__github"
                  href={addFormData.repoLink}
                  target="_blank"
                  title="Haz click para ver el código del proyecto"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* CARD 4 */}
        <section className="project">
          {/* <div
            className="project__projectImg"
            style={{ backgroundImage: `url(${updateProjectImg})` }}
          >
            {" "}
          </div> */}
          <article className="projectCard">
            <h2 className="projectCard__projectTitle">
              <span className="projectCard__projectTitle--text">
                Personal Project Card
              </span>
            </h2>

            <div className="projectCard__author">
              <div
                className="projectCard__authorPhoto"
                style={{ backgroundImage: `url(${updateAvatar})` }}
              >
                {" "}
              </div>
              <p className="projectCard__job">
                {addFormData.userJob || "Professional Baroque Artist"}
              </p>
              <h3 className="projectCard__name">
                {addFormData.userName || "Diego Velázquez"}
              </h3>
            </div>

            <div className="projectCard__project">
              <h3 className="projectCard__name">
                {addFormData.projectName || "Personal Project Card"}
              </h3>
              <p className="projectCard__slogan">
                {addFormData.slogan ||
                  "“Velázquez: Donde la grandeza de la corte cobra vida en el lienzo.”"}
              </p>
              <h3 className="projectCard__descriptionTitle">
                Product description
              </h3>
              <p className="projectCard__description">
                {addFormData.descriptions ||
                  `Designado por la corte de Carlos III, me enfrento al reto de plasmar “Las Meninas”, un proyecto donde arte y visión de la corte se entrelazan. Como Diego Velázquez, utilizo técnicas de claroscuro y perspectiva para capturar la complejidad y el esplendor del entorno, con cada figura meticulosamente posicionada reflejando las expectativas de mis mecenas, los verdaderos Product Owners. Este lienzo es mi campo de trabajo, donde cada pincelada une técnica y narrativa en una obra maestra destinada a perdurar.`}
              </p>

              <a href={previewUrl} target="_blank">
                {previewUrl}
              </a>

              <div className="projectCard__technicalInfo">
                <p className="projectCard__technologies">
                  {addFormData.usedTechs || "Oil painting"}
                </p>

                <a
                  className="projectIcon projectIcon__www"
                  href={addFormData.demoLink}
                  target="_blank"
                  title="Haz click para ver el proyecto online"
                >
                  Web link
                </a>
                <a
                  className="projectIcon projectIcon__github"
                  href={addFormData.repoLink}
                  target="_blank"
                  title="Haz click para ver el código del proyecto"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>
      </section>

    
    </main>
  );
}

Projects.propTypes = {
  addFormData: PropTypes.object,
  updateAvatar: PropTypes.string,
  updateProjectImg: PropTypes.string,
  previewUrl: PropTypes.string,
};

export default Projects;
