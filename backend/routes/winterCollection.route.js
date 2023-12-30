import  express  from "express";
import { createWinterCollection, getWinterCollection } from "../controllers/winterCollection.controller.js";
// import {checkRole} from '../middlewares/middleware.js'
import multer from 'multer';
import path from 'path';
import {  middlewarefunc } from "../middlewares/middleware.js";
const router= express.Router();

const storage=multer.diskStorage({
    destination:(req, file , cb)=>{
        cb(null, "upload/")
    },
    filename:(req, file , cb)=>{
        cb(null, Date.now()+ path.extname(file.originalname))
    }
})
const upload=multer({
    storage:storage
})
// Protected route (requires admin role)
router.post('/winter-collection', middlewarefunc, upload.single('image'), createWinterCollection);
// router.post('/winter-collection', checkRole('admin'), upload.single('image'), createWinterCollection);
router.get("/getwinter-collection", getWinterCollection)

export default router;