import { Application } from "express";
import { ClientsController } from "../controllers/ClientsController";
import { TokenService } from "../services/TokenService";

export function clientsRoutes(app: Application){
    const controller = new ClientsController();
    let tokenService = new TokenService();

    app.get(
        '/clients',
        tokenService.verify,
        controller.get.bind(controller)
    );
}