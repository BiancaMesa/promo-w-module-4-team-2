const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const server = express();

server.use(cors());

// Podemos poner un límite 
server.use(express.json({limit: "25mb"}));

// Conectarse con la base de datos 
async function getDBConnection(){
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


// Creamos un endpoint para devolver los AUTORES
// server.get("/authors", async (req, res) => {

//     try {
//         const connection = await getDBConnection();

//     const sql = "SELECT * FROM author";
//     // Hacemos la consulta,
//     const [authorsResult] = await connection.query(sql);
//     console.log(authorsResult);

//     //Cerrar la conexión con la base de datos
//     connection.end();

//     //Devolvemos la respuesta
//     res.status(200).json({
//         status: "success", 
//         message: authorsResult, 
//     });
//     } catch (error) {
//         res.status(500).json({
//             status: "error",
//             message: "Ha habido un error interno. Contacte suporte", 
//         });
//     }
    
// });


const staticServer = "./web/dist";
server.use(express.static(staticServer));