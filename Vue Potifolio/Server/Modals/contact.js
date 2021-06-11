const mongoose = require('mongoose')

const contactSchema=new mongoose.Schema({

Names:{
    type:String,
    required:[true,"Add your names."],
    minlength:5,
    maxlength:40,
},
Email:{
    type:String,
    required:[true,"Add your email."],
    minlength:5,
    maxlength:100,
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Please add a valid email'],
},
Message:{
    type:String,
    required:[true,"Add your Comment"],
    minlength:5,
   // maxlength:300
},

ContactDate:{
    type:String,
}
})

const Contact=mongoose.model("Contact",contactSchema)
module.exports=Contact