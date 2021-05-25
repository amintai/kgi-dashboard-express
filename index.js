const express = require('express')
const connection = require('./config/db')
const bodyParser = require('body-parser')



const app = express()
const PORT = 3000


// static files
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

// set views
app.set('views' , './views')
app.set('view engine', 'ejs')

app.get('/' , (req,res) => {
    connection.query('select * from kgi_employee', (err,data) => {
        if(err) {
            console.log(`Error:${err.message}`)
        }
         // with Object.protype approach 
         const result = Object.values(JSON.parse(JSON.stringify(data)));
            
         // render our html code
         res.render('index',{
             data:result
         })
    })
})






app.listen(PORT , () => {
    console.log(`App is running on ${PORT}.....`)
})