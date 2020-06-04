const express = require('express');
const router = express.Router();
const {indeedData,indeedData2} = require('./data');

router.get('/',(req,res) => {
		let page = req.query.page;
		let data = indeedData;
		if(page > 2){
			return res.json({
        code:200,
        data:[]
    }); 
		}
		if(page == 2){
			data = indeedData2
		}

    return res.json({
        code:200,
        data
    }); 
});

module.exports = {router};