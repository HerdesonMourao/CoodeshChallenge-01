import { Router } from "express";
import wellcomeController from "../controllers/WellcomeController";
import articles from './Articles.routes';

const routes = Router();

routes.get('/', wellcomeController.store);

routes.use('/articles', articles);

export default routes;