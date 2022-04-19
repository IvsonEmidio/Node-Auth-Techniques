import { Request, Response } from "express";

export class ClientsController {
  public async get(req: Request, res: Response) {
    return res.status(200).json([
      {
        id: 7,
        name: "Ivson Emidio",
        age: 22,
      },
    ]);
  }
}
