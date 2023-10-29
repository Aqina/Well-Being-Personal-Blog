const mongoose=require('mongoose')

const Schema=mongoose.Schema

const healthSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true})//last updated timings shows up

module.exports=mongoose.model('health',healthSchema)

//health.find()