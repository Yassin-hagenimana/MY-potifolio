const Contacts=require("../Modals/contact")

exports.AddContact=async(req,res)=>{
    try {

const current=new Date()
const date=current.getFullYear()+"-"+(current.getMonth()+1)+"-"+(current.getDate())
const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds()
const contact_date = date +' '+ time

     const contact=new Contacts({
        Names:req.body.Names,
        Email:req.body.Email,
        Message:req.body.Message,
        ContactDate:contact_date
     })
     let contacts= await contact.save()
     res.status(200).json({Contacts:contacts})
    } catch (err) {
      res.status(404).json({Message:err})
    }

}

exports.deleteContact=async(req,res)=>{
 Contacts.findByIdAndDelete({_id:req.params._id})
 .then(contact=>{
   res.status(201).json({contact:contact})
 })
 .catch(err=>{
   res.status(404).json({Message:err})
   console.log(err)
 })
}

exports.deleteAllContacts=async(req,res)=>{
  Contacts.deleteMany()
  .then(Contacts=>{
    res.status(200).json({Contacts:Contacts})
  })
  .catch(err=>{
    res.status(404).json({Message:err})
  })
}

exports.getContacts=async(req,res)=>{
  Contacts.find()
  .then(Contacts=>{
    res.status(200).json({Contacts:Contacts})
  })
  .catch(err=>{
    res.status(404).json({Message:err})
  })
}
exports.getContactById=async(req,res)=>{
  Contacts.findById({_id:req.params._id})
  .then(contact=>{
    res.status(200).json({contact:contact})
  })
  .catch(err=>{
    res.status(404).json({Message:err})
  })
}

exports.getNUmberOfContacts=async(req,res)=>{
  Contacts.countDocuments()
  .then(total=>{
    res.status(200).json(`There is ${total} Contacts`)
  })
  .catch(err=>{
    res.status(404).json({Message:err})
  })
}

exports.updateContacts=async(req,res)=>{
  Contacts.findOneAndUpdate({_id:req.params._id},req.body,{new:true})
  .then(contact=>{
    res.status(200).json({Updated:contact})
  })
  .catch(err=>{
    res.status(404).json({Message:err})
  })
}