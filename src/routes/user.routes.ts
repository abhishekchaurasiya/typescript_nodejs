import { Router } from "express";
import userController from "../controller/user.controller.js";

const router: Router = Router();

router.post("/create", userController.createUser);
router.get("/getall", userController.getAllUser);
router.get("/get/:id", userController.getOneUser);
router.put("update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

export default router;

