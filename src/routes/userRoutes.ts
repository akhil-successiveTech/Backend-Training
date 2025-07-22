import { Router } from "express";
import { getUsers} from "../controllers/UserController";
import auth from "../middleware/authMiddleware";
import { validateGeoLocation } from "../middleware/validateGeoLocation";
import { validateUser } from "../middleware/validateUser";
import { validateNumericQuery } from "../middleware/validateNumericQuery";
import { firstMiddleware, secondMiddleware, thirdMiddleware } from '../middleware/middlewareChain';

const router = Router();

router.get('/mock-users', getUsers);
// Applied auth middleware
router.get('/mock-users/auth', auth ,getUsers);
// Applied multiple middlewares 
router.get('/chain-example', firstMiddleware, secondMiddleware, thirdMiddleware)
// To check the regional validation
router.get('/secure', validateGeoLocation, (req, res) => {
    res.send('Allowed region!');
  });
// Register user validation
router.post('/register', validateUser, (req, res) => {
    res.status(201).json({ message: 'User registered successfully!' });
});
// Login user validation
router.post('/login', validateUser, (req, res) => {
    res.status(201).json({ message: 'User logged in successfully!' });
});
// Validation of queries
router.post('/query', validateNumericQuery, (req, res) => {
    res.json({ message: 'Query parameters are valid!' });
});

// Scenario to generate possible error codes
// Unauthorized
router.get("/unauthorized", auth, (req, res) => {
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