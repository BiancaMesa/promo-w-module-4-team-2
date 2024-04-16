const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// configurar el servidor para poder utilizar variables de entorno
require("dotenv").config();

const server = express();

server.use(cors());
server.set("view engine", "ejs");

// Podemos poner un límite 
server.use(express.json({ limit: "25mb" }));

// Conectarse con la base de datos 
async function getDBConnection() {
    const connection = await mysql.createConnection({
        host: "sql.freedb.tech",
        user: "freedb_lejladzanko",
        password: "d39abJ!Sce8Y@9m",
        database: "freedb_proyectospaintones",
    });

    //Nos conectamos 
    connection.connect();
    return connection;
}


const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});


// Creamos un endpoint para devolver los PROJECTOS
server.get("/projects", async (req, res) => {

    try {
        const connection = await getDBConnection();

        const sql = "SELECT * FROM projectData, author WHERE projectData.fk_idAuthor = author.idAuthor";
        // Hacemos la consulta,
        const [projectsResult] = await connection.query(sql);
        console.log(projectsResult);

        //Cerrar la conexión con la base de datos
        connection.end();

        //Devolvemos la respuesta
        res.status(200).json({
            status: "success",
            message: projectsResult,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ha habido un error interno. Contacte suporte",
        });
    }

});

server.post("/projects", async (req, res) => {
    const connection = await getDBConnection();
    const authorQuerySql = "INSERT INTO author (authorName, jobName, authorImage) VALUES (?, ?, ?)";
    const [authorResult] = await connection.query(authorQuerySql, [req.body.autor, req.body.job, req.body.photo]);
    const projectQuerySql = "INSERT INTO projectData (projectName, slogan, repo, demo, techs, description, projectImage, fk_idAuthor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const [projectResult] = await connection.query(projectQuerySql, [
        req.body.name,
        req.body.slogan,
        req.body.repo,
        req.body.demo,
        req.body.technologies,
        req.body.desc,
        req.body.image,
        authorResult.insertId
    ]);

    res.status(201).json({
        success: true,
        id: projectResult.insertId,
        cardURL: `http://localhost:${serverPort}/detail/${projectResult.insertId}`,

    });


});

//endpoint para que nos traiga de back la pagina web de detail.ejs que hemos creado en back
server.get("/detail/:idProject", async (req, res) => {
    try {
        const { idProject } = req.params;
        const connection = await getDBConnection(); // Espera a que la conexión se establezca

        const sqlQuery = "SELECT * FROM projectData, author WHERE projectData.fk_idAuthor = idAuthor AND projectData.idProject = ?";
        const [result] = await connection.query(sqlQuery, [idProject]);

        if (result.length === 0) {
            res.status(404).send("Proyecto no encontrado");
        } else {
            // Renderizar la plantilla con el objeto completo
            res.render("detail", { project: result[0] });
        }
    } catch (error) {
        console.error("Error al obtener detalles del proyecto:", error);
        res.status(500).send("Error interno del servidor");
    }
});



const pathServerPublicReact = './src/public-react';
server.use(express.static(pathServerPublicReact));

const pathServerPublicStyles = './src/public-css';
server.use(express.static(pathServerPublicStyles));

// const pathServerPublicImages = './src/images';
// server.use(express.static(pathServerPublicImages));

