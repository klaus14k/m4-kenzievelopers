import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import AppError from "../errors/App.error";
import { Idevelopers, developersResult } from "../interfaces/dev.interface";

export const isDevIdValid = async (req: Request, res: Response, next: NextFunction) => {
    const queryResult: developersResult = await client.query(
        `SELECT * FROM "developers" WHERE "id" = $1`,
        [req.params.id]
    )
    
    if (!queryResult.rowCount) {
        throw new AppError("Developer not found", 404)
    }

    const foundDeveloper: Idevelopers = queryResult.rows[0]

    res.locals = { ...res.locals, foundDeveloper }

    return next()
}