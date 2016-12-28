/**
 * @name gdgSettingsApp
 * @description
 * App to allow TPMs to manage portal settings for their clients
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';
// import carousel from 'angular-ui-bootstrap/src/carousel';
// import slickCarousel from 'angular-carousel';
//config
import router from './router.js';

import HomeController from './areas/home/home.js';

import MainService from './services/main.service.js';

import CarouselDisplay from './directives/carousel.js';

import './styles/sassy.scss';

angular.module('gdgSettingsApp', [uirouter, ngCookies])
  //config
  .config(router)
  //services
  .controller('HomeController', HomeController)
  .factory("MainService", MainService)
  angular.bootstrap(document, ['gdgSettingsApp']);
