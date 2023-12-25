import express from 'express'
const router=express.Router();
import {register, login, getAllContacts, getSingleAccount, delAccount, update} from '../controllers/account.controller.js'

router.post("/signup", register)
router.post("/signin", login)
router.get("/allcontacts", getAllContacts)
router.get("/singleContact/:id", getSingleAccount)
router.delete("/delete/:id", delAccount)
router.put("/update/:id", update);

export default router;