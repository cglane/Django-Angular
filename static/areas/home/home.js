/**
 * @ngdoc controller
 * @name gdgSettingsApp.controller:HomeController
 * @description
 * List view of the user's clients
 */
HomeController.$inject = ['$http', '$timeout','$scope','$state', 'MainService'];
export default function HomeController($http, $timeout,$scope,$state, MainService) {
  var vm = this;
  vm.mainPhotos = []

  init()

  function init(){
    getPhotos()
  }

  function getPhotos(){
    MainService.getPhotos().then(function(response){
      vm.photoObjects = response
      return vm.mainPhotos
    })
  }
}
