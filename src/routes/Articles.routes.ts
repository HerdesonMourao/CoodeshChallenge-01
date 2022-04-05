import { Router } from 'express';
import ArticlesController from '../controllers/ArticlesController';

const routes = Router();

routes.post('/', ArticlesController.store);
routes.get('/', ArticlesController.index);
routes.get('/:id', ArticlesController.show);
routes.put('/:id', ArticlesController.update);
routes.delete('/:id', ArticlesController.delete);

export default routes;