const express = require('express')
const expresslayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

const app = express()

// database config
const db = require('./config/keys').MongoURI

// connect to mongoDB
mongoose.connect(db, { useUnifiedTopology: true})
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log('bhag bsdk'))

// ejs
app.use(expresslayouts)
app.set('view engine','ejs')

// routes
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server started at port ${PORT}`))