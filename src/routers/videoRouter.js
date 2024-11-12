import express from "express";
import { trending, watch, edit, remove } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/trending", trending);
videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);
videoRouter.get("/remove", remove);

export default videoRouter;
