const { response } = require('express');
const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const postATasks = async (req, res) => {
  // console.log('Request Body:', req.body)
  // create task
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

// const postATasks = async (req, res) => {
//   const data = new Task({
//     name: req.body.name,
//     completed: req.body.completed,
//   })

//   try {
//     const dataToSave = await data.save()
//     res.status(201).json(dataToSave)
//   } catch (error) {
//     res.status(400).json({ message: error.message })
//   }
// }

const getOneTask = async (req, res) => {
  // res.send('get one task')
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })

    if (!task) {
      return res.status(404).json({ msg: `No task with the id: ${taskID}` })
    }

    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateATasks = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })

    if (!task) {
      return res.status(404).json({ msg: `No task with the id: ${taskID}` })
    }

    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
  // res.send('a particular task has been updated')
}

const deleteATasks = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })

    if (!task) {
      return res.status(404).json({ msg: `No task with the id: ${taskID}` })
    }

    res.status(200).json({ task })
    // res.status(200).send('msg')
  } catch (error) {
    res.status(500).json({ msg: error })
  }
  // res.send('a particular task has been deleted')
}

module.exports = {
  getAllTasks,
  postATasks,
  getOneTask,
  updateATasks,
  deleteATasks,
}