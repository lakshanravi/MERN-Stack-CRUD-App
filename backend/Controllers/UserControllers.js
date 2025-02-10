const User = require('../Model/UserModel');

//function create for display data
const getAllUser =async(req,res,next)=>{
  //variable ekk assign krgmu
  let users;
  //dan DB eke tyna data tik return krgnn oni
  try{
    users = await User.find();
}
  catch(err){
  console.log(err)
}
  if(!users){
    return res.status(404).json({message:"No users found"});
  }

  //uda ewgen kle users la innwd bln ek. dan users la return krn hdmu
  return res.status(200).json({users});
};


//data add krnn function ekk
const addUsers = async(req,res,next)=>{

  //insert wenn  oni tika variable ekkt asign krnn oni. then e tika body ekt request krnn oni
  const{ name, age, gmail, address} = req.body;
  let users;
  try{
    users=new User({
      name,age,gmail,address
  });
  await users.save();


}catch(err){
  console.log(err);
}

//data insert wen nthnm mokkd wenn oni kyl
if (!users){
  return res.status(404).json({message:"No users found"});

}
//wade hriyt una nm mek return we
return res.status(200).json({users});
};


//id ek mgin user deatil retrieve kirima

const getById=async(req,res,next)=>{

  const Id = req.params.id;
  let user;
  try{
    user=await User.findById(Id);
  }catch(err){
    console.log(err);
  }
  if(!user){
    return res.status(404).json({message:"No users found"});

  }
  return res.status(200).json({user});
}

const updateUser = async(req,res,next)=>{
  const {name, age, gmail, address} = req.body;
  const Id = req.params.id;

  //klin wgem variable nam ekkut hdn inna
  let user;
  try{
    //me palleha method ekin id ek mgin user identify krgena, ara psse dila tyna details tika update krnw
    user=await User.findByIdAndUpdate(Id,{name, age, gmail, address});  
    user = await User.save();   
}
  catch(err){
    console.log(err);
  }
  if(!user){
    return res.status(404).json({message:"No users found"});
  }
  return res.status(200).json({user});

}

const deleteUser=async(req,res,next)=>{
  const id=req.params.id;
  let user;
  try{
    user=await User.findByIdAndDelete(id);
  }
  catch(err){
    console.log(err);
  }
  if(!user){
    return res.status(404).json({message:"can't delete user"});
  }
  return res.status(200).json({user});
}
//dan mek export krgnn oni route ekt

exports.getAllUser = getAllUser;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
