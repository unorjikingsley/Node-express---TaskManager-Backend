const getAllTasks = (req, res) => {
  res.send('all items found');
}

const postATasks = (req, res) => {     // create
  // res.send('a particular task has been created')
  res.json(req.body)
}

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