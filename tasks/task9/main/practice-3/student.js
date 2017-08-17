const Person = require('./person');

module.exports = class Student extends Person{
    constructor (name,age,clazz){
        super(name,age);
        this.clazz = clazz;
    }
    
    introduce(){
       let str = "";
       if(this.clazz.exist){
           if(this.clazz.leader === this.name){
               str = super.introduce() + " I am a Student. I am Leader of Class " + this.clazz.num + ".";
           }else{
               str = super.introduce() + " I am a Student. I am at Class " + this.clazz.num + ".";
           }
        }else{
           str = super.introduce() + " I am a Student. I haven't been allowed to join Class.";
       }
      return str;
    }
}