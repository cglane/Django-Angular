/**
 * @name gdgSettingsApp
 * @description
 * App to allow TPMs to manage portal settings for their clients
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';
import uibModal from 'angular-ui-bootstrap/src/modal';
// import carousel from 'angular-ui-bootstrap/src/carousel';

//config
import router from './router.js';

import HomeController from './areas/home/home.js';

import MainService from './services/main.service.js';

import CarouselDisplay from './directives/carousel.js';

import './styles/sassy.scss';

angular.module('gdgSettingsApp', [uirouter, ngCookies,'uibModal'])
  //config
  .config(router)
  //services
  .controller('HomeController', HomeController)
  .factory("MainService", MainService)
  .directive("carouselDisplay", CarouselDisplay)
  angular.bootstrap(document, ['gdgSettingsApp']);
