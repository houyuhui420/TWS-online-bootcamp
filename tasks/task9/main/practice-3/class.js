// Write your code here
module.exports = class Class {
    constructor(num){
        this.num = num;
        this.teacher = "";
    }
    
    assignLeader(student){       
        let str = ""
        if(student.clazz.exist){
            this.leader = student.name; 
           if (this.teacher) {
                this.teacher.notifyLeaderAssigned(student);
            }
           str = "Assign team leader successfully."
        }else{
            str = "It is not one of us."
        }
        return str;
    }
    
    appendMember(student){
        this.exist = true;
        if (this.teacher) {
            this.teacher.notifyStudentAppended(student);
        }
    }
    
    hasStudent(student){
        return null;        
    }         
}