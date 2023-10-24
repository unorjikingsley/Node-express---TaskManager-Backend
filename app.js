const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config()  // secret variables 

//middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//routes
app.get('/hello', (req, res) => 
  res.send('first node project')
)

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks', (req, res) => {})                 - get all the tasks
// app.post('/api/v1/tasks', (req, res) => {})                - create a new task
// app.get('/api/v1/tasks/:id', (req, res) => {})             - get a single task 
// app.patch('/api/v1/tasks/:id, (req, res) => {})            - update task
// app.delete('/api/v1/tasks/:id, (req, res) => {})           - delete a single task

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server is listening on ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
