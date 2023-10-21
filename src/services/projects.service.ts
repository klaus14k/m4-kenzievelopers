import format from "pg-format"
import { projectCreate, projectUpdate } from "../interfaces/projects.interface"
import { client } from "../database"

export const createProjectService = async (data: projectCreate) => {
    const queryFormat = format (
        `INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(data), 
        Object.values(data)
    )

    const queryResult = await client.query(queryFormat)

    return queryResult.rows[0]
}

export const readProjectService = async (projectId: string) => {
    const queryString =
        `SELECT 
            "p"."id" AS "projectId",
            "p"."name" AS "projectName",
            "p"."description" AS "projectDescription",
            "p"."repository" AS "projectRepository",
            "p"."startDate" AS "projectStartDate",
            "p"."endDate" AS "projectEndDate",
            "d"."name" AS "projectDeveloperName"
            FROM projects "p"
            RIGHT JOIN "developers" "d"
                ON "p"."developerId" = "d"."id"
            WHERE "d"."id" = $1;
        `

    const queryResult = await client.query(queryString, [projectId])

    return queryResult.rows[0]
}

export const updateProjectService = async (projectId: string, data: projectUpdate) => {
    const queryFormat = format (
        `UPDATE "projects" SET (%I) = ROW (%L) WHERE "id" = $1 RETURNING *;`,
        Object.keys(data),
        Object.values(data)
    )

    const queryResult = await client.query(queryFormat, [projectId])

    return queryResult.rows[0]
}