const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  postATasks,
  getOneTask,
  updateATasks,
  deleteATasks,

} = require('../controllers/tasks');

// router.route('/').get((req, res) => {
//   res.send('all task items')
// })

router.route('/').get(getAllTasks).post(postATasks);
router.route('/:id').get(getOneTask).patch(updateATasks).delete(deleteATasks);

module.exports = router;
