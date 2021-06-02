const express = require('express')
const connection = require('./config/db')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

const app = express()
const PORT = 2000


// static files
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

// set views
app.set('views' , './views')
app.set('view engine', 'ejs')

app.get('/' , (req,res) => {
    
    
    const teamName = req.query.selectTech
    console.log(teamName)

    connection.query(`select * from kgi_employee`, (err,data) => {
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
         
app.get('/team' , (req,res) => {
     
    const teamName = req.query.selectTech
   

    connection.query(`select * from kgi_employee where teamName = '${teamName}'`, (err,data) => {
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

app.get('/project' ,(req,res) => {
    const projectName = req.query.selectProject
    // console.log(projectName)
    connection.query(`select * from kgi_employee where project = '${projectName}'` , (err,data) => {
        if(err) {
            console.log(`Error : ${err.message}`)
        }
        const result = Object.values(JSON.parse(JSON.stringify(data)));
        
          // render our html code
          res.render('index',{
            data:result
        })
    })
})
// to get the chart of specifc employee
app.get('/chart' , (req,res) => {
    const id = req.query.chart_id
    // now based on the above id we will get total hours and billabel hours to create KGI chart

    connection.query(`select * from kgi_employee where id = '${id}' ` , (err,data) => {
        if(err) {
            console.log(`Error : ${err.message}`)
        }
        // with Object.protype approach 
        const result = Object.values(JSON.parse(JSON.stringify(data)));

      
        // console.log(result)
        res.render('index',{
            data:result
        })
        
    })
})
app.get('/api/:chart_id' , (req,res) => {
    const id = req.query.chart_id
    // console.log(`id = ${id}`)
    // now based on the above id we will get total hours and billabel hours to create KGI chart

    connection.query(`select * from kgi_employee where id = '${id}' ` , (err,data) => {
        if(err) {
            console.log(`Error : ${err.message}`)
        }
        // with Object.protype approach 
        const result = Object.values(JSON.parse(JSON.stringify(data)));
        // console.log(result)
        res.send(result)
        
        
    })
})
// app.get('/api/team' , (req,res) => {

//     connection.query(`select teamName from kgi_employee` , (err,data) => {
//         if(err) {
//             console.log(err.message)
//         }
//         const result = Object.values(JSON.parse(JSON.stringify(data)));
//         console.log(result)
//     })
// })
        

// creates GET request route for /api/data page
app.get('/api/data' , (req,res) => {
     connection.query(`select * from kgi_employee`, (err,data) => {
        if(err) {
            console.log(`Error:${err.message}`)
        }
         // with Object.protype approach 
         const result = Object.values(JSON.parse(JSON.stringify(data)));
         res.send(result)
        //  console.log(typeof(result))
        
    })
})


// to get the chart of specifc employee
app.get('/chart/:chart_id' , (req,res) => {
    const id = req.query.chart_id
    console.log(id)
    // now based on the above id we will get total hours and billabel hours to create KGI chart

    connection.query(`select * from kgi_employee where id = '${id}'` , (err,data) => {
        if(err) {
            console.log(`Error : ${err.message}`)
        }
        // with Object.protype approach 
        const result = Object.values(JSON.parse(JSON.stringify(data)));
        // console.log(result)
        res.render('index',{
            data:result
        })
    })
})


         

             
// app.get('/' , (req,res) => {
//      const teamName = req.query.selectpicker

//          connection.query(`select * from kgi_employee where teamName = '${teamName}'` , (err,data) => {
//         if(err) {
//             console.log(`Error:${err.message}`)
//         }
//          // with Object.protype approach 
//          const result = Object.values(JSON.parse(JSON.stringify(data)));
//             console.log(result)
//          // render our html code
//          res.render('index',{
//              data:result
//          })
//     })
// })
app.listen(PORT , () => {
    console.log(`App is running on ${PORT}.....`)
})