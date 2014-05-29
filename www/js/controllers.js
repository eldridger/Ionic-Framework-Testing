//angular.module('starter.controllers', [])
var scrimbot = angular.module('scrimbot.controllers', [])

.controller('ListTestCtrl', ['$scope',
    function(scope) {
        var currentStart = 0;
        scope.items = [];

        scope.addItems = function() {
            for (var i = currentStart; i < currentStart + 20; i++) {
                scope.items.push("Item " + i);
            }
            currentStart += 20;
            scope.$broadcast('scroll.infiniteScrollComplete');
        };

        scope.doRefresh = function() {
            // Starts over from 0
            scope.items = [];
            currentStart = 0;

            scope.addItems();
            scope.$apply();
            scope.$broadcast('scroll.refreshComplete');
        };

        scope.addItems();
    }
])

.controller('FormsController', ['$scope',
    function(scope) {
        scope.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
        scope.volume = 50;
    }
])

.controller('FormsListCtrl', ['$scope', '$ionicModal',
    function(scope, ionicModal) {
        scope.items = [{
                name: 'Checkbox',
                url: 'forms.checkbox',
                click: function() {
                    scope.checkboxModal.show();
                }
            },

            {
                name: 'Radio',
                url: 'forms.radio',
                click: function() {
                    scope.radioModal.show();
                }
            },

            {
                name: 'Range',
                url: 'forms.range',
                click: function() {
                    scope.rangeModal.show();
                }
            },

            {
                name: 'Toggle',
                url: 'forms.toggle',
                click: function() {
                    scope.toggleModal.show();
                }
            },

            {
                name: 'Select Menus',
                url: 'forms.selectMenu',
                click: function() {
                    scope.selectModal.show();
                }
            }
        ]

        scope.modalItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];


        ionicModal.fromTemplateUrl('templates/forms.checkbox.html', function(ionicModal) {
            scope.checkboxModal = ionicModal;
        }, {
            // Use our scope for the scope of the modal to keep it simple
            scope: scope,
            // The animation we want to use for the modal entrance
            // slide-in-up is the only animation currently working for modals
            animation: 'slide-in-up'
        });

        ionicModal.fromTemplateUrl('templates/forms.radio.html', function(ionicModal) {
            scope.radioModal = ionicModal;
        }, {
            // Use our scope for the scope of the modal to keep it simple
            scope: scope,
            // The animation we want to use for the modal entrance
            // slide-in-up is the only animation currently working for modals
            animation: 'slide-in-up'
        });

        ionicModal.fromTemplateUrl('templates/forms.range.html', function(ionicModal) {
            scope.rangeModal = ionicModal;
        }, {
            // Use our scope for the scope of the modal to keep it simple
            scope: scope,
            // The animation we want to use for the modal entrance
            // slide-in-up is the only animation currently working for modals
            animation: 'slide-in-up'
        });

        ionicModal.fromTemplateUrl('templates/forms.toggle.html', function(ionicModal) {
            scope.toggleModal = ionicModal;
        }, {
            // Use our scope for the scope of the modal to keep it simple
            scope: scope,
            // The animation we want to use for the modal entrance
            // slide-in-up is the only animation currently working for modals
            animation: 'slide-in-up'
        });

        ionicModal.fromTemplateUrl('templates/forms.selectMenu.html', function(ionicModal) {
            scope.selectModal = ionicModal;
            scope.groups = [{
                name: '1'
            }, {
                name: '2'
            }];
        }, {
            // Use our scope for the scope of the modal to keep it simple
            scope: scope,
            // The animation we want to use for the modal entrance
            // slide-in-up is the only animation currently working for modals
            animation: 'slide-in-up'
        });


    }
])

.controller('HomeSubHeaderCtrl', ['$scope',
    function(scope) {
        scope.currPage = 'home';
    }
])
    .controller('FormsSubHeaderCtrl', ['$scope',
        function(scope) {
            scope.currPage = 'checkbox';
        }
    ])

.controller('AppCtrl', ['$scope', '$ionicSideMenuDelegate',
    function(scope, ionSideMenu) {
        scope.toggleLeft = function() {
            ionSideMenu.toggleLeft();
        }
    }
])

.controller('StuffCtrl', ['$scope',
    function(scope) {

    }
])

.controller('ProfileCtrl', ['$scope',
    function(scope) {

    }
]);
