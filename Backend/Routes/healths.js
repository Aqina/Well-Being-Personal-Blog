const express=require('express')
const {
    getHealths,
    getHealth,
    createHealth,
    deleteHealth,
    updateHealth,
}=require('../Controllers/healthController')

const router=express.Router()

//Get all Healths
router.get('/',getHealths)

//Get a single Health
router.get('/:id',getHealth)

//Post a new Health
router.post('/', createHealth)

//Delete a Health
router.delete('/:id', deleteHealth)

//Update a Health
router.patch('/:id',updateHealth)


module.exports=router 