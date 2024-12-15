const express = require('express')
const router = express.Router();

router.get("/", function(req,res){
    res.render('index',{titel:"EJS 메이페이지"})
})

router.get("/about", function(req,res){
    res.send('about page')
})

router.post("/postapi", function(req,res){
    let body = req.body;
    console.log(body)
    res.send("POST API")
})
module.exports = router
