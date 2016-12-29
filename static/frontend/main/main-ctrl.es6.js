/**
 * @ngdoc controller
 * @name gdgSettingsApp.controller:MainCtrl
 * @description
 * List view of the user's clients
 */
MainCtrl.$inject = ['$http', '$timeout','$scope','$state', 'MainService','$rootScope'];
export default function MainCtrl($http, $timeout,$scope,$state, MainService,$rootScope) {
  var vm = this;
  vm.tester = {'this':'me'}
  vm.mainPhotos = []
  vm.returnPhotos = returnPhotos;
  var pageHeight = $('html,body').height()
  init()

  function init(){
    vm.photoObjects = $rootScope.albums;
    // getPhotos();
    setTimeout(function () {
      $('html, body').animate({scrollTop:(pageHeight/3)},'2000');
    }, 1000);
  }

  function getPhotos(){
    var returnArr = []
    MainService.getPhotos().then(function(response){
      console.log(response,'response');
      vm.photoObjects = response;
      console.log(vm.photoObjects,'photoObjects');
    })
  }

  function returnPhotos(photos){
    //Return the main photo seperate from other photos
    var returnObj = {
      mainPhoto:{},
      otherPhotos:[]
    }
    for(var photo of photos){
      if (photo.isPrimary) {
        returnObj.mainPhoto = photo;
      }else{
        returnObj.otherPhotos.push = photo;
      }
    }
    return returnObj
  }
}
