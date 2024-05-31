const mongoose=require("mongoose")
const bcrypt =require("bcryptjs")
const userSchema=mongoose.Schema(
    {
        name:{
          type:String,required:true
        },
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        pic:{type:String,default:"https://th.bing.com/th/id/R.9f909e47ddfdd7ab255971b2575dcfb8?rik=8JdK90F8aI9J7Q&riu=http%3a%2f%2fwritestylesonline.com%2fwp-content%2fuploads%2f2016%2f08%2fFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg&ehk=at%2bW8ahmVDAWSjLun4vkjMUmmlvUD7psBtJ5Bf9jSfA%3d&risl=&pid=ImgRaw&r=0"}
    }
    ,{
        timestamps:true
    }
)
userSchema.methods.matchPassword=async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password)
}
userSchema.pre("save",async function(next){
    if(!this.isModified){
        next()
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})
const User=mongoose.model("User",userSchema)
module.exports=User