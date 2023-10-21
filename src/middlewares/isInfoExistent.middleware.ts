import { NextFunction, Request, Response } from "express"
import { client } from "../database"
import AppError from "../errors/App.error"
import { devInfosResult } from "../interfaces/devInfo.interface"

export const isInfoExistent = async (req: Request, res: Response, next: NextFunction) => {

    const queryResult: devInfosResult = await client.query(`SELECT "developerSince", "preferredOS" FROM "developersInfos" WHERE "developerId" = $1;`, [req.params.id])

    if (queryResult.rowCount) {
        throw new AppError('Developer infos already exists', 409)
    }

    return next()
}