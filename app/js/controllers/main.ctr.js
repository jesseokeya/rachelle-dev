app.controller('mainController', ['$scope', 'books', '$modal', '$mdToast', function($scope, books, $modal, $mdToast) {
    $scope.searchbar = true;
    $scope.search = 'Hide';


    $scope.booksCategories = [
        'All Books',
        'Engineering Books',
        'Science Books',
        'Art Books',
        'Buisness Books'
    ];

    books.success(function(data) {
        $scope.rachelleBooks = data;
    });

    $scope.searchControl = function() {
        if ($scope.searchbar) {
            $scope.searchbar = false;
            $scope.search = 'Search';
        } else {
            $scope.searchbar = true;
            $scope.search = 'Hide';
        }
    };

    $scope.showLoginModal = function() {
        $modal.open({
                templateUrl: '/templates/loginModal.tpl.html',
                controller: 'formController'
            })
            .result.then(function() {
                //alert("OK");
            });
    };

    $scope.showSignUpModal = function() {
        $modal.open({
                templateUrl: '/templates/signupModal.tpl.html',
                controller: 'formController'
            })
            .result.then(function() {
                //alert("OK");
            });
    };

    $scope.showUploadModal = function() {
        $modal.open({
                templateUrl: '/templates/uploadModal.tpl.html',
                controller: 'formController'
            })
            .result.then(function() {
                //alert("OK");
            });
    };


    /*        Toast and ToastPosition Configuration       */

    var last = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };

    $scope.toastPosition = angular.extend({}, last);

    $scope.getToastPosition = function() {
        sanitizePosition();

        return Object.keys($scope.toastPosition)
            .filter(function(pos) {
                return $scope.toastPosition[pos];
            })
            .join(' ');
    };

    function sanitizePosition() {
        var current = $scope.toastPosition;

        if (current.bottom && last.top) current.top = false;
        if (current.top && last.bottom) current.bottom = false;
        if (current.right && last.left) current.left = false;
        if (current.left && last.right) current.right = false;

        last = angular.extend({}, current);
    }

    $scope.showSimpleToast = function(message) {
        var pinTo = $scope.getToastPosition();

        $mdToast.show(
            $mdToast.simple()
            .textContent(message)
            .position(pinTo)
            .hideDelay(3000)
        );
    };

    $scope.showActionToast = function() {
        var pinTo = $scope.getToastPosition();
        var toast = $mdToast.simple()
            .textContent('Marked as read')
            .action('UNDO')
            .highlightAction(true)
            .highlightClass('md-accent') // Accent is used by default, this just demonstrates the usage.
            .position(pinTo);

        $mdToast.show(toast).then(function(response) {
            if (response == 'ok') {
                alert('You clicked the \'UNDO\' action.');
            }
        });
    };
    /* ------------------------------------------------------ */
}]);
