import { Router } from "express";
import UserController from "../controllers/UserController";
import auth from "../middleware/AuthMiddleware";
import validateGeoLocation  from "../middleware/ValidateGeoLocation";
import ValidationUser from "../middleware/ValidateUser";
import validateNumericQuery from "../middleware/ValidateNumericQuery";
import { firstMiddleware, secondMiddleware, thirdMiddleware } from '../middleware/MiddlewareChain';
import { validateLogin } from "../middleware/LoginMiddleware";
import { loginUser , signupUser} from "../controllers/AuthController";
import { validateSignup } from "../middleware/SignupMiddleware";
import { AdminCheck } from "../middleware/AdminMiddleware";

import ValidateGeoLocation from "../middleware/ValidateGeoLocation";

const router = Router();

router.get('/mock-users', UserController.getUsers);
// Applied auth middleware
router.get('/mock-users/auth', auth.handler ,UserController.getUsers);
// Applied multiple middlewares 
router.get('/chain-example', firstMiddleware.handler, secondMiddleware.handler, thirdMiddleware.handler)
// To check the regional validation
router.get('/secure', validateGeoLocation.handler, (req, res) => {
    res.send('Allowed region!');
  });
// Register user validation
router.post('/register', ValidationUser.handler, (req, res) => {
    res.status(201).json({ message: 'User registered successfully!' });
});
// Login user validation
router.post('/login', ValidationUser.handler, (req, res) => {
    res.status(201).json({ message: 'User logged in successfully!' });
});
// Validation of queries
router.post('/query', validateNumericQuery.handler, (req, res) => {
    res.json({ message: 'Query parameters are valid!' });
});

// Signup user in database
router.post('/users/signup', validateSignup, signupUser);
// Login user in database
router.post('/users/login', validateLogin, loginUser);
// Admin route
router.post('/users/admin', AdminCheck, (req, res) => {
  return res.status(200).json({message: "Admin access granted!"})
});
// Only admin can use this router
// router.post('/users/delete', checkRole);
// Route for country validation 
router.get('/countries', ValidateGeoLocation.handler, (req, res) => {
  return res.status(200).json({message: "Access granted!"});
});

// Scenario to generate possible error codes
// Unauthorized
router.get("/unauthorized", auth.handler, (req, res) => {
    const authenticate = req.headers['authorization'];
    if (!authenticate) {
      return res.status(401).json({ error: "Unauthorized access" });
    }
    res.status(200).json({ message: "Authorized" });
});
// Bad-request
router.post("/bad-request", (req, res) => {
    if (!req.body){
      return res.status(400).json({ error: "Name is required" });
    }
    if (!req.body.name) {
      return res.status(400).json({ error: "Name is required" });
    }
    res.status(200).json({message: "Name is present"})
});
// Server-error
router.get("/server-error", (req, res) => {
    throw new Error("Something went wrong");
});
// Asynchronous error will occur 
router.get('/async-error',async (req, res, next) => {
      // Simulate async error
      await Promise.reject(new Error('Something went wrong asynchronously!'));
});


export default router;