function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('main', {
      url: '#/main',
      template: require('./main/main-tpl.html'),
      controller: 'MainCtrl as vm',
      title: '',
    })
    .state('loading',{
      url:'/',
      template: require('./main/loading-tpl.html'),
      // controller: "LoadingCtrl",
      resolve:{
        deps:['$rootScope','MainService',"$state",function($rootScope,MainService,$state){
          MainService.getPhotos().then(photos =>{
            //Gather all photos and then go to the page
            setTimeout(function () {
              $state.go('main')
            }, 1000);
          })
        }]
      }
    })
    // .state('main.manage',{
    //   url:'/manage',
    //   template:require('./main/manage-tpl.html'),
    //   controller:"ManageCtrl"
    // })
}

export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', config];
