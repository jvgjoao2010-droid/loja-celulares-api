import express from 'express';
import db from './db.js';
import celularRoutes from './routes/celular.routes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (_request, response) => {
  try {
    await db.query('SELECT 1');
    response.send('PostgreSQL conectado');
  } catch {
    response.status(500).send('Erro ao conectar ao PostgreSQL');
  }
});

app.use('/celulares', celularRoutes);

app.listen(port, () => console.log(`API disponível em http://localhost:${port}`));
