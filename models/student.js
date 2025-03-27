const mongoose=require('mongoose')
const schema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        rollnumber:{
            type:Number,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        studentClass:{
            type:Number,
            required:true
        },
        grade:{
            type:String,
            required:true
        }
    }
)


const Student = mongoose.model('Student',schema);

module.exports=Student;