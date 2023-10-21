import { Router } from "express";
import { createProjectController, readProjectController, updateProjectController } from "../controllers/projects.controller";
import { isProjectIdValid } from "../middlewares/isProjectIdValid.middleware";
import { isDevIdValid } from "../middlewares/isDevIdValid.middleware";
import { verifyDeveloperId } from "../middlewares/verifyDeveloperId.middleware";

export const projectsRoutes = Router();

projectsRoutes.post("/", isDevIdValid, createProjectController)
projectsRoutes.get("/:id", isProjectIdValid, readProjectController)
projectsRoutes.patch("/:id", verifyDeveloperId, isProjectIdValid, updateProjectController)