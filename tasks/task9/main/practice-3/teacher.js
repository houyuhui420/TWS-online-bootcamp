const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor (name,age,classes){
        super(name,age);
        this.clazzes = classes;
        this.clazzes.forEach((clazz) => {
            clazz.teacher = this;
        });        
    }
    
    introduce(){
      let aryClass = [];
      this.clazzes.forEach((value) => {
        aryClass.push(value.num);
      });
      let str = aryClass.join(",");      
      let intro = "";
      if(str){
          intro = super.introduce() + " I am a Teacher. I teach Class " + str +".";
      }else{
          intro = super.introduce() + " I am a Teacher. I teach No Class.";
      }     
      return intro;
    }
    
    isTeaching(student){
        if(student.clazz.exist){
            return true;
        }else {
            return false;
        }
    }
    
    notifyStudentAppended(student){
      return null;
    }

    notifyLeaderAssigned(student){
       return null;
    }
}