const router = require("express").Router()
const Thought = require("../../models/Thought")

router.get("/",async(req,res)=>{
    try {
        var AllThoughts = Thought.find({})
        res.status(200).json(AllThoughts)
    } catch (error) {
        console.log(err);
        res.status(500).json(error)
    }
})
router.get("/:id",async(req,res)=>{
    try {
        var SingleThought = Thought.findById(
            {_id:req.params.id}
        )
        res.status(200).json(SingleThought)
    } catch (error) {
        console.log(err);
        res.status(500).json(error)
    }
})
module.exports=router