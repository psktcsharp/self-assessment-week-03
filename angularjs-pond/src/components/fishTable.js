angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div >
    <div ng-repeat="fish in  $ctrl.fishes" > <fish-table-row fish="fish"  ></fish-table-row></div>
    <fish-table-row></fish-table-row>
    <fish-table-row></fish-table-row>
    </div>`
});