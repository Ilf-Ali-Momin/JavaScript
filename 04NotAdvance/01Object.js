var User = function(firstName,courseCount,){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};

var Ali = new User("Ali",3);
console.log(Ali);

var sam = new User ("Sam",1);
console.log(sam);