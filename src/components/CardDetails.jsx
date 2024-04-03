//import "../scss/components/Preview.scss";
import "../scss/components/CardDetails.scss";
import PropTypes from "prop-types";

function CardDetails({
  addFormData, updateAvatar, updateProjectImg, previewUrl, handleReset }) {


  return (
    <section className="cardDetailsContainer">
      <div className="projectImg" style={{ backgroundImage: `url(${updateProjectImg})` }}>  </div>
      <article className="cardDetails">
        <h2 className="cardDetails__projectTitle">
          <span className="cardDetails__projectTitle--text">
            Personal Project Card
          </span>
        </h2>

        <div className="cardDetails__author">
          <div className="cardDetails__authorPhoto" style={{ backgroundImage: `url(${updateAvatar})` }}>  </div>
          <p className="cardDetails__job">{addFormData.userJob || "Professional Baroque Artist"}</p>
          <h3 className="cardDetails__name">{addFormData.userName || "Diego Velázquez"}</h3>
        </div>

        <div className="cardDetails__project">

          <h3 className="cardDetails__name">{addFormData.projectName || "Personal Project Card"}</h3>
          <p className="cardDetails__slogan">{addFormData.slogan || "“Velázquez: Donde la grandeza de la corte cobra vida en el lienzo.”"}</p>
          <h3 className="cardDetails__descriptionTitle">Product description</h3>
          <p className="cardDetails__description">{addFormData.descriptions || `Designado por la corte de Carlos III, me enfrento al reto de plasmar “Las Meninas”, un proyecto donde arte y visión de la corte se entrelazan. Como Diego Velázquez, utilizo técnicas de claroscuro y perspectiva para capturar la complejidad y el esplendor del entorno, con cada figura meticulosamente posicionada reflejando las expectativas de mis mecenas, los verdaderos Product Owners. Este lienzo es mi campo de trabajo, donde cada pincelada une técnica y narrativa en una obra maestra destinada a perdurar.`}</p>

          <a

            href={previewUrl}
            target="_blank"

          >{previewUrl}</a>

          <div className="cardDetails__technicalInfo">
            <p className="cardDetails__technologies">{addFormData.usedTechs || "Oil painting"}</p>

            <a
              className="iconDetails iconDetails__www"
              href={addFormData.demoLink}
              target="_blank"
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="iconDetails iconDetails__github"
              href={addFormData.repoLink}
              target="_blank"
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
            <button type="button" className="buttonDetails-reset" onClick={handleReset}>Reiniciar</button>
          </div>
        </div>
      </article>
    </section >
  );
}

CardDetails.propTypes = {
  addFormData: PropTypes.object,
  updateAvatar: PropTypes.string,
  updateProjectImg: PropTypes.string,
  previewUrl: PropTypes.string,
  handleReset: PropTypes.func
};

export default CardDetails;
