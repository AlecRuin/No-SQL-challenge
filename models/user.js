const {Schema,model}=require("mongoose")

const UserSchema=new Schema({
    username:{
        type:String,
        trim:true,
        required:"Username is required",
        unique:true
    },
    email:{
        type:String,
        required:"Email is required",
        unique:true,
        match: [/.+@.+\..+/]
    },
    notes:[//one to many
        {
            type:Schema.Types.ObjectId,
            ref:"thoughts"
        }
    ],
    friends:[
        {
            type:Schema.Types.ObjectId,
            ref:"user"
        }
    ]
})
UserSchema.virtual("username").get(function(){
    console.log(this.friends);
    return this.friends.length()
})


const user=model("user",UserSchema)
module.exports=user