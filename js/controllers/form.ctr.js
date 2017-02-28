app.controller('formController', ['$scope', '$modalInstance', '$http', function($scope, $modalInstance, $http) {

    $scope.loginDetails = {};
    $scope.signupDetails = {};
    $scope.signupWarning = false;
    $scope.errorMessage = "";

    $scope.userLogin = function() {
        $scope.loginDetails.username = this.username;
        $scope.loginDetails.password = this.password;
        $modalInstance.close();
        console.log($scope.loginDetails);
    };

    $scope.userSignup = function() {
        $scope.signupDetails.name = this.name;
        $scope.signupDetails.username = this.username;
        $scope.signupDetails.password = this.password;
        $scope.signupDetails.confirmPassword = this.confirmPassword;
        if (this.confirmPassword === this.password) {
            $modalInstance.close();
            console.log($scope.signupDetails);
        } else {
          $scope.errorMessage = "Passwords do not match";
          $scope.signupWarning = true;
        }
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };

    $scope.upload = function() {
        $modalInstance.dismiss('cancel');
    };

}]);
