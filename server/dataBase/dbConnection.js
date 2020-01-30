const knex = require('knex')({
    client:'mysql',
    connection:{
        host: 'localhost',
        user:'root',
        password:'changeapassword12',
        database:'cookingbook'
    }
}); 

module.exports = knex;