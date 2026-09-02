//Exporting this file and rendering the create.ejs
//Page 89
module.exports = (req, res) => {
    if (req.session.userId) {
       return res.render('create');
    }
    res.redirect('/auth/login')
}
