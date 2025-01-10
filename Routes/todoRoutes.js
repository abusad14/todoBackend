const {
  createTodo,
  getTodo,
  getOneTodo,
} = require("../controller/todoController");

const router = require("express").Router();

router.get("/", getTodo);
router.get("/singleData/:id", getOneTodo);
router.post("/", createTodo);

module.exports = router;
