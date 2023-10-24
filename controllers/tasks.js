const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.send('all items found');
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

const getOneTask = (req, res) => {
  // res.send('get one task')
  res.json({ id:req.params.id })
}

const updateATasks = (req, res) => {
  res.send('a particular task has been updated')
}

const deleteATasks = (req, res) => {
  res.send('a particular task has been deleted')
}

module.exports = {
  getAllTasks,
  postATasks,
  getOneTask,
  updateATasks,
  deleteATasks,
}