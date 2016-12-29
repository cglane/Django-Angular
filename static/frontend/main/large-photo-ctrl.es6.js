
  TemplatesReviewCtrl.$inject = ['items','$stateParams','$uibModalInstance','$scope']
  export default function TemplatesReviewCtrl(items,$stateParams,$uibModalInstance,$scope){
    $scope.photo = items.photo
    $scope.ok = function () {
      $uibModalInstance.close();
    };
}
