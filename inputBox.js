(function(){
'use strict';

angular.module('myapp')
  .component('inputBox', {
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

  <label class="label label-primary">Input Box:</label>
  <input type="text"  class="form-control"
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

//ng-model-options="{ getterSetter: true }"
