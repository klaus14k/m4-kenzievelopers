import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";

export const isOsValid = async (req: Request, res: Response, next: NextFunction) => {

    if (req.body.preferredOS !== "Windows" && req.body.preferredOS !== "Linux" && req.body.preferredOS !== "MacOS") {
        throw new AppError("Invalid OS option.", 400)
    }

    return next()
}