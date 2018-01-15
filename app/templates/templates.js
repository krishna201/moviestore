angular.module('templateStore.templates', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/templates', {
                templateUrl: 'templates/templates.html',
                controller: 'TemplatesCtrl'
            })
            .when('/templates/:templateId', {
                templateUrl: 'templates/template-details.html',
                controller: 'TemplateDetailsCtrl'
            })
    }])

.controller('TemplatesCtrl', ['$scope', '$http', function($scope, $http) {
    // console.log("TemplatesCtrl Init");
    // console.log($scope);
    $http.get('json/templates.json').success(function(data) {
        console.log(data);
        $scope.templates1 = data;
    });
    $http.get('json/movieslist.json').success(function(data) {
        console.log(data);
        $scope.movies = data;
    });
}])

.controller('TemplateDetailsCtrl', ['$scope', '$routeParams', '$http', '$filter', function($scope, $routeParams, $http, $filter) {
    console.log("TemplatesCtrl Init");
    console.log($scope);
    var templateId = $routeParams.templateId;
    console.log(templateId);
    // $http.get('json/templates.json').success(function(data) {
    //     console.log(data);
    //     $scope.template = $filter('filter')(data, function(d) {
    //         return d.id == templateId;
    //     })[0];
    //     $scope.mainImage = $scope.template.images[0].name;
    // });

    $http.get('json/movieslist.json').success(function(data) {
        console.log(data);
        $scope.movies = data;
        $scope.template = $filter('filter')(data, function(d) {
            return d.id == templateId;
        })[0];
        $scope.mainImage = $scope.template.images[0].name;
    });

}])