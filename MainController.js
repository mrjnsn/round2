(function(){
  
'use strict';  

angular.module('myapp')
.controller('MainController', MainController);

function MainController(){
  this.placeholding = function(newVal){
        return angular.isDefined(newVal) ? newVal : "Enter a value" ;
    };
    
  this.fieldId = function(newVal){
        return angular.isDefined(newVal) ? newVal : "fieldId" ;
    };
  
  this.fieldLabel = function(newVal){ 
        return angular.isDefined(newVal) ? newVal : "fieldLabel" ;
    };
  
  this.maxLimit = function(newVal){
      return angular.isDefined(newVal) ? newVal : 5 ;
  };

  this.isFieldRequired = function(newVal){
      return angular.isDefined(newVal) ? newVal : 'false' ;
  };
   
  this.emptyMessage = function(newVal){
      return angular.isDefined(newVal) ? newVal : 'Empty text' ;
  };
   
  //field Pattern
  this.fieldPattern = /^[a-z]+$/; //inputBox
  this.fieldPatternAccNo = /^\d+$/; //accountNumber
  this.fieldPatternMobNo = /^\d+$/; //mobno
  //accountNumber

  this.checkPatternReturnVal ='';
 
  //inputBox 
  this.checkPatternIBox = function(value){  
    if (this.inputBoxNgModel === undefined){ return;}
    this.checkPatternReturnVal = this.fieldPattern.test(this.inputBoxNgModel);
    return (this.checkPatternReturnVal)?(this.checkPatternReturnVal): false;
  } // ends.
     
  
  //accountnumber
  this.checkPatternAccNo = function(){  
    if (this.testt === undefined){ return;}
    this.checkPatternReturnVal = this.fieldPatternAccNo.test(this.testt);
    return (this.checkPatternReturnVal)?(this.checkPatternReturnVal): false;
  } // ends.
   
  
  //mobilenumber
  this.checkPatternMobNo = function(){  
    if (this.mobileNoNgModel === undefined){ return;}
    this.checkPatternReturnVal = this.fieldPatternMobNo.test(this.mobileNoNgModel);
    return (this.checkPatternReturnVal)?(this.checkPatternReturnVal): false;
  } // ends.
   
} //MainController ends

})()
