const express = require('express');
const app = express()
require("dotenv").config();
const db=require('./db')
const userRoute=require('./routes/userRoutes')
const developerRoute=require('./routes/developerRoute')
const customerhotel=require('./routes/hotelRoutes')
const movies=require('./routes/moviesRoutes');
const passport = require('./auth')
const taskroute=require('./routes/taskroute')
const studentroute=require('./routes/studentsRoute')

app.use(express.json())



const port = process.env.PORT || 3000;
const authmid = passport.authenticate('local', {session:false})

app.use('/api/users',userRoute);
app.use('/api/developers',developerRoute);
// app.use('/api/hotel',customerhotel);
// app.use('/api/movies',movies);
// app.use('/api/developers/auth')
app.use('/api/tasks',taskroute)
app.use('/api/students',studentroute)

app.get("/", (req, res) => {
    res.send('This is HOME Page')
})


app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
  
})
