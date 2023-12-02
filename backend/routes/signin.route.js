// all routes of controllers
const express=require("express");
const router=express.Router();
const controller=require('../controllers/signin.controller')

// to hit controllers
// create=store, Listing=index, to get singleuser= get, update=update, delete=destroy
router.post("/", controller.store)
router.get("/", controller.index)
router.get("/:id", controller.get)
// router.delete("/:id", controller.destroy)
// router.put("/:id", controller.update);


module.exports=router;