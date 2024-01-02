import express from 'express'
const router=express.Router();
import {register, login, getAllContacts, getSingleAccount, delAccount, update, forgetPassword, verifyotp} from '../controllers/account.controller.js'
import { middlewarefunc } from '../middlewares/middleware.js';

router.post("/signup", register)
router.post("/signin", login)
router.get("/allcontacts", getAllContacts)
// router.get("/allcontacts",middlewarefunc, getAllContacts)
router.get("/singleContact/:id", getSingleAccount)
router.delete("/delete/:id", delAccount)
router.put("/update/:id", update);

router.post("/user-forget", forgetPassword);
router.post("/otp-verify", verifyotp);

export default router;