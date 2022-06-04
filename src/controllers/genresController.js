const db = require('../database/models')

const controller = {
    list:(req, res)=>{
        db.Genre.findAll().then(genres => {
            return res.render('genresList',{genres})
        }).catch(e=>{
            return console.log(e)
        })
    },
    detail:(req, res)=> {
        db.Genre.findByPk(req.params.id).then(genre =>{
            res.render('genresDetail',{genre})
        })
    }
}

module.exports = controller