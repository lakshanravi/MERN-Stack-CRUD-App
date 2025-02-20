const Regi = require('../Model/Register');

const LoginUser=async(req,res,next)=>{


const {gmail,password} =req.body;
try{
  const user= await Regi. findOne({gmail});
  if(!user){
    return res.json({err:"user not found"})
  }
  if(user.password!==password){
    return res.status(400).json({ err: "Incorrect password" })
  }
  else{
    return res.json({err:"incorrect password"})

  }
}
  catch(err){
    console.error(err);
    res.status(500).json({err:"server Err"})
  }


}

exports.LoginUser=LoginUser;