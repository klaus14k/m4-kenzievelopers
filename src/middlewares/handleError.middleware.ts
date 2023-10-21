import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";

export const handleErrors = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError){
        return res.status(error.status).json({message: error.message})
    }

    console.log(error)
    return res.status(500).json({
        message: "Internal server Error.",
        errorName: error.name,
        errorMessage: error.message
    })
}