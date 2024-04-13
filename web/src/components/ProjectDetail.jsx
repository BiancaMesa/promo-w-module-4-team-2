import "../scss/components/CardDetails.scss";
import { useParams } from 'react-router-dom';

function ProjectDetail({ projectsList }) {
    /*console.log(projectsList)
    const { projectId } = useParams();
    const project = projectsList.find(project => project.idProject === parseInt(projectId));

    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }

    const { projectImage, authorImage, jobName, authorName, projectName, slogan, description, techs, demo, repo } = project;

    return (
        <section className="cardDetailsContainer">
            <div className="projectImg" style={{ backgroundImage: `url(${projectImage})` }}></div>
            <article className="cardDetails">

                <h2 className="cardDetails__projectTitle">
                    <span className="cardDetails__projectTitle--text">Personal Project Card</span>
                </h2>

                <div className="cardDetails__author">
                    <div className="cardDetails__authorPhoto" style={{ backgroundImage: `url(${authorImage})` }}></div>
                    <p className="cardDetails__job">{jobName || "Professional Baroque Artist"}</p>
                    <h3 className="cardDetails__name">{authorName || "Diego Velázquez"}</h3>
                </div>

                <div className="cardDetails__project">
                    <h3 className="cardDetails__name">{projectName || "Personal Project Card"}</h3>
                    <p className="cardDetails__slogan">{slogan || "“Velázquez: Donde la grandeza de la corte cobra vida en el lienzo.”"}</p>
                    <h3 className="cardDetails__descriptionTitle">Product description</h3>
                    <p className="cardDetails__description">{description || `Designado por la corte de Carlos III, me enfrento al reto de plasmar “Las Meninas”, un proyecto donde arte y visión de la corte se entrelazan. Como Diego Velázquez, utilizo técnicas de claroscuro y perspectiva para capturar la complejidad y el esplendor del entorno, con cada figura meticulosamente posicionada reflejando las expectativas de mis mecenas, los verdaderos Product Owners. Este lienzo es mi campo de trabajo, donde cada pincelada une técnica y narrativa en una obra maestra destinada a perdurar.`}</p>
                    <div className="cardDetails__technicalInfo">
                        <p className="cardDetails__technologies">{techs || "Oil painting"}</p>
                        <a className="iconDetails iconDetails__www" href={"http://" + demo} target="_blank" title="Haz click para ver el proyecto online">Web link</a>
                        <a className="iconDetails iconDetails__github" href={"http://" + repo} target="_blank" title="Haz click para ver el código del proyecto">GitHub link</a>
                    </div>
                </div>
            </article>
        </section>
    );*/
}

export default ProjectDetail;
