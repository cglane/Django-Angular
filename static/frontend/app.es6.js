
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carousel from 'angular-ui-bootstrap/src/carousel';
import uibModal from 'angular-ui-bootstrap/src/modal';

import MainService from './service/main-service.es6.js';

import MainCtrl from './main/main-ctrl.es6.js';


import CarouselDisplay from './directives/carousel/carousel-display.es6.js';

import appConfig from './config.es6.js';

//css
import './styles/sassy.scss'

angular.module('vdlApp', [uiRouter,  carousel, uibModal])
  .config(appConfig)
  .controller('MainCtrl', MainCtrl)
  .directive('carouselDisplay', CarouselDisplay)
  .factory('MainService', MainService)
  angular.bootstrap(document, ['vdlApp']);
