const todoSchema = require("../model/todoSchema");

// !Api to create a todo task
exports.createTodo = async (req, res) => {
  try {
    const newTodo = await todoSchema.create(req.body);

    // Send success response
    res.status(201).json({
      message: "Todo created successfully",
      data: newTodo,
    });
  } catch (error) {
    console.log("In try catch block", error);
  }
};

// !Api to get All tasks
exports.getTodo = async (req, res) => {
  const data = await todoSchema.find();
  res.status(201).json({
    // message: "Todo created successfully",
    data,
  });
};

// !Api to get one task
exports.getOneTodo = async (req, res) => {
  try {
    const oneData = await todoSchema.findById(req.params.id);
    res.status(201).json(oneData);
  } catch (error) {
    console.log("Error in catch block", error);
  }
};
