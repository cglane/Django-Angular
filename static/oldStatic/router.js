routes.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function routes($sP, $uRP) {
  $uRP.otherwise('/main');
  $sP.state('main', {
    url: '/main',
    template: require('./areas/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'vm'
  })

}
