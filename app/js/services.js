angular.module('mojo.services', [])
  .service('mojoservice', function($http, $filter, _) {

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
    var pressReleases = [
        {
          'id': 1,
          'headline': 'Regional Election Compaign, Sydney, parramatta',
          'date': '2015-10-25T12:00:00',
          'location': 'Sydney'
        },
        {
          'id': 2,
          'headline': 'WORLD',
          'date': '2015-11-05T08:00:00',
          'location': 'Canberra'
        },
        {
          'id': 3,
          'headline': 'WORLD',
          'date': '2015-11-15T18:00:00',
          'location': 'Melbourne'
        }
    ];

    this.user = {};

    this.getStories = function () {
      return stories;
    };

    this.getStrory = function(id) {
      var result = $filter('filter')(stories, { 'id': id });
      return result[0];
    };

    this.getPressReleases = function () {
      return pressReleases;
    };
    
    this.getLocations = function() {
        return [{'name': 'Adelaide', 'selected': false},
                {'name': 'Brisbane', 'selected': false},
                {'name': 'Darwin', 'selected': false},
                {'name': 'Melbourne', 'selected': false},
                {'name': 'Perth', 'selected': false},
                {'name': 'Sydney', 'selected': false}];
    };
    
    this.upsertUser = function (user) {
        this.user = user;
    };

    this.getUserSettings = function () {
        if (_.isEmpty(this.user)) {
            this.user.locations = this.getLocations();
        }

        return this.user;
    };

    this.getCategories = function() {
        return [{'name': 'Australian General News', 'selected': false},
                {'name': 'Finance', 'selected': false},
                {'name': 'Sports', 'selected': false},
                {'name': 'Entertainment', 'selected': false}];
    };
});
