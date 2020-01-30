const db = require('../dataBase/queries');

exports.getAll = (req,res)=>{
    db.selectAll('recipes').then((result) => res.send(result)); 
}

exports.addRecipe = (req,res) =>{
        db.addRecipe(req.body).then((result) => res.send(result));    
}

exports.getOne = (req,res) => {
    db.selectOne('recipes',req.params.id).then((result) =>  res.send(result));
}

exports.updateRecipe = (req,res) => {
    const {recipe, ingradients} = req.body;
    db.updateRecipe(req.params.id, recipe, ingradients).then(result => res.send(result));
}

exports.getHistory = (req,res) => {
    db.getUpdates('updates_history',req.params.id).then((result)=> res.send(result));
}