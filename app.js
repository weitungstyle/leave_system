//dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const exhbs = require('express-handlebars')
// const flash = require('connect-flash')
// const methodOverride = require('method-override')
// const session = require('express-session')
// const passport = require('./config/passport')
// const handlebarsHelpers = require('./helpers/handlebars-helpers')
// const { getUser } = require('./helpers/auth-helpers')

const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000


//handlebars
app.engine('hbs', exhbs.engine({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
//body-parser
app.use(express.urlencoded({ extended: true }))

//session
// app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }))
// //passport
// app.use(passport.initialize())
// app.use(passport.session())
// //connect-flash message
// app.use(flash())
//method-override
// app.use(methodOverride('_method'))

//storage middleware
// app.use((req, res, next) => {
//   res.locals.success_messages = req.flash('success_messages')
//   res.locals.error_messages = req.flash('error_messages')
//   res.locals.user = getUser(req)
//   next()
// })

//routes
app.use(routes)

app.listen(port, () => {
  console.info(`Example app listening on port ${port}!`)
})

module.exports = app
