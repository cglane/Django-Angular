class CarouselDisplay {

  constructor() {
    this.template = require('./carousel-display-tpl.html');
    this.restrict = 'E';
    this.controller = CarouselDisplayCtrl;
    this.scope = {
      photos: '=',
      index:'='
        }
  }

  link(scope, element, attr, vm) {
    scope.moveLeft = moveLeft;
    scope.moveRight = moveRight;
    scope.showLarge = vm.showLarge;
    scope.className = scope.photos.primary.album;
    var tileWidth = 200
    var margin = 0
    var position = 0;
    var maxPosition = scope.photos.secondary.length - 1;
    var newMargin = '';
    var target = '';
    var wrapper = '';
    var windowWidth = $(window).width()
    var leftOver = (maxPosition-position) * tileWidth;


    scope.$watch(element.children(),function(){
      target = angular.element(element[0].getElementsByClassName(scope.className));
      wrapper = angular.element(element[0].getElementsByClassName('slide-wrapper'));
      //Shade every other one
      if(scope.index % 2 != 0){
        wrapper.css({"background": "rgba(0,0,0,.03)"})
      }
    })

    function moveLeft(){
      if (position > 0) {
        leftOver = (maxPosition-position) * tileWidth
        position--
        margin +=tileWidth
        newMargin = `${margin}px`
        target.css({"margin-left":newMargin})
      }
    }

    function moveRight(){
      windowWidth = $(window).width()
      if (leftOver > windowWidth) {
        leftOver = (maxPosition-position) * tileWidth
        position ++
        margin -=tileWidth
        newMargin = `${margin}px`
        target.css({'margin-left': newMargin});
      }
    }



  }

  static directiveFactory() {
    return new CarouselDisplay();
  }
}

class CarouselDisplayCtrl {
  constructor($q, MainService, $uibModal) {
    var vm = this;
    vm.showLarge = function(photoObj){
      var modalInstance = $uibModal.open({
        template: require('../../main/large-photo-tpl.html'),
        controller: require('../../main/large-photo-ctrl.es6.js'),
        resolve: {
          items: function () {
            return {
              photo: photoObj
            }
          }
        }
      });
      modalInstance.result.then(function () {
      }, function () {
      });
    }
  }
}

CarouselDisplayCtrl.$inject = ['$q', 'MainService', '$uibModal'];


export default CarouselDisplay.directiveFactory;
