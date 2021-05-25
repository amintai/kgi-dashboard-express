const mysql = require('mysql')
 
 const connection = mysql.createPool({

    // host:'192.168.0.14',
    host:'localhost',
    // user:'demosupport',
    user:'root',
    database:'kgi',
    // password:'tTt7AttSiuJtjl74'
    password:''
    
})
    // create connection
connection.getConnection((err) => {
    if(err){
        console.log(err.message)
    } else {
        console.log(`Database Connected`)
    }
})

module.exports = connection