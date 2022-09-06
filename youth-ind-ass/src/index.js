const express=require("express")
const mongoose=require("mongoose")

const route=require("./route/route")

const app=express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://Swetarun:lBf6gTedHw2tfPtQ@cluster0.ebg8a.mongodb.net/India-E-school", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch( err => console.log(err))


app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});