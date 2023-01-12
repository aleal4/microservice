const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios')

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/todos', (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

change 