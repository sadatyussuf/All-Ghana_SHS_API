// importing of necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

// constant variables
const PORT = process.env.PORT || 3000;
const USERNAME = process.env.MONGODB_USERNAME;
const PASSWORD = process.env.MONGODB_PASSWORD;
const CLUSTER_NAME = process.env.MONGODB_CLUSTER;
const DB_NAME = process.env.MONGODB_DBNAME;

// initializing
dotenv.config()
const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res)=>{
res.send('Hello World')
})


mongoose.connect( 
  `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER_NAME}.m42h9.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },
    ()=>{
    console.log('connected to mdb')
}
);

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });


app.listen(PORT,(err)=>{
    if (err) throw err
    console.log(`Server running on port ${PORT}`)
})          