MainService.$inject = ['$http','$rootScope'];
export default function MainService($http,$rootScope){
  var MainService = {
    getPhotos:getPhotos
  };

  return MainService;

  function getPhotos(){
    return $http.get('/photos').then(photos =>{
        $rootScope.albums = {}
        var groups = _.groupBy(photos.data,function(obj){return obj.album})
        //sort by album
        _.each(groups,function(album){

          var albumName = album[0].album
          $rootScope.albums[albumName] = {
            name:album[0].album,
            primary:{},
            secondary:[]
          }
          //sort by is primary
          _.each(album, function(photo){
            if(photo.isPrimary)$rootScope.albums[albumName].primary = photo
            else $rootScope.albums[albumName].secondary.push(photo)
          })
        })
        return $rootScope.albums
    })
  }
}
