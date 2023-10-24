const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
  // There are different ways to setup this responses
})

const postATasks = asyncWrapper(async (req, res) => {
  // console.log('Request Body:', req.body)
  // create task
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

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

const getOneTask = asyncWrapper(async (req, res) => {
  // res.send('get one task')

  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })

  if (!task) {
    return next(createCustomError(`No task with the id: ${taskID}`, 404))
    // return res.status(404).json({ msg: `No task with the id: ${taskID}` })

    // or

    // const error = new Error('Not Found')
    // error.status = 404
    // return next(error)
    // but you also have to put 'next' in the parameters - (req, res, next)
  }

  res.status(200).json({ task })
})

const updateATasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    // return res.status(404).json({ msg: `No task with the id: ${taskID}` })
    return next(createCustomError(`No task with the id: ${taskID}`, 404))
  }

  res.status(200).json({ task })
  // res.send('a particular task has been updated')
})

const deleteATasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })

  if (!task) {
    // return res.status(404).json({ msg: `No task with the id: ${taskID}` })
    return next(createCustomError(`No task with the id: ${taskID}`, 404))
  }

  res.status(200).json({ task })
  // res.status(200).send('msg')
  // res.send('a particular task has been deleted')
})

module.exports = {
  getAllTasks,
  postATasks,
  getOneTask,
  updateATasks,
  deleteATasks,
}