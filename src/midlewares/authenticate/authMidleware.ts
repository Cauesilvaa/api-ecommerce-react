import { NextFunction, Request, Response } from "express";
import { Unauthorized } from "../error/apiErrors";
import { verify } from "jsonwebtoken";

export function ensureAuthenticate(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization

    if (!authToken) throw new Unauthorized("Necessario token de autenticação")

    // Bearer u789fuj7jcs7hds78s98sj3io2-kd
    const [, token] = authToken.split(" ")

    try {
        verify(token, "45999e1d-abc9-4051-8846-706a4039fcc0")
        return next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({message: "token invalido"})
    }
}