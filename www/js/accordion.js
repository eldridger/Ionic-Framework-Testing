/**
* scrimbot.accordion Module
*
* Description
*/
var app = angular.module('scrimbot.accordion', [])

//This controller is used in the accordion directive to hold information on children accordion-groups
.controller('AccordionCtrl', ['$scope', function(scope){
	this.groups = [];

	this.addGroup = function(groupScope) {
		this.groups.push(groupScope);
	}

	this.toggleGroup = function(group) {
		if(this.isGroupShown(group)) {
			this.shownGroup = null;
		} else {
			this.shownGroup = group;
		}
	}

	this.isGroupShown = function(group) {
		return this.shownGroup === group;
	}

}])

//Creates ion-list and sets up controller
.directive('accordion', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		restrict: 'EA',
		transclude: true,
		template : '<ion-list ng-transclude></ion-list>',
		controller : 'AccordionCtrl'
	};
}])

.directive('accordionGroup', [function(){
	// Runs during compile
	return {
		require  : '^accordion',
		restrict : 'EA',
		transclude : true,
		replace : true,
		scope : {
			heading : '@',
			text    : '@'
		},
		templateUrl : 'templates/accordion.html',

		link: function(scope, iElm, iAttrs, controller) {
			controller.addGroup(scope);
			if(scope.select) {
				//update text
			}

			//TODO: see if toggleGroup is available from html
			scope.toggle = function() {
				controller.toggleGroup(scope); 
			}

			scope.isActive = function() {
				return controller.isGroupShown(scope);
			}
		}
	};
}])

//TODO: Currently selects use the same controller and the same model values and such
.directive('accordionSelect', [function(){
	// Runs during compile
	return {
		require  : ['^accordion', '?ngModel'],
		restrict : 'EA',
		transclude : true,
		replace : true,
		scope : {
			heading : '@',
			text : '@',
			ngModel : '='
		},
		templateUrl : 'templates/accordion.html',

		link: function(scope, iElm, iAttrs, controller) {
			accordionCtrl = controller[0];
			model = controller[1];

			scope.$parent.model = {
				choice : 'A'
			}

			accordionCtrl.addGroup(scope);

			//TODO: see if toggleGroup is available from html
			scope.toggle = function() {
				accordionCtrl.toggleGroup(scope); 
			}

			scope.isActive = function() {
				return accordionCtrl.isGroupShown(scope);
			}
		}
	};
}])