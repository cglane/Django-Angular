MainService.$inject = ['$http','$rootScope'];
export default function MainService($http,$rootScope){
  var MainService = {
    getPhotos:getPhotos
  };

  return MainService;

  function getPhotos(){
    return $http.get('/photos').then(photos =>{
        $rootScope.albums = _.groupBy(photos.data,function(obj){return obj.album})
        return $rootScope.albums
    })
  }
}
