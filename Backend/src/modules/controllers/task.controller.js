const Task = require("../../db/models/task/index");

module.exports.getAllTasks = (req, res) => {
  Task.find().then((result) => res.send({ data: result }));
};

module.exports.createNewTask = (req, res) => {
  const body = req.body;
  if (body.hasOwnProperty("text") && body.hasOwnProperty("isCheck")) {
    Task.create({ text: body.text, isCheck: body.isCheck }).then((_result) =>
      Task.find().then((result) => res.send({ data: result }))
    );
  } else {
    res.status(422).send("Error! Params not correct");
  }
};

module.exports.changeTaskInfo = (req, res) => {
  const body = req.body;

  if (body.hasOwnProperty("_id") && body.hasOwnProperty("text") || body.hasOwnProperty("isCheck")) {
    Task.updateOne(
      { _id: body._id },
      { text: body.text, isCheck: body.isCheck }
    ).then((_result) =>
      Task.find().then((result) => {
        res.send({ data: result });
      })
    );
  } else {
    res.status(422).send("Error! Params not correct");
  }
};

module.exports.deleteTask = (req, res) => {
  if (!req.query._id) return res.status(422).send("Error! Params not correct");
  Task.deleteOne({ _id: req.query._id }).then((_result) =>
    Task.find().then((result) => res.send({ data: result }))
  );
};
