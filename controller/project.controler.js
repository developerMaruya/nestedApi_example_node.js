const mysql=require('mysql')
const conn=require('../db/db.config')
const { all } = require('../router/project.router')

const studentdata=(req,res)=>{
    const studentid=req.params.id
    const sql=`SELECT student.id,student.name,course.cid,course.courseName,subject.suid,subject.allSubjectName,
    studentdetils.fathername,studentdetils.mobile,studentdetils.address FROM student
    INNER JOIN course ON course.stdid=student.id
    INNER JOIN subject ON subject.cid=course.cid
    INNER JOIN studentdetils ON studentdetils.studid=student.id
    WHERE student.id=?`
    conn.query(sql,studentid,(err,result)=>{
        if (err) {
            throw err;
        }
        console.log(result)
const studentDetils={
    id:result[0].id,
    name:result[0].name,
    coursedetails:[
        {
    cid:result[0].cid,
    courseName:result[0].courseName,
    subjectdetails:[
        {
            subjectid:result[0].suid,
            AllSubjectName:result[0].allSubjectName
        }
    ]
}],
studentdetails:[
    {
        fathername:result[0].fathername,
        mobile:result[0].mobile,
        address:result[0].address
    }
]
}  
          console.log(studentDetils)
          res.send(studentDetils)
    })
}

// all students

const studentsdata=(req,res)=>{
    const studentid=req.params.id
    const sql=`SELECT student.id,student.name,course.cid,course.courseName,subject.suid,subject.allSubjectName,
    studentdetils.fathername,studentdetils.mobile,studentdetils.address FROM student
    INNER JOIN course ON course.stdid=student.id
    INNER JOIN subject ON subject.cid=course.cid
    INNER JOIN studentdetils ON studentdetils.studid=student.id`
    conn.query(sql,(err,result)=>{
        if (err) {
            throw err;
        }
        console.log(result)
        const all=[]
        for(var i in result){
const studentDetils={
    id:result[i].id,
    name:result[i].name,
    coursedetails:[
        {
    cid:result[i].cid,
    courseName:result[i].courseName,
    subjectdetails:[
        {
            subjectid:result[i].suid,
            AllSubjectName:result[i].allSubjectName
        }
    ]
}],
studentdetails:[
    {
        fathername:result[i].fathername,
        mobile:result[i].mobile,
        address:result[i].address
    }
]
}  
          console.log(studentDetils)
          all.push(studentDetils)
       
    }
    // both working 
    // res.json({result})
    res.json({all})
})
}


module.exports={studentdata,studentsdata}