import { NextFunction, Request, Response } from 'express';
import { ApiErrors } from './apiErrors';


export const errorMidleware = (error: Error & Partial<ApiErrors>, req: Request, res: Response, next: NextFunction) => {
    console.log(error.message);
    const statusCode = error.statusCode ?? 500
    const message = error.statusCode ? error.message : 'Internal server error'
    return res.status(statusCode).json({message: message})
}