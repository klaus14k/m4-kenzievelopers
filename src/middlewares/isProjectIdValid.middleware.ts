import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import AppError from "../errors/App.error";
import { Iprojects, projectResult } from "../interfaces/projects.interface";

export const isProjectIdValid = async (req: Request, res: Response, next: NextFunction) => {
    const queryResult: projectResult = await client.query(
        `SELECT * FROM "projects" WHERE "id" = $1`,
        [req.params.id]
    )
    
    if (!queryResult.rowCount) {
        throw new AppError("Project not found", 404)
    }

    const foundProject: Iprojects = queryResult.rows[0]

    res.locals = { ...res.locals, foundProject }

    return next()
}