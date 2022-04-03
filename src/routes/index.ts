import { Router } from "express";
import wellcomeController from "../controllers/WellcomeController";

const routes = Router();

routes.get('/', wellcomeController.store);

export default routes;