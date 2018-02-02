var express = require("express");
var formidable = require("formidable");
var fs = require("fs");
var url = require("url");
var path = require("path");
 var mongoose = require("mongoose");
 var staff=require("./model/staff.js")
//链接数据库
mongoose.connect("mongodb://127.0.0.1/staff");
var app = express();
app.use(express.static("www"))

//查询
app.get("/list", function (req, res) {
    staff.find().exec(function (err, docs) {
        res.json(docs)
    })
 });

//筛选接口
app.post("/list",function(req,res){
    //接受携带参数
    var arr=[]
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, list) {
      var sex=list.sex
      var age=list.age
      var section = list.section
      var education = list.education
     staff.find({
          "sex" :sex,
          "section": section,
          "education": education,
        }).exec(function (err, docs) {
              res.json(docs)
              
         });

    })
   
})
//更改接口
app.patch("/set",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, data) {
        var id=data.id
        var education=data.education
        var poli_status=data.poli_status
        var state=data.state
        var section=data.section
        console.log(data,11111)
        staff.update({ "id": id }, { 
            "education": education,
            "poli_status": poli_status,
            "state":state,
            "section": section 
        }).exec(function (err, results) {
          res.json(results)
        });
    })
})
app.listen(3000);
console.log("程序运行")