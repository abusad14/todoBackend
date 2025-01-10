const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    taskNumber: { type: String },
    taskDetail: { type: String },
  },
  { timestamps: true }
);

const todoSchema = model("Todo", schema);
module.exports = todoSchema;
