const { createTodo, getTodo } = require("../controller/todoController");

const router = require("express").Router();

router.get("/", getTodo);
router.post("/", createTodo);

module.exports = router;
