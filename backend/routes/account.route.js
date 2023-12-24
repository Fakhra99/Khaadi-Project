import express from 'express'
const router=express.Router();
import {register, login, getAllContacts, getSingleAccount} from '../controllers/account.controller.js'

router.post("/signup", register)
router.post("/signin", login)
router.get("/allcontacts", getAllContacts)
router.get("/:id", getSingleAccount)
// router.delete("/:id", controller.destroy)
// router.put("/:id", controller.update);

export default router;