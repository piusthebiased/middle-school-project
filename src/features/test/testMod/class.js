function Person(age, passport) {
    this.age = age; 
    this.passport = passport; 
  }

  Person.prototype.setAge = function(age) { 
      this.age = age;  
  };
  
  Person.prototype.isAdult = function() {  
      return this.age >= 18? true: false; 
  };

  Person.prototype.canHaveBankAccounts = function() { 
      return this.isAdult()?true:false; 
  };

  Person.prototype.passportStatus = function(status) {  
      this.passport = status;  
  };

  Person.prototype.hasPassport = function() { 
      return this.passport; 
  };
  module.exports = Person;  