const Person = require('./person');

module.exports = class Worker extends Person{
    constructor(name,age){
   super(name,age)
  }
  
  introduce(){
      let str = super.introduce() + " I am a Worker. I have a job.";
      return str;
    }
}