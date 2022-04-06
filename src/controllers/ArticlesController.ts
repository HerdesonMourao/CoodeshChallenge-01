import { Request, response, Response } from "express";
import { getRepository } from "typeorm";
import { Articles } from "../models/Articles";
import { Events } from "../models/Events";
import { Launches } from "../models/Launches";

class articlesController {
  public async store(request: Request, response: Response){
    try {
      const articlesRepository = getRepository(Articles);
      const eventsRepository = getRepository(Events);
      const launchesRepository = getRepository(Launches);

      const {
        featured,
        title,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt,
        events,
        launches,
      } = request.body;

      const newArticles = articlesRepository.create({
        featured,
        title,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt
      });

      const article = await articlesRepository.save(newArticles);

      for(let i = 0; i < events.length; i++){
        const newEvents = eventsRepository.create({
          id_articles: article.id,
          provider: events[i].provider
        });

        await eventsRepository.save(newEvents);
      }

      for(let i = 0; i < launches.length; i++){
        const newLaunches = launchesRepository.create({
          id_articles: article.id,
          provider: launches[i].provider
        });

        await launchesRepository.save(newLaunches);
      }

      return response.status(200).json({ message: 'Artigo cadastrado com sucesso!'});
    } catch (err: any) {
      return response.status(500).json({
        message: `Ocorreu um erro ao tentar cadastrar um novo artigo: ${err.message}`,
      });
    }
  }

  public async index(request: Request, response: Response) {
    try {
      const articlesRepository = getRepository(Articles);

      const { offset, limit} = request.query;

      const articles = await articlesRepository.createQueryBuilder('articles')
      .select('*')
      .offset(Number(offset))
      .limit(Number(limit))
      .getRawMany()

      return response.status(200).json(articles);
    } catch (err: any) {
      return response.status(500).json({
        message: `Ocorreu um erro ao tentar listar um artigo: ${err.message}`,
      });
    }
  }

  public async show(request: Request, response: Response) {
    try {
      const articlesRepository = getRepository(Articles);

      const { id } = request.params;

      const articlesById = await articlesRepository.findOne(id);

      if (!articlesById) {
        return response.status(404).json({ message: "artigo não existe" });
      }

      return response.status(200).json(articlesById);
    } catch (err: any) {
      return response.status(500).json({
        message: `Ocorreu um erro ao tentar listar o artigo expecífico: ${err.message}`,
      });
    }
  }

  public async update(request: Request, response: Response){
    try {
      const articlesRepository = getRepository(Articles);
      const eventsRepository = getRepository(Events);
      const launchesRepository = getRepository(Launches);

      const { id } = request.params;

      const {
        featured,
        title,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt,
        events,
        launches,
      } = request.body;

      const articlesById = await articlesRepository.findOne(id);

      if (!articlesById) {
        return response.status(404).json({ message: "artigo não existe" });
      }

      articlesById.featured = featured;
      articlesById.title = title;
      articlesById.url = url;
      articlesById.imageUrl = imageUrl;
      articlesById.newsSite = newsSite;
      articlesById.summary = summary;
      articlesById.publishedAt = publishedAt;

      const article = await articlesRepository.save(articlesById);

      for(let i = 0; i < events.length; i++){
        const updateEvents = await eventsRepository.findOne({
          id_articles: article.id
        });

        updateEvents.provider = events[i].provider;

        await eventsRepository.save(updateEvents);
      }

      for(let i = 0; i < launches.length; i++){
        const updateLaunches = await launchesRepository.findOne({
          id_articles: article.id
        });

        updateLaunches.provider = launches[i].provider;

        await launchesRepository.save(updateLaunches);
      }

      return response.status(200).json({ message: 'Artigo atualizado com sucesso!'});
    } catch (err: any) {
      return response.status(500).json({
        message: `Ocorreu um erro ao tentar atualizar um artigo: ${err.message}`,
      });
    }
  }

  public async delete(request: Request, response: Response) {
    try {
      const articlesRepository = getRepository(Articles);
      const eventsRepository = getRepository(Events);
      const launchesRepository = getRepository(Launches);

      const { id } = request.params;

      const articlesById = await articlesRepository.findOne(id);

      if (!articlesById) {
        return response.status(404).json({ message: "artigo não existe" });
      }

      const articles = await articlesRepository.delete(id);
      const events = await eventsRepository.createQueryBuilder()
      .delete()
      .from(`events`)
      .where("id_articles = :id", { id: id })
      .execute()

      const launches = await launchesRepository.createQueryBuilder()
      .delete()
      .from(`launches`)
      .where("id_articles = :id", { id: id })
      .execute()

      return response.status(200).json({ message: `Artigo apagado com sucesso` });
    } catch (err: any) {
      return response.status(500).json({
        message: `Ocorreu um erro ao tentar deletar o artigo expecífico: ${err.message}`,
      });
    }
  }
}

export default new articlesController();
