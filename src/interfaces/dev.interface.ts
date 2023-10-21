import { QueryResult } from "pg";

export type Idevelopers = {
    id: number;
    name: string;
    email: string;
}

export type developersCreate = Omit<Idevelopers, "id">
export type developersUpdate = Partial<Idevelopers>
export type developersRead = Idevelopers[]
export type developersResult = QueryResult<Idevelopers>