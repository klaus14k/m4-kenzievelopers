import { Request, Response } from "express";
import { addInfoDeveloperService, createDeveloperService, deleteDeveloperService, readDeveloperService, updateDeveloperService } from "../services/developers.service";

export const createDeveloperController = async (req: Request, res: Response) => {
    const newDeveloper = await createDeveloperService(req.body)
    
    return res.status(201).json(newDeveloper)
}

export const readDeveloperController = async (req: Request, res: Response) => {
    const getDevelopers = await readDeveloperService(req.params.id)

    return res.status(200).json(getDevelopers)
}

export const updateDeveloperController = async (req: Request, res: Response) => {
    const updatedDeveloper = await updateDeveloperService(req.params.id, req.body)

    return res.status(200).json(updatedDeveloper)
}

export const deleteDeveloperController = async (req: Request, res: Response) => {
    await deleteDeveloperService(req.params.id)

    return res.status(204).json()
}

export const addInfoDeveloperController = async (req: Request, res: Response) => {
    const newDeveloperInfo = await addInfoDeveloperService(req.body, req.params.id)
    
    return res.status(201).json(newDeveloperInfo)
}