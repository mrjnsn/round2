(function(){
'use strict';

angular.module('myapp')
  .component('accountNumber', {
  bindings:{
    placeHolder: '<', 
    fieldId: '<', 
    fieldLabel: '<', 
    maxLimit: '<', 
    isRequired: '<',  
    pattern: '<', 
    bbb: '&', 
    ngModelx: '=',
}, 
  template: `
  <label class="label label-primary">Account Number: </label><br>
  <input type="text" class="form-control" 
  placeholder="{{$ctrl.placeHolder}}"
  fieldId="{{$ctrl.fieldId}}"  fieldLabel="{{$ctrl.fieldLabel}}"
  maxlength="{{$ctrl.maxLimit}}" 
  required="{{$ctrl.isRequired}}" 
  ng-model = "$ctrl.ngModelx" 
  ng-change="$ctrl.bbb();"
  ></input>
  `,
  
}); //component ends.

})();


//ng-model-options="{ '*': '$inherit' }"
