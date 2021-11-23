// importing of necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Shsapi = require('./models');
const cors = require('cors')
// initializing
dotenv.config()
const app = express()

// constant variables
const PORT = process.env.PORT || 3000;
// const USERNAME = process.env.MONGODB_USERNAME;
// const PASSWORD = process.env.MONGODB_PASSWORD;
// const CLUSTER_NAME = process.env.MONGODB_CLUSTER;
// const DB_NAME = process.env.MONGODB_DBNAME;

// MiddleWares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())





app.get('/', (req, res)=>{
// res.send('Hello World')
res.json({
        status: 'API Is Working',
        message: 'Welcome to the API of all the Senior High Schools in Ghana',
        endpoints : {
            listAll : ['GET /api/shs','list all school details'],
            listOne : ['GET /api/shs/{id}','retrieve a single school detail']

        }
    });
})

app.get('/api/shs', (req, res)=>{
// res.send('Hello World')
Shsapi.find()
.then((data)=>{
    console.log('Items Retrieved.....')
     res.send(data)
})
.catch((err)=>{
    console.error(err)
})
})


app.get('/api/shs/:id', (req,res)=>{
    const id = req.params.id;

    Shsapi.findOne({'shs_id':id})
        .then(data => {
        if (!data)
            res.status(404).send({ message: `Not found Data with id ${id} ` });
        else res.send(data);
        })
        .catch(err => {
        res
            .status(500)
            .send({ message: `Error retrieving Data with id ${id}` });
        });
})

mongoose.connect( 
// `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER_NAME}.4xoos.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
process.env.DB_URL
,
{
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIndex: true,
},
    ()=>{
    console.log('connected to mdb')
}
);

app.listen(PORT,(err)=>{
    if (err) throw err
    console.log(`Server running on port ${PORT}`)
})          