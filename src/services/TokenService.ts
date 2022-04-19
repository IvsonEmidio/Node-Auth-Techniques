import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export class TokenService {

  public generate(userData: { id: number; name: string }) {
    let payload = {
      id: userData.id,
      name: userData.name,
      issuer: "Developer Team",
    };
    let secretKey = process.env.SECRET;

    if (secretKey) {
      return jwt.sign(payload, secretKey, { expiresIn: "10h" });
    }
    return null;
  }

  public verify(req: Request, res: Response, next: NextFunction) {
    let token = String(req.headers["x-access-token"]);
    let secretKey = process.env.SECRET;

    if (token && secretKey) {
      jwt.verify(token, secretKey, (err) => {
        if (err) {
          return res
            .status(500)
            .json({ auth: false, message: "Failed to authenticate token." });
        }
        next();
      });
    } else {
      return res
        .status(401)
        .json({ auth: false, message: "No token provided." });
    }
  }
}
