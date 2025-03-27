const mongoose=require('mongoose');
const becrypt=require('bcrypt')
const developerschema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age: {
        type :Number,
    },
    work: {
        type: String,
        enum: ["fullstack" , "Fronted" , "Backend"],
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique : true,  
    },
    salary:{
        type:Number,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

developerschema.pre('save', async function (next) {
    const developer= this;

    if(!developer.isModified('password')) return next();

    try {
        const salt = await becrypt.genSalt(10);

        const hashPassword = await becrypt.hash(developer.password , salt);

        developer.password = hashPassword;
    } catch (error) {
        throw error;
    }
})

developerschema.method.comparePassword = async function(candidatePassword){
    try {
        const isMatch = await becrypt.compare(candidatePassword, this.password);

        return isMatch;


    } catch (error) {
        
        throw error;
    }
}
const Developer = mongoose.model('Developer', developerschema);




module.exports = Developer;



/*
"name":"aman",
"age":21,
"work":"fullstack",
email:"aman@.com",
salary:10000
*/