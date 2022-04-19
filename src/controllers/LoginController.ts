import { Request, Response } from "express";
import { TokenService } from "../services/TokenService";

export class LoginController {
  static readonly incomingFakeData = {
    email: "contato@ivsonemidio.com.br",
    password: "2345meia8",
  };
  tokenService: TokenService;

  constructor() {
    this.tokenService = new TokenService();
  }

  public async doLogin(req: Request, res: Response) {
    let { email, password } = LoginController.incomingFakeData;
    if (email === "contato@ivsonemidio.com.br" && password === "2345meia8") {
      let userData = { id: 1, name: "Ivson" };
      let token = this.tokenService.generate(userData);

      if (token) {
        return res.status(200).json({
          auth: true,
          token: token,
          expires_in: "5m",
        });
      }
    }

    return res.status(403).json({
      auth: false,
      errors: {
        message: "Incorrect email or password.",
      },
    });
  }
}
