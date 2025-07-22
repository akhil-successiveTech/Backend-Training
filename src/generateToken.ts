// generateToken.ts
import jwt from 'jsonwebtoken';

const token = jwt.sign({ username: 'testuser' }, 'dummy-secret-key', { expiresIn: '1h' });
console.log('Dummy Token:', token);
