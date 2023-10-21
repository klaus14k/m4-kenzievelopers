import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import AppError from "../errors/App.error";
import { developersResult } from "../interfaces/dev.interface";

export const isEmailValid = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body

    if (!email) return next()

    const query: developersResult = await client.query(`SELECT * FROM "developers" WHERE "email" = $1;`, [email])

    if (query.rowCount) {
        throw new AppError('Email already exists', 409)
    }

    return next()
}