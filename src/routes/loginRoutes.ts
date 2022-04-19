import { Application } from "express";
import { LoginController } from "../controllers/LoginController";

export function loginRoutes(app: Application){
    const controller = new LoginController();
    app.post('/login',
    controller.doLogin.bind(controller)
    );
}