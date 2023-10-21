import { Request, Response } from "express"
import { createProjectService, readProjectService, updateProjectService } from "../services/projects.service"

export const createProjectController = async (req: Request, res: Response) => {
    const newProject = await createProjectService(req.body)
    
    return res.status(201).json(newProject)
}

export const readProjectController = async (req: Request, res: Response) => {
    const getProjects = await readProjectService(req.params.id)
    
    return res.status(200).json(getProjects)
}

export const updateProjectController = async (req: Request, res: Response) => {
    const updatedProject = await updateProjectService(req.params.id, req.body)
    
    return res.status(201).json(updatedProject)
}