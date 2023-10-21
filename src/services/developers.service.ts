import format from "pg-format"
import { client } from "../database"
import { developersCreate, developersUpdate } from "../interfaces/dev.interface"
import { devInfosCreate } from "../interfaces/devInfo.interface"

export const createDeveloperService = async (data: developersCreate) => {
    const queryFormat = format (
        `INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(data), 
        Object.values(data)
    )

    const queryResult = await client.query(queryFormat)

    return queryResult.rows[0]
}

export const readDeveloperService = async (developerId: string) => {
    const queryString =
        `SELECT 
            "d"."id" AS "developerId",
            "d"."name" AS "developerName",
            "d"."email" AS "developerEmail",
            "di"."developerSince" AS "developerInfoDeveloperSince",
            "di"."preferredOS" AS "developerInfoPreferredOS"
            FROM developers "d"
            LEFT JOIN "developersInfos" "di"
                ON "di"."developerId" = "d"."id"
            WHERE "d"."id" = $1;
        `

    const queryResult = await client.query(queryString, [developerId])

    return queryResult.rows[0]
}

export const updateDeveloperService = async (developerId: string, data: developersUpdate) => {
    const queryFormat = format (
        `UPDATE "developers" SET (%I) = ROW (%L) WHERE "id" = $1 RETURNING *;`,
        Object.keys(data),
        Object.values(data)
    )

    const queryResult = await client.query(queryFormat, [developerId])

    return queryResult.rows[0]
}

export const deleteDeveloperService = async (developerId: string) => {
    await client.query(`DELETE FROM "developers" WHERE "id" = $1;`, [developerId])
}

export const addInfoDeveloperService = async (data: devInfosCreate, developerId: string) => {
    const dataObj = { ...data, developerId }

    const queryFormat = format (
        `INSERT INTO "developersInfos" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(dataObj),
        Object.values(dataObj)
    )

    const queryResult = await client.query(queryFormat)

    return queryResult.rows[0]
}