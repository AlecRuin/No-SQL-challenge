const router = require("express").Router()
const User=require("../../models/User")
router.get("/",async (req,res)=>{
    try {
        var AllUsers= await User.find({})
        res.status(200).json(AllUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router