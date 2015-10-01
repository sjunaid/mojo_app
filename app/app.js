'use strict';

angular.module('MojoApplication', ['ngRoute', 'toggle-switch', 'mojo.services'])
  .config(['$routeProvider', function($routeProvider) {
      $routeProvider.
          when("/home", {templateUrl: "views/home.html", controller: "indexController"}).
          when("/profile", {templateUrl: "views/profile.html", controller: "settingsController"}).
          when("/pressrelease", {templateUrl: "views/pressrelease.html", controller: "pressreleaseController"}).
          when("/stories", {templateUrl: "views/stories.html", controller: "storiesController"}).
          when("/storydetails/:id", {templateUrl: "views/storydetails.html", controller: "storyDetailController"}).
          otherwise({redirectTo: '/home'});
  }])
  .controller('indexController', function($scope, $window, mojoservice) {
        $scope.user = {};
        $scope.openMenu = false;

        $scope.toggleMenu = function () {
            $scope.openMenu = !$scope.openMenu;
        }

        $scope.home = function () {
          $scope.openMenu = false;
          $window.location.href = '#/home';
        }
        
        $scope.story = function () {
          $scope.openMenu = false;
            $window.location.href = '#/stories';
        }

        $scope.profileSettings = function () {
          $scope.openMenu = false;
          $window.location.href = '#/profile';
        }

        $scope.pressRelease = function () {
          $scope.openMenu = false;
          $window.location.href = '#/pressrelease';
        }
    })
    .controller('settingsController', function($scope, $window, $routeParams, mojoservice) {
        $scope.data = {
            location: [],
            option1: 'Sydney'
        };

        $scope.categoryModel = {
            Sports : false,
            Politics : false
        };

        $scope.anpaCategoryModel = {
            'Australian General News' : false,
            'Finance' : false
        };

        $scope.alerts = false;

        $scope.updateUserSettings = function(user) {
            $scope.user = user;
        };

        $scope.toggleAlerts = function () {
            $scope.alerts = !$scope.alerts;
        }
    })
    .controller('storiesController', function($scope, $window, $routeParams, mojoservice) {
        $scope.stories = mojoservice.getStories();
        $scope.more = function(id) {
            $window.location.href = '#/storydetails/' + id;
        }
    })
    .controller('storyDetailController', function($scope, $window, $routeParams, mojoservice) {
          $scope.id = $routeParams.id;
          $scope.story = mojoservice.getStrory($routeParams.id);
    })
    .controller('pressreleaseController', function($scope, $window, $routeParams, mojoservice) {
        $scope.pressReleases = mojoservice.getPressReleases();
        $scope.saveRelease = function(id) {
            alert('Press Releases saved to calendar!');
        }
    });