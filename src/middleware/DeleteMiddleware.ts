import { Request, Response, NextFunction } from "express";

export const checkRole = (reqRole: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const {user} = req.body;
        if(!user || user.role !== reqRole){
            return res.status(403).json({ message: "Access denied: insufficient privileges" });
        }
        next();
    };
};