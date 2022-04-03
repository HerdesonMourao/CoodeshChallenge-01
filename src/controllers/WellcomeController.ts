import { Request, Response } from "express";

class wellcomeController {
  public async store(request: Request, response: Response){
    try {
      return response.status(200).json({
        message: 'Back-end Challenge 2021 🏅 - Space Flight News'
      });
    } catch (err) {
      return response.status(500).json({
        error: true,
        message: `Ocorreu um erro: ${err.message}`
      });
    }
  }
}

export default new wellcomeController();