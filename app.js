const express = require('express');
const helmet = require('helmet');
const ejs = require('ejs');
const app = express();
const db = require('./model/db')

app.set('view engine', 'ejs')
app.set('views', './views')
app.use('/public', express.static(__dirname+'/public'));


// app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mainRouter = require('./router/mainRouter')
app.use('/',mainRouter)

/* middleware?
사이트 --> 요청 --middleware()--> node.js
요청과 응답 사이에 넣는 규칙
해킹같은거 막고 그런거 할 수 있음
*/

app.listen(3000, function(req,res){

    db.sequelize.sync({force:false})
    console.log("서버 실행중")
})
