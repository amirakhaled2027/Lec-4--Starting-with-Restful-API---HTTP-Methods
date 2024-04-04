const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(bodyParser.json())

// let Users = [{name:"amira", email:"amira@gmail.com", phone:"01234"}]
let Users = []

app.get("/users", function(req,res){
    res.json({Users:Users, Message:"Done"})
})

app.post("/users", function(req, res){
    console.log(req.body)
    // res.json({ Message:"User's Info was added"})

})



app.put("/users", async function(req, res) {
    let { name, email } = req.body;
    console.log(name, email);
    
    await Users.find((usr, index) => {
      if (usr.name === name) {
        Users[index] = { name:usr.name, phone:usr.phone, email:email};
        return true;
      }
    });
    res.json({Message: "Done, It's updated successfully!!!"})
  });


app.delete("/users", async function(req, res) {
    let { name } = req.body;
    
    await Users.find((usr, index) => {
      if (usr.name === name) {
       Users.splice(Users[index], 1)
        return true;
      }
    });
    res.json({Message: "Done, user delete successfully!!!"})
  });





// app.use(function(req, res, next){
//     console.log("A new request is received at" + new Date().toISOString)
//     next()
// })

// app.get('/users', function(req, res, next){
//     console.log("Done")
//     res.json({name:"amira", id:"1"})
//     next()
// })

// app.use('/users', function(req,res,next){
//     console.log("A new request is ended at " + new Date().toISOString)
//     next()
// })



app.listen(2000)
