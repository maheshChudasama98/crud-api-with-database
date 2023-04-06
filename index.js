const express = require('express')
const app = express()
const port = 8080
const bodyparser = require('body-parser')
const allOpertion = require('./controller/crudApi') 
app.use(bodyparser.json())


console.log();
app.get("/", (req, res) => {
    res.send(`Server is on`)
})

app.get("/user/add",allOpertion.getAdmins)
app.post("/user/add",allOpertion.addAdmin)
// app.post("/user/add",(req, res)=>{
//     req.params.id
// })
app.put("/user/add/:id",allOpertion.putAdmin)

app.listen(port, (err) => err == null ? console.log(`Server run on port http://localhost:${port}/ `) : console.log("Server error", err))