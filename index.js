const express = require('express')

const app = express();

// routes
app.get('/',(req,res) => {
    res.send('Hello world')
});

// mock data 
const courses = [
    {
        id:1,
        name:"Learn Node.js From zero to hero."
    },
    {
        id:2,
        name:"Learn Vue.js From zero to hero."
    },
    {
        id:3,
        name:"Learn React.js From zero to hero."
    },
    {
        id:4,
        name:"Learn CSS From zero to hero."
    }
]
// routes params 
// url: http://localhost:3000/api/course/1?sort=name
app.get('/api/course/:id',(req,res) => {
    // routes parameters
    console.log('req.params = ',req.params)
    // query parameters
    console.log('req.query = ',req.query)

    console.log('id = ',req.params.id)
    res.send([1,2,3,4,4])
})

app.get('/api/posts/:year/:month',(req,res) => {
    res.send(req.params)
})
// PORTS
const port = process.env.PORT || 3000
app.listen(port,() => {
    console.log(`http://localhost:${port}`)
})