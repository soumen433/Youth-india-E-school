const taskModel = require("../model/taskModel")



const createTask = async function (req, res) {
  try {
    let taskdata = req.body


    let saveTask = await taskModel.create(taskdata)

    return res.status(201).send({ status: true, task: saveTask })
  }
  catch (err) {
    return res.status(500).send({ Status: false, msg: "Error", error: err.message })
  }
}

const getTask = async function (req, res) {
  try {
    let allTask = await taskModel.find({ isDeleted: false })
    return res.status(200).send({ msg: "All task fatch", data: allTask })
  }
  catch (err) {
    return res.status(500).send({ Status: false, msg: "Error", error: err.message })
  }
}

const deleteTask = async function (req, res) {
  try {
    let user_Id = req.body.userId
    console.log(user_Id)
    let verification = await taskModel.findOne({ userId: user_Id ,isDeleted:false})
    if (!verification) {
      return res.status(404).send({ Status: false, msg: "task Not Found" })
    }

    if (verification.isDeleted === true) {
      return res.status(400).send({ Status: false, msg: "task already deleted" })
    }

    else {
      let FinalResult = await taskModel.findOneAndUpdate({ userId: user_Id,isDeleted:false }, { isDeleted: true }, { new: true })
      return res.status(200).send({ Status: true, message: " Successfully deleted the task " })
    }
  }
  catch (err) {
    return res.status(500).send({ Status: false, msg: "Error", error: err.message })
  }
}
module.exports.createTask = createTask
module.exports.getTask = getTask
module.exports.deleteTask = deleteTask