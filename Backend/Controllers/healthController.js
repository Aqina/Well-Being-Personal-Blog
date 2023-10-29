const Health=require('../models/healthModel')
const mongoose=require('mongoose')

//Get all Healths
const getHealths=async(req,res) => {
    const healths=await Health.find({}).sort({createdAt:-1})
    res.status(200).json(healths)
}

//Get a single Health
const getHealth=async(req,res) => {
    const{ id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({mssg:'No such blogs'})
    }

    const health=await Health.findById(id)

    if(!health){
        return res.status(404).json({mssg:'No such blogs'})
    }
    res.status(200).json(health)
}

//Create a new Health
const createHealth=async(req,res) => {
    const {title,body}=req.body

    let emptyFields=[]

    if(!title){
        emptyFields.push('title')
    }
    if(!body){
        emptyFields.push('body')
    }
    if(emptyFields.length>0){
        return res.status(400).json({error:'Please fill in all the fields',emptyFields})
    }

    try{
        const health=await Health.create({title,body})
        res.status(200).json(health)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
    // res.json({mssg: 'Post a new Health'})
}


//Delete a Health
const deleteHealth=async(req,res) => {
    const{ id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({mssg:'No such blogs'})
    }

    const health=await Health.findOneAndDelete({_id:id})
    if(!health) {
        return res.status(400).json({error: 'No such blogs'})
      }
    
      res.status(200).json(health)
}


//Update a Health
const updateHealth=async(req,res) => {
    const{ id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({mssg:'No such Blogs'})
    }

    const health=await Health.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if (!health) {
        return res.status(400).json({error: 'No such blogs'})
      }
    
      res.status(200).json(health)
}


module.exports={
    getHealths,
    getHealth,
    createHealth,
    deleteHealth,
    updateHealth
}