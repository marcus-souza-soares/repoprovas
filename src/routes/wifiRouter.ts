import { Router } from "express";
import {
  getUnique,
  getAll,
  create,
  deleteWifi,
} from "../controllers/wifiControler.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { schemaValidate } from "../middlewares/validateSchema.js";
import { wifiSchema } from "../schemas/wifiSchema.js";

const wifiRouter = Router();

wifiRouter.get("/wifis", authMiddleware, getAll);
wifiRouter.post(
  "/insert/wifi",
  authMiddleware,
  schemaValidate(wifiSchema),
  create
);
wifiRouter.get("/wifi/:id", authMiddleware, getUnique);
wifiRouter.delete("/wifi/delete/:id", authMiddleware, deleteWifi);

export default wifiRouter;
