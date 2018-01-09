const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const db = "mongodb://makssie:33619898@ds133331.mlab.com:33331/mean_study";
mongoose.Promise = global.Promise;
mongoose.connect(db, {
  useMongoClient: true
  },
  function(err){
  if(err){
      console.error("Error! "+err);
  }else{
    console.log('------------------------------------');
    console.log("CONECTADO");
    console.log('------------------------------------');
  }
})﻿

router.get('/', (req,res) => {
  res.send("Funcionou a API");
})

module.exports = router;