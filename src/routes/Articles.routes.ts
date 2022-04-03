import { Router } from 'express';

const routes = Router();

routes.post('/');
routes.get('/articles/');
routes.get('/articles/:id');
routes.put('/articles/:id');
routes.delete('/articles/:id');

export default routes;