import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as mysql from 'mysql';

// Configura la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'roott',
  password: 'farmacia@69',
  database: 'phpmyadmin' ,
});

// Conectarse a la base de datos
db.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

//Crea una instancia de Express y configura el middleware necesario:
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configura la conexión a la base de datos MySQL:

  //Define una ruta para recibir las solicitudes POST en '/api/productos':
  app.post('/api/productos', (req, res) => {
    // Realiza las operaciones de inserción en la base de datos utilizando db.query()
    // ...
    // Envía la respuesta al cliente
    res.json({ mensaje: 'Producto ingresado correctamente', exito: true });
  });

  app.get('/api/productos', (req: Request, res: Response) => {
    // Lógica para obtener los productos desde la base de datos u otra fuente de datos
    // ...
    // Envía la respuesta al cliente
    res.json({ productos: [], mensaje: 'Lista de productos obtenida correctamente' });
  });
  
  app.get('/api/productos', (req: Request, res: Response) => {
    const consulta = 'SELECT * FROM productos';
    db.query(consulta, (error, resultados) => {
      if (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ mensaje: 'Error al obtener los productos' });
      } else {
        res.json({ productos: resultados, mensaje: 'Lista de productos obtenida correctamente' });
      }
    });
  });
  

  //Inicia el servidor para escuchar en un puerto específico:
  const puerto = 3002; // Puedes cambiar el puerto si es necesario
app.listen(puerto, () => {
  console.log(`Servidor backend iniciado en el puerto ${puerto}`);
});

