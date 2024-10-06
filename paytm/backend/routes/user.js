const express = require("express");
const { z, ZodError } = require("zod");
const {User,Account} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const {authMiddleware} = require("../middleware")

const router = express.Router();

const userRegistrationSchema = z.object({
  userName: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string().min(6),
});

const userLoginSchema = z.object({
  userName: z.string().min(1),
  password: z.string().min(1),
});

function createJWTToken({ _id }) {
  const token = jwt.sign({ userId: _id }, JWT_SECRET);
  return token;
}

router.post("/signIn", async (req, res) => {
  const userDetails = req.body;
 
    const {success} = userLoginSchema.safeParse(userDetails);
    if(!success){
       return res.status(411).send("Some issues with the input")
    }
    const user = await User.findOne({
      userName: userDetails.userName,
      password: userDetails.password
    });
    console.log(user)
    if (!user) {
     return res.status(411).send("User not found");
    }
    const token = createJWTToken(user);
    res.json({ token });

});

router.post("/signUp", async (req, res) => {
  const userDetails = req.body;

  const { success } = userRegistrationSchema.safeParse(userDetails);

  if(!success){
    return res.status(411).json({
        message: "Incorrect inputs please check again"
    })
  }
  const existingUser = await User.findOne({ userName: userDetails.userName});
  if(existingUser){
    return res.status(411).json({
        message: "This User is already Registered"
    })
  }
  const user = await User.create(userDetails);

  await Account.create({
    userId: user._id,
    balance: 1+ Math.random()*1000
  })


  const token = createJWTToken(user);
  res.json({ message: "User Created Successfully", token: token });
});

// router.put("/changePassword",(req, res) => {});

router.put("/", authMiddleware,async (req, res) => {
    const userDetails = req.body;
    if( userDetails.userName){
        return res.status(411).send("Email is not changable")
    }
    const user  = await User.findById(req.headers.userId);
    const updatedUser =  await User.findOneAndUpdate({_id: req.headers.userId},userDetails,{new: true});

    console.log(user);
    console.log(updatedUser)
    res.json({
        message: "Updated successfully"
    })
});

router.get("/bulk",authMiddleware,async(req,res) =>{
    const filter = req.query.filter;
    console.log(filter)
try{
    const users = await User.find({$or:[
        {firstName: {
            $regex: filter
        }
        },
        {lastName: {
            $regex: filter
        }}
    ]
    })

    res.json(users)
  }
  catch(err){
    res.status(411).json({
      "message": "Please SignIn again your token got expired"
    })
  }
});


router.get("/getAllUsers",async(req,res) =>{
  const users = await User.find({})
  res.send(users)
})


module.exports = router;
