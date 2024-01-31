const express = require('express');
//const cors = require('cors')
const { connection } = require('./db');
const {userRouter}=require('./route/user.route');
const {bookRouter}=require('./route/book.route');

const app = express();

app.use(express.json());


app.use('/user',userRouter);
app.use('/book',bookRouter);

app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log('connected to db');
        console.log(`server running at ${process.env.PORT}`)
    } catch (err) {
        console.log(err)
    }
})

