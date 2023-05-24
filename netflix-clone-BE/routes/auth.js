//rutas para autenticar usuarios

import { Router } from 'express';
const {register, login} = require("../controllers/authController");

const router = Router();

// logea un usuario
router.post("/login", login );
//crear un usario
router.post('/register', register)

export default router

