import express from "express";
import getUsers from "../controller/UserController.js";
import getUsersById from "../controller/GetUser.js";
import createUser from "../controller/CreateUser.js";
import updateUser from "../controller/UpdateUser.js";
import deleteUser from "../controller/DeleteUser.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
