const getAllTasks = (req, res) => {
  res.send('all items found');
}

const postATasks = ((req, res) => {
  res.send('a particular task has been created')
})

const getOneTask = (req, res) => {
  res.send('get one task')
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