import { QueryResult } from "pg";

export type OS = "Windows" | "Linux" | "MacOS"

export type IdevInfos = {
    id: number;
    developerSince: Date;
    preferredOS: OS;
    developerId: number;
}

export type devInfosCreate = Omit<IdevInfos, "id">
export type devInfosUpdate = Partial<IdevInfos>
export type devInfosRead = IdevInfos[]
export type devInfosResult = QueryResult<IdevInfos>