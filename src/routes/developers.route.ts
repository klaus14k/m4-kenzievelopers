import { Router } from "express";
import { addInfoDeveloperController, createDeveloperController, deleteDeveloperController, readDeveloperController, updateDeveloperController } from "../controllers/developers.controller";
import { isEmailValid } from "../middlewares/isEmailValid.middleware";
import { isDevIdValid } from "../middlewares/isDevIdValid.middleware";
import { isInfoExistent } from "../middlewares/isInfoExistent.middleware";
import { isOsValid } from "../middlewares/isOsValid.middleware";

export const developersRoutes = Router();

developersRoutes.post('/', isEmailValid, createDeveloperController)
developersRoutes.get('/:id', isDevIdValid, readDeveloperController)
developersRoutes.patch('/:id', isDevIdValid, isEmailValid, updateDeveloperController)
developersRoutes.delete('/:id', isDevIdValid, deleteDeveloperController)
developersRoutes.post('/:id/infos', isDevIdValid, isInfoExistent, isOsValid, addInfoDeveloperController)