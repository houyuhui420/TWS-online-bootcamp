const Person = require('./person');

module.exports = class Student extends Person{
  constructor(name,age,klass){
    super(name,age);
    this.klass = klass;
  }

    introduce(){
      let str = super.introduce() + " I am a Student. I am at Class " + this.klass + ".";
      return str;
    }
}


