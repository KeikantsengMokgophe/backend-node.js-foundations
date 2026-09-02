const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/my_database');

// Deleting a document
var id = "6a86d9b001ca24fce09017f3"

BlogPost.findByIdAndDelete(id)
.then((blogpost) => {
    console.log(blogpost);
})
.catch((error) => {
    console.log(error);
});

// Updating a document
// var id = "6a86d9b001ca24fce09017f3"

// BlogPost.findByIdAndUpdate(id, {
//     title:'python'
// })
// .then((blogpost) => {
//     console.log(blogpost);
// })
// .catch((error) => {
//     console.log(error);
// });

// finding a document using its ID
// var id = "6a86d9b001ca24fce09017f3"

// BlogPost.findById(id)
// .then((blogpost) => {
//     console.log(blogpost);
// })
// .catch((error) => {
//     console.log(error);
// });

// Finding all the documents find()
// BlogPost.find({})
// .then((blogposts) => {
//     console.log(blogposts);
//  })
//  .catch((error) => {
//     console.log(error);
//  })


// BlogPost.create({
//     title: 'kantse likes coding',
//     body: 'If you want to be a good programmer, you have to practice coding everyday'

// })
//  .then((blogpost) => {
//         console.log(null, blogpost);
//     })
//     .catch((error) => {
//         console.log(error);
//     });