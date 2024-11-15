import express from "express";
import { trending } from "../controllers/videoController";
import { join, login } from "../controllers/userController";
import { search } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
