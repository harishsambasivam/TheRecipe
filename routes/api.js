const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe.js');



router.get('/recipe/:id',function(req,res){
  res.send({type:'GET'});
});

router.put('/recipe',function(req,res){
  res.send({type:'PUT'});
});

router.post('/recipe',function(req,res){
  Recipe.create({"title":"Idly","ingredients":"Rice,Water,spices","content":"lorem20"});



});

router.delete('/recipe/:id',function(req,res){
  res.send({type:'DELETE'});
});

module.exports= router;
