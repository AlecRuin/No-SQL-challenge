const {Schema, model}= require("mongoose")
const reactionSchema=require("./Reaction")
const ThoughtSchema=new Schema(
    {
        thoughtText:{
            type:String,
            trim:true,
            required:"Thought text required"
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        username:{
            type:Schema.Types.ObjectId,
            ref:"User"
        },
        reactions:[reactionSchema]
    }
)
ThoughtSchema.virtual("reactionCount",function(){
    console.log(this.reactions);
    return this.reactions.length
})

const Thought = model("Thought",ThoughtSchema)
module.exports=Thought