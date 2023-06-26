
const express=require('express')
const router=express.Router()

const {studentdata,studentsdata}=require('../controller/project.controler')

router.route('/student/:id').get(studentdata)
router.route('/students').get(studentsdata)


module.exports=router;