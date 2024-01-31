const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(token){
        jwt.verify(token,"masai",(err,decoded)=>{
            if(decoded){
                next()
            }else{
                res.status(400).send({"msg":"You are not authorized"})
            }
        })
    }else{
        res.status(400).send({"msg":"You are not authorized"})

    }
    
}

module.exports={
    auth
}


