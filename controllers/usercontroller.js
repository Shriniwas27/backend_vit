import UserModel from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const SignUp = async(req, res) => {
  const { username,email, password } = req.body;
  try {

   const hash = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
        username,
        email,
        password:hash
    })
    newUser.save();
    res.status(201).json({ message: 'User registered successfully',
        username: newUser.username,
        email: newUser.email,
     });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const Login=async(req,res)=>{
    const {email,password}=req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }
    try{
        const user = await UserModel.findOne({email});
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(401).json({error:'Invalid credentials'});
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
        res.json({token,
          userid: user._id
        });
    }catch(error){
        res.status(400).json({error:error.message});
    }
}