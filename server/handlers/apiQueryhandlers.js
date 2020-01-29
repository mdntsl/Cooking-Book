const db = require('../dataBase/dbConnection');

exports.getAll = (req,res)=>{
    db.selectAll('recipes').then((result) =>{
        res.send(result)
    }) 
}

exports.addRecipe = (req,res) =>{
        db.addRecipe(req.body.title,req.body.ingradients,req.body.recipe,req.body.author).then((result) =>{
            res.send(result)  
    });    
}

exports.getOne = (req,res) => {
    db.selectOne('recipes',req.params.id).then((result) =>{
        res.send(result);
    })
}
exports.updateRecipe = (req,res) => {
    db.updateRecipe(req.params.id,req.body.recipe,req.body.ingradients).then((result) =>{
        res.send(result)
    })
}

exports.getHistory = (req,res) => {
    db.getUpdates('updates_history',req.params.id).then((result)=>{
        res.send(result)
    })
}