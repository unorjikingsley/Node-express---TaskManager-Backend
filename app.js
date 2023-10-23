const express = require('express');
const app = express();
const routes = require('./routes/tasks');

//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => 
  res.send('first node project')
)

app.use('api/v1/tasks', tasks)

// app.get('/api/v1/tasks', (req, res) => {})                 - get all the tasks
// app.post('/api/v1/tasks', (req, res) => {})                - create a new task
// app.get('/api/v1/tasks/:id', (req, res) => {})             - get a single task 
// app.patch('/api/v1/tasks/:id, (req, res) => {})            - update task
// app.delete('/api/v1/tasks/:id, (req, res) => {})           - delete a single task

const port = process.env.PORT || 3000;

app.listen(port, () => 
  console.log(`Server is listening on ${port}`)
);
