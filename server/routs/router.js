const express = require('express');
const routs = express.Router();
const handlers = require('../handlers/apiQueryhandlers');



routs.get('/', (req,res) =>{handlers.getAll(req,res)});
routs.post('/', (req,res) =>{handlers.addRecipe(req,res)});

routs.get('/:id' , (req,res) =>{handlers.getOne(req,res)});
routs.put('/:id' , (req,res) =>{handlers.updateRecipe(req,res)});

routs.get('/history/:id' , (req,res) =>{handlers.getHistory(req,res)});




module.exports = routs;