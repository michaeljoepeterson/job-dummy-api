const express = require('express');
const router = express.Router();
const {indeedData} = require('./data');

router.get('/',(req,res) => {
    return res.json({
        code:200,
        data:indeedData
    }); 
});

module.exports = {router};