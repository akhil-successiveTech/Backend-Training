import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt"

export const AdminCheck = async(req: Request, res: Response, next: NextFunction) => {
    const { email, password, role } = req.body;

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({ message: "User not found!" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({ message: "Invalid password!" });
        }
        if(role === "Admin"){
            return res.status(200).json({message: "Admin access granted!"});
        }
        next();
    }
    catch(err){
        return res.status(400).json({message: err});
    }
}