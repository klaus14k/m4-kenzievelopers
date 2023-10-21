import { QueryResult } from "pg";

export type Iprojects = {
    id: number;
    name: string;
    description: string | null | undefined;
    repository: string;
    startDate: Date;
    endDate: Date | null | undefined;
    developerId: number | null | undefined;
}

export type projectCreate = Omit<Iprojects, "id">
export type projectUpdate = Partial<Iprojects>
export type projectRead = Iprojects[]
export type projectResult = QueryResult<Iprojects>