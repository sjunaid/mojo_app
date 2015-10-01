angular.module('mojo.services', [])
  .service('mojoservice', function($http, $filter) {

    var stories = [
        {
          'id': 1,
          'headline': 'England, Wales ban smoking in cars with childrens',
          'details': 'LONDON (AP) - Smokers who light up in vehicles with children inside will face fines in England and Wales as anti smoking measures are expanded to protect young people from the dangers of second-hand smoke. The ban went into effect Thursday but police are not expected to issue a rash of fines as the public becomes accustomed to the regulation.'
        },
        {
          'id': 2,
          'headline': 'WORLD',
          'details': ''
        },
        {
          'id': 3,
          'headline': 'WORLD',
          'details': ''
        }
    ];

   /* ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }
*/
    this.getStories = function () {
      return stories;
    };

    this.getStrory = function(id) {
      var result = $filter('filter')(stories, { 'id': id });
      //$.grep(stories, function(e){ return e.id == id; });
      return result[0];
    }

    //returnstories

  });