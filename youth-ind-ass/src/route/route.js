const express = require('express');
const {registerUser,userLogin}=require("../controller/userController")
const {createTask,getTask,deleteTask}=require("../controller/taskController")
const {authentication}=require("./auth/auth")

const router = express.Router();


router.post("/registerUser",registerUser)

router.post("/userLogin",userLogin)



router.post("/createTask",authentication,createTask)

router.get("/getTask",authentication,getTask)

router.delete("/deleteTask",authentication,deleteTask)



module.exports = router;