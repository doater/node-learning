var mongoose=require('mongoose');
var assert=require('assert');
mongoose.connect('mongodb://localhost/students');
var Schema=mongoose.Schema;
var students=new Schema({
    name: String,
    sexy: String
})
mongoose.model('students',students);

// 增加数据
var Student=mongoose.model('students');
var student=new Student();
student.name='yaotiancheng';
student.sexy='man';
student.save(function(err){
    assert.equal(err,null);
    console.log('save success!');
})

// 查询数据
// var Student=mongoose.model('students');
// Student.find({name:'yao'},function(err,student){
//     assert.equal(err,null);
//     console.log(student);
// })

// 更改数据
// var Student=mongoose.model('students');
// Student.update({name:'yao'},{sexy:'female'},{multi:false},function(err,student){
//     assert.equal(err,null);
//     console.log(student);
// })

// 删除数据
// var Student=mongoose.model('students');
// Student.findById('58783ec3f2c541205870f747',function(err,student){
//     assert.equal(err,null);
//     student.remove();
// })