import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next) => {
  const {token} = req.headers;   //take the token from header
  if (!token) {         //check if it have the token
    return res.json({success:false,message:"Not Authorized Login Again"})
  }
  try {
    const token_decode = jwt.verify(token,process.env.JWT_SECRET);  //decode the token
    req.body.userId = token_decode.id;
    next();

  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}

export default authMiddleware;