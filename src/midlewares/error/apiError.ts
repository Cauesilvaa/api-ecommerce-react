import { NextFunction, Request, Response } from 'express';


export const errorMidleware = (erro: Error ,req: Request, res: Response, next: NextFunction) => {
    console.log(erro);
    return res.status(500).json("Caiu no midleware de erro")
}