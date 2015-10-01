'use strict';

angular.module('MojoApplication', ['ngRoute', 'toggle-switch', 'lodash', 'mojo.services'])
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
        $scope.alerts = false;

        $scope.updateUserSettings = function(user) {
            $scope.user = user;
            mojoservice.upsertUser(user);
        };

        $scope.toggleAlerts = function () {
            $scope.alerts = !$scope.alerts;
        };

        function initSettings() {
            $scope.user = mojoservice.getUserSettings();
            $scope.categories = mojoservice.getCategories();
            $scope.alertCategories = mojoservice.getCategories();
        }

        initSettings();
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