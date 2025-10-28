const express = require('express')
const app = express();
app.get('/', (req, res) => {
  res.json(
    [
        {
            id: 1,
            name: "Kahaf",
            age: 30
        },
        {
            id: 2,
            name: "Sameer",
            age: 25
        },
        {
            id: 3,
            name: "Charlies-Boy",
            age: 30
        },
         {
            id: 4,
            name: "Afham Mughal",
            age: 39
        },
    ]
  )
})
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})





