import { Router } from "express";
import { developersRoutes } from "./developers.route";
import { projectsRoutes } from "./projects.route";

export const routes = Router();

routes.use('/developers', developersRoutes)
routes.use('/projects', projectsRoutes)