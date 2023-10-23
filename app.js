const express = require('express');
const app = express();

// app.use()

//routes
app.get('/hello', (req, res) => 
  res.send('first node project')
)

const port = process.env.PORT || 3000;

app.listen(port, () => 
  console.log(`Server is listening on ${port}`)
);
