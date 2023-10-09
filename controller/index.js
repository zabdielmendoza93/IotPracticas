const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.use(express.urlencoded({ extended: true })); // Middleware para procesar datos del formulario

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/index.html'));
});
app.post('/recibeDatos',(req,res)=>{
    const datosRecibidos =req.body;
    console.log(datosRecibidos);
    if(datosRecibidos.temperatura > 25 ){
        res.send(` Solicitud POST recibida con éxito: 
                La temperatura es ${datosRecibidos.temperatura}
                Hace calor!!!`);
    }else{
        res.send(` Solicitud POST recibida con éxito: 
                La temperatura es ${datosRecibidos.temperatura}
                Esta bien`);
    }
    
})
app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});