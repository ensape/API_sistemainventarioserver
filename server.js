import express from 'express';
import cors from 'cors';
import db from './app/config/db.js';
import bobina from './app/routes/bobina.js';
import fleje from './app/routes/fleje.js'
import jwt from "jsonwebtoken" // json web token  nos permite autenticarnos con el servidor mediante Tokens de una forma simple y segura.

const app = express();


app.use(cors());
app.use(express.json());//habilitar el uso del json 
app.use(express.urlencoded({extended:true})); // //habilitar el envio de data atraves de los formularios (body) y urls

// ruta para el login del usuario
app.post("/usuario/login", (req, res) => { // TODO LoginHandler
    const username = req.body.username;
    const password = req.body.password;

    if ( username == "InventarioAlmacen13" && password == "1234"   ) { // logearse en la aplicacion
        const user = {
            nombre: "administradoralmacen",
            gmail : "administradoralmacen@gmail.com",
            codigo: "2dm1n1str2dor2lm2c3n"
        }
        jwt.sign({ user }, 'secretKey',{ expiresIn : '1h'}, (err, token) => { // se crea el token del user e indentificar al usuario que se encuentra logeado
            res.json({
                myToken : token // este token esta enviado al lado del cliente, que el navegador almacenar el token
            });
        });
    } else { 
        res.status(400).json({error :"Las Credenciales son Incorrectas"});
    }
});

//------- Mostrar lo que el usuario realiza
app.post("/usuario/post", verifyToken, (req, res) => { // verificar en el servidor si el token es valido sl utilizar jwr = ninguna informacion es almacenada del lado del servidor
    
    jwt.verify( req.token, 'secretKey', (error, authData) => {
        if (error) {
            res.sendStatus(403)
        } else {
            res.json({
                mensaje : "Comprobando el funcionamiento del Token para el login del usuario",
                authData
            });
        };
    });
});

// funcion para verificar el web token
// Authorization: Bearer <token> Autorización: Portador <ficha>
function verifyToken ( req, res, next ) {

    const bearerHeader = req.headers[ 'authorization' ];

    if ( typeof bearerHeader !== 'undefined'   ) {   // comprobar que dicho token existe
           const bearerToken  = bearerHeader.split(" ")[1] // 1 para tener acceso <token>
            req.token = bearerToken;
            next();
    } else { 
        res.sendStatus(403).json('Token Invalido Aceeso Prohibido') // token invalido acceso prohibido
    }
    
};



// req : Ruta basica El parámetro req representa la petición (request)
// res : El parámetro res representa la respuesta (response)
app.get("/", (req,res)=> {
    res.json({mensaje: "😀😀 Bienvenido al API de un Sistema de Inventario para la Industria Metalurgica😀😀 "})
})

// agregar rutas de bobina, fleje y estadistica
app.use('/' , bobina );
app.use('/' , fleje  );

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()  =>

console.log( `El Servidor Esta Corriendo 🏃🏃🏃 En El Puerto http://localhost:${PORT} ` ))

//controlar conexion
try {
 await db.authenticate()
    console.log( '---> Servidor de Datos Conectado 🖥️')
    db.sync()
    console.log( '------> La Base de Datos se ha Sincornizado 📊' )
} catch (error) {
    console.error( '⚠️ ⚠️  Error en la Conexion De Base de Datos  ⚠️  ⚠️' )
};