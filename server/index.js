const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use("/api/auth",userRoutes);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=> {
    console.log('MongoDb connected');
}).catch((err)=> {
    console.log(err.message);
})

app.get('/',(req,res)=> {
    res.send('hello')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})