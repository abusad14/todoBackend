const todoSchema = require("../model/todoSchema");

exports.getTodo = async (req, res) => {
  const data = await todoSchema.find();
  res.status(201).json({
    // message: "Todo created successfully",
    data,
  });
};

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
