import { Router } from "express";
import {
  createTodo,
  getAllCombine,
  getAllTask,
  moveTodoToDone,
  moveTodoToProgress,
} from "../controller/todoController";

const router: Router = Router();

router.route("/create").post(createTodo);
router.route("/done/:ID").patch(moveTodoToDone);
router.route("/progress/:ID").patch(moveTodoToProgress);
router.route("/get").get(getAllTask);
router.route("/get-combine").get(getAllCombine);

export default router;
