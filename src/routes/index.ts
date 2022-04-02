import { Router } from "express";
import wellcomeController from "../controllers/wellcomeController";

const routes = Router();

routes.get('/', wellcomeController.store);

export default routes;