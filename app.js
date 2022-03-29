const express = require("express")
const app = express()
const port = 3001
const modulSendiri = require("./testmodul")

app.set('views', './views') // specify /view dir ke folder kita sendiri testejs
app.set('view engine', 'ejs') // register the template engine



app.get("/",(req,res)=>{

    let buah = [
        {nama : "Mango"},
        {nama : "Apple"},
        {nama : "Jeruk"}
    ]

    {
        res.render("index",{
            nama : "Ihsan",
            umur : 27,
            buah : buah
        })
    }
})

app.get("/:nama",(req,res)=>{
    const modulTesting = modulSendiri.tambah(3,7)
    res.send(`Halo nama saya : ${req.params.nama} Lagi test coba req ${modulTesting}`)
})

app.listen(port,()=> {
    console.log(`Contoh app listen di http://localhost:${port}`)
})