import { getRepository } from "typeorm";
import { Articles } from "../models/Articles";
import { Events } from "../models/Events";
import { Launches } from "../models/Launches";
import apiSpaceFlight from "../services/apiSpaceFlightNews";

class CronController {
  public async store() {
    const articlesRepository = getRepository(Articles);
    const eventsRepository = getRepository(Events);
    const launchesRepository = getRepository(Launches);

    const articlesAPI = await apiSpaceFlight.get(`/articles`);

    for (let i = 0; i < articlesAPI.data.length; i++) {
      const verifyArticlesId = await articlesRepository.findOne(
        articlesAPI.data[i].id
      );

      if (!verifyArticlesId) {
        const createArticles = await articlesRepository.create({
          id: articlesAPI.data[i].id,
          featured: articlesAPI.data[i].featured,
          title: articlesAPI.data[i].title,
          url: articlesAPI.data[i].url,
          imageUrl: articlesAPI.data[i].imageUrl,
          newsSite: articlesAPI.data[i].newsSite,
          summary: articlesAPI.data[i].summary,
          publishedAt: articlesAPI.data[i].publichedAt,
          updatedAt: articlesAPI.data[i].updatedAt,
        });

        await articlesRepository.save(createArticles);

        for (let j = 0; j < articlesAPI.data[i].events; j++) {
          const createEvents = await eventsRepository.create({
            id: articlesAPI.data[i].events.id,
            provider: articlesAPI.data[i].events[j].provider,
          });
        }

        for (let j = 0; j < articlesAPI.data[i].launches; j++) {
          const createLaunches = await launchesRepository.create({
            id: articlesAPI.data[i].events.id,
            provider: articlesAPI.data[i].launches[j].provider,
          });
        }
      }
    }
  }
}

export default new CronController();
