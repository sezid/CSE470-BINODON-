<<<<<<< HEAD
import express from 'express'

import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from '../controllers/users.js'
import { verifyToken } from '../middleware/auth.js'
import { getUserPosts } from '../controllers/posts.js'

const router = express.Router()

/* Read */
router.get('/:id',verifyToken,getUser)
router.get('/:id/friends',verifyToken,getUserFriends)
router.get("/:userId/posts", verifyToken, getUserPosts);

// Update
router.patch('/:id/:friendId',verifyToken,addRemoveFriend)


=======
import express from 'express'
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from '../controllers/users.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

/* Read */
router.get('/:id',verifyToken,getUser)
router.get('/:id/friends',verifyToken,getUserFriends)

// Update
router.patch('/:id/:friendId',verifyToken,addRemoveFriend)


>>>>>>> be4ece29ea09a84ee7ab4d0ef89ac3a3922309b8
export default router;