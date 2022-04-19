import { Request, Response } from "express";

export class ClientsController {
  public async get(req: Request, res: Response) {
    return res.status(200).json([
      {
        id: 7,
        name: "Ivson Emidio",
        age: 22,
        created_at: new Date('2000-03-27')
      },
      {
        id: 8,
        name: "The world alive",
        age: 44,
        created_at: new Date('2010-12-11')
      }
    ]);
  }
}
