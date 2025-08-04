import { Request, Response, NextFunction, Router } from "express";

class HealthRoute{
    public route: Router;
    // Automatically run when an object of this class gets created
    constructor(){
        this.route = Router();
        this.setupRoute()
    };
    // Setup route and run checkHealth
    private setupRoute(){
        this.route.get('/', this.checkHealth);
    };
    // Send responce that server is healthy
    private checkHealth = (req: Request, res: Response) => {
        res.status(200).json({ status: 'ok', message: 'Server is healthy' });
      };
}

export default new HealthRoute().route;