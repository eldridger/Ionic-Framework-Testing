// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

/* Ionic Seed
angular.module('starter', ['ionic', 'starter.controllers'])
*/

var scrimbot = angular.module('scrimbot', ['ionic', 'scrimbot.controllers', 'scrimbot.accordion'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/home');

    $stateProvider
    //---------------Main Page----------------
    //menu
    .state('app', {
        url: '/app',
        abstract: true,
        views: {
            "": {
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            },

            'subheader@app': {
                templateUrl: 'templates/home-subheader.html',
                controller: 'HomeSubHeaderCtrl'
            }
        }
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'ListTestCtrl'
            }
        }

    })

    .state('app.detail', {
        url: '/detail',
        views: {
            'menuContent': {
                templateUrl: 'templates/detail.html'
            }
        }
    })

    .state('app.accordion', {
        url: '/accordion',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.accordion.html',
                controller: 'AccordionCtrl'
            }
        }
    })

    //---------------Forms Page----------------
    //menu
    .state('forms', {
        url: '/forms',
        abstract: true,
        views: {
            "": {
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            },

            'subheader@forms': {
                templateUrl: 'templates/forms-subheader.html',
                controller: 'FormsSubHeaderCtrl'
            }
        }
    })

    .state('forms.selectionsList', {
        url: '/selectionsList',
        views: {
            'menuContent': {
                templateUrl: 'templates/forms.selectionsList.html',
                controller: 'FormsListCtrl'
            }
        }
    })

    .state('forms.inputs', {
        url: '/inputs',
        views: {
            'menuContent': {
                templateUrl: 'templates/forms.inputs.html'
            }
        }
    })

});

/*  SEED
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider    
    
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/seedTemplates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/seedTemplates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/seedTemplates/browse.html"
        }
      }
    })
    
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/seedTemplates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/seedTemplates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
      
    });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});

*/
