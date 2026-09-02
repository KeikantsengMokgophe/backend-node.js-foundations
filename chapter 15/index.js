const express = require('express')
const app = new express()
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload') //Page 80

const newPostController = require('./controllers/newPost') // Page 90
const homeController = require('./controllers/home')          //Page 92
const storePostController = require('./controllers/storePost') //Page 92
const getPostController = require('./controllers/getPost')     //Page 92
const validateMiddleware = require('./middleware/validateMiddleware') //Page 93
const newUserController = require('./controllers/newUser')     //page 96
const storeUserController = require('./controllers/storeUser') //Page 97
const loginController = require('./controllers/login') //Page 103
const loginUserController = require('./controllers/loginUser') //page 106
const expressSession = require('express-session');
const authMiddleware = require('./middleware/authMiddleware') //page 106
const AuthenticatedMiddleware = require('./middleware/AuthenticatedMiddleware') //page 106
const logoutController = require('./controllers/logout')
const flash = require('connect-flash');


mongoose.connect('mongodb+srv://newuser1:<your_password>@cluster0-vxjpr.mongodb.net/my_database', {useNewUrlParser: true});

//page 107
app.use(expressSession({ secret: 'keyboard cat' }));

// page 112
global.loggedIn = null
app.use('/*splat', (req, res, next) => {
  loggedIn = req.session.userId
  next()
})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload()) //Page 80

app.use('/posts/store', validateMiddleware) //Page 93
app.use(flash());

//Page 85
const customMiddleWare = (req, res, next) => {
    console.log('Custom middle ware called')
    next()
}
app.use(customMiddleWare)


// --- Auth routes (Chapter 10) ---
app.get('/auth/register', AuthenticatedMiddleware, newUserController) //Page 96
app.post('/users/register',AuthenticatedMiddleware, storeUserController) //Page 97
app.get('/auth/login', AuthenticatedMiddleware, loginController) //Page 103
app.post('/users/login', AuthenticatedMiddleware, loginUserController) //page 106
app.get('/auth/logout', logoutController) //Page 106


// --- Post routes (Chapter 9) ---
app.get('/', homeController)
app.get('/posts/new', authMiddleware, newPostController) //Page 90
app.post('/posts/store', authMiddleware, storePostController)
app.get('/post/:id', getPostController)

app.use((req, res) => res.render('notfound')) //Page 103

app.listen(4000, () => {
    console.log('App listening on port 4000')
})