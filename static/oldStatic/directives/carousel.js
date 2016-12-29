class CarouselDisplay {

  constructor() {
    this.template = require('./carousel.html');
    this.restrict = 'E';
    this.controller = CarouselDisplayCtrl;
    this.scope = {
      photos: '='
        }
  }

  link(scope, element, attr, vm) {
    
  }

  static directiveFactory() {
    return new CarouselDisplay();
  }
}

class CarouselDisplayCtrl {
  constructor($q, MainService) {



  }
}

CarouselDisplayCtrl.$inject = ['$q', 'MainService'];


export default CarouselDisplay.directiveFactory;
