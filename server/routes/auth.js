<<<<<<< HEAD
import express from "express";
import {login,register} from '../controllers/auth.js'
import {upload} from '../middleware/filemanager.js'


const router=express.Router()


router.post('/login',login)
router.post('/register',upload.single('picture'),register)

export default router;

=======
import express from "express";
import {login} from '../controllers/auth.js'


const router=express.Router()


router.post('/login',login)

export default router;

>>>>>>> be4ece29ea09a84ee7ab4d0ef89ac3a3922309b8
