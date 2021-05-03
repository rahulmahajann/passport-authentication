const express = require('express')
const expresslayouts = require('express-ejs-layouts')
const app = express()

// ejs
app.use(expresslayouts)
app.set('view engine','ejs')

// routes
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server started at port ${PORT}`))