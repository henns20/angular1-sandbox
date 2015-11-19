/**
 * Created by john on 11/19/15.
 */

angular.module('myTestApp', [
  'ui.router'
])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('index', {
        url: "",
        templateUrl: "views/home.html"
      }
    )
      .state('formTest', {
        url: "/form-test",
        templateUrl: "views/form-test.html"
      }
    );

  });

