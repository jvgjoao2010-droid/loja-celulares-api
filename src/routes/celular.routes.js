import { Router } from 'express';
import db from '../db.js';

const router = Router();

router.get('/', async (_request, response) => {
  try {
    const { rows } = await db.query('SELECT * FROM celulares ORDER BY id');
    response.json(rows);
  } catch {
    response.status(500).json({ erro: 'Não foi possível buscar os celulares.' });
  }
});

export default router;
