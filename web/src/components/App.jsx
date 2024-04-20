import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import "../scss/App.scss";



function App() {

  const SERVER_URL = process.env.URL === "production" ? 'https://proyectos-paintones.onrender.com' : 'http://localhost:4000'
  const defaultAvatar =
    "https://historiaespana.es/wp-content/uploads/diego_velazquez.jpg";
  const defaultImg = "https://i.blogs.es/8c3042/meninas/1366_2000.jpg";

  const savedAvatar = JSON.parse(localStorage.getItem("avatar"));

  const savedImg = JSON.parse(localStorage.getItem("img"));

  const savedForm = JSON.parse(localStorage.getItem("form")) || {
    projectName: "",
    slogan: "",
    repoLink: "",
    demoLink: "",
    usedTechs: "",
    descriptions: ``,
    userName: "",
    userJob: "",
  };

  const [updateAvatar, setUpdateAvatar] = useState(
    savedAvatar ? savedAvatar : defaultAvatar
  );
  const [updateProjectImg, setProjectImg] = useState(
    savedImg ? savedImg : defaultImg
  );
  const [addFormData, setAddFormData] = useState(savedForm);
  const [previewUrl, setPreviewUrl] = useState("");
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(addFormData));
    localStorage.setItem("avatar", JSON.stringify(updateAvatar));
    localStorage.setItem("img", JSON.stringify(updateProjectImg));
  }, [addFormData, updateAvatar, updateProjectImg]);

  const handleFormAdd = (event) => {
    const { name, value } = event.target;
    setAddFormData({
      ...addFormData,
      [name]: value,
    });
  };



  useEffect(() => {
    async function getProjects() {
      const response = await fetch(`${SERVER_URL}/projects`);
      const data = await response.json();
      setProjectsList(data.message);
    }
    getProjects();
  }, []);



  const handlePost = (event) => {
    event.preventDefault();
    console.log("clicko");

    fetch(`${SERVER_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: addFormData.projectName,
        slogan: addFormData.slogan || " ",
        technologies: addFormData.usedTechs || " ",
        demo: addFormData.demoLink || " ",
        repo: addFormData.repoLink,
        desc: addFormData.descriptions,
        autor: addFormData.userName,
        job: addFormData.userJob,
        image: updateProjectImg,
        photo: updateAvatar,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit project data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.cardURL) {
          setPreviewUrl(data.cardURL);
        } else {
          console.error(
            "El campo cardURL no está presente en la respuesta de la API"
          );
        }
      })
      .catch((error) => {
        console.error("Error submitting project data:", error);
      });
  };



  const handleReset = () => {
    setUpdateAvatar(defaultAvatar);
    setProjectImg(defaultImg);
    setAddFormData({
      projectName: "",
      slogan: "",
      repoLink: "",
      demoLink: "",
      usedTechs: "",
      descriptions: ``,
      userName: "",
      userJob: "",
    });
    setPreviewUrl("");
  };

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <LandingPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/card"
          element={
            <>
              <Header />

              <main className="main">
                <section className="hero">
                  <Link to="/">
                    <h2 className="title">Proyectos Paintones</h2>
                  </Link>
                  <p className="hero__text">
                    Escaparate en línea para recoger ideas a través de la
                    tecnología
                  </p>
                  <Link to="/projects" className="button--link">
                    Ver proyectos
                  </Link>
                </section>

                <Preview
                  addFormData={addFormData}
                  setAddFormData={setAddFormData}
                  updateAvatar={updateAvatar}
                  updateProjectImg={updateProjectImg}
                  handleReset={handleReset}
                />

                <Form
                  handleFormAdd={handleFormAdd}
                  addFormData={addFormData}
                  setUpdateAvatar={setUpdateAvatar}
                  setProjectImg={setProjectImg}
                  handlePost={handlePost}
                  previewUrl={previewUrl}
                />
              </main>

              <Footer />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <Header />
              <Projects
                addFormData={addFormData}
                setAddFormData={setAddFormData}
                updateAvatar={updateAvatar}
                updateProjectImg={updateProjectImg}
                handleReset={handleReset}
                projectsList={projectsList}
                SERVER_URL={SERVER_URL}
              />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
