const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.session.userId });
    res.render("todos", { todos, session: req.session });
  } catch (err) {
    console.error(err);
    res.redirect("/login");
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      text: req.body.text,
      userId: req.session.userId,
    });
    await todo.save();
    res.redirect("/todos");
  } catch (err) {
    console.error(err);
    res.redirect("/todos");
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id, userId: req.session.userId });
    res.redirect("/todos");
  } catch (err) {
    console.error(err);
    res.redirect("/todos");
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    await Todo.findOneAndUpdate(
      { _id: id, userId: req.session.userId },
      { text }
    );

    res.redirect("/todos");
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).send("Internal Server Error");
  }
};
