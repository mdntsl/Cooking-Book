const knex = require('knex')({
    client:'mysql',
    connection:{
        host: 'localhost',
        user:'root',
        password:'changeapassword12',
        database:'cookingbook'
    }
});

    const db ={};

    db.selectAll = (table) =>{
        return knex.select().table(`${table}`)
    }

    db.selectOne = (table,selectedId) =>{
        return knex(`${table}`).where({Id:`${selectedId}`}).select()
    }

    db.addRecipe = (title,ingradients,recipe,author) => {
        return knex('recipes')
        .insert({ Title:title, Ingradients: ingradients,Recipe: recipe, Author: author})
    }

    db.updateRecipe = async (selectedId,recipe,ingradients) =>{
        let oldRecipe = await db.selectOne('recipes',selectedId).asCallback((result)=>{
             return result;
        })
           return knex('updates_history')
                .insert({Ingradients:`'${oldRecipe[0].Ingradients}'`,Recipe:`'${oldRecipe[0].Recipe}'`, Author: `'${oldRecipe[0].Author}'`,Id:`${selectedId}`})
                .then((result) =>{
                    return knex('recipes')
                    .where( {Id:`${selectedId}`})
                    .update({
                        Ingradients: `'${ingradients}'`,
                        Recipe:`'${recipe}'`
                    })
                })
                  
             
            }

    db.getUpdates =(table,id) => {
       return  db.selectOne(table,id)
    }

    module.exports = db;

