/**
 * Created by john on 11/19/15.
 */
angular.module('myTestApp')
  .controller('FormController', FormController);

function FormController($scope) {
  $scope.userType = 'Guest'
}

