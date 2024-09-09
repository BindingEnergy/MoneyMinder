const express = require('express')
const cors = require('cors')
const {db} = require('./db/db')
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors({}))

// app.get('/',(req,res)=>{
//     res.send('HELLO WORLD');
// })


//routes
readdirSync('./routes').map((route)=>app.use('/',require('./routes/'+route)))


const server = ()=>{
    db()
    app.listen(PORT , () => {
        console.log('listening on port: ', PORT);
    })
}

server()