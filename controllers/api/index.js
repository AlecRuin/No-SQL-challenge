const router= require("express").Router()
const users=require("./users")
router.get("/users",users)
module.exports=router