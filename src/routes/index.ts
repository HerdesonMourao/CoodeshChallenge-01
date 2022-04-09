import { Router } from "express";
import cron from 'node-cron';
import articles from './Articles.routes';
import wellcomeController from "../controllers/WellcomeController";
import popularDatabaseController from "../controllers/PopularDatabaseController";
import CronController from "../controllers/CronController";

const routes = Router();

routes.get('/', wellcomeController.store);
routes.get(`/populate`, popularDatabaseController.store);

routes.use('/articles', articles);


cron.schedule("0 0 9 * * *", async () => {
  CronController.store()
}, {
  timezone: 'America/Sao_Paulo'
})

export default routes;