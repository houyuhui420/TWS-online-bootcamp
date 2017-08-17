const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor (name,age,classes){
        super(name,age);
        this.clazzes = classes;
    }
    
    introduce(){
      let aryClass = [];
      this.clazzes.forEach((value) => {
        aryClass.push(value.num);
      })
      let str = aryClass.join(",");
      
      let intro = "";
      if(str){
        //  intro = super.introduce() + " I am a Teacher. I teach No Class.";
          intro = super.introduce() + " I am a Teacher. I teach Class " + str +".";
      }else{
          intro = super.introduce() + " I am a Teacher. I teach No Class.";
      }
      
      return intro;
    }
}