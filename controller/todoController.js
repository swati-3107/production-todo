const Todo = require("../model/Todo");

exports.getTodo = async (req, res) => {
  try {
    const result = await Todo.find();
    res.status(200).json({ message: "Todo Fetch Success", result });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something Went Wrong" });
  }
};
exports.addTodo = async (req, res) => {
  try {
    await Todo.create(req.body);
    res.status(201).json({ message: "Todo Add Success" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something Went Wrong" });
  }
};
exports.updateTodo = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Todo Update Success" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something Went Wrong" });
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Todo Delete Success" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something Went Wrong" });
  }
};
