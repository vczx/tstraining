var employee = {
    id: 1,
    greet: function(){
        console.log(this.id)
    }
};

employee.greet();//1

var employee2 = {
    id: 1,
    greet: function(){
        //this is bound to function scope, so the outer function dont know this
        setTimeout(function(){console.log(this.id)},1000)
    }
};

employee2.greet();//undefined

//here is workaround

var employee3 = {
    id: 1,
    greet: function(){
        var self = this;
        setTimeout(function(){console.log(self.id)},1000)
    }
};

employee3.greet();//1

//workaround2 , arrow function 

var employee4 = {
    id: 1,
    greet: function(){
        setTimeout(() => {console.log(this.id)},1000)
    }
};

employee4.greet();//1