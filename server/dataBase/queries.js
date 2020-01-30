const knex = require('./dbConnection');

const db ={};

db.selectAll = table => knex.select().table(`${table}`);

db.selectOne = (table,selectedId) => knex(`${table}`).where({Id:`${selectedId}`}).select();

db.addRecipe = (object) => 
    knex('recipes').insert({ Title:object.title, Ingradients: object.ingradients,Recipe: object.recipe, Author: object.author});

db.updateRecipe = (selectedId, recipe, ingradients) => {
    return db.selectOne('recipes', selectedId)
    .then(oldRecipe => 
        knex('updates_history')
        .insert({
            Ingradients: `'${oldRecipe[0].Ingradients}'`,
            Recipe: `'${oldRecipe[0].Recipe}'`, 
            Author: `'${oldRecipe[0].Author}'`,Id:`${selectedId}`}
        ).then(() =>
            knex('recipes')
            .where( {Id:`${selectedId}`})
            .update({
                Ingradients: `'${ingradients}'`,
                Recipe: `'${recipe}'`
            }) )
    )
}

db.getUpdates = (table,id) => db.selectOne(table,id);

module.exports = db;