(function () {
    'use strict';
    var controllerId = "rlybitsController";
    angular.module('rlybitsApp')
        .controller(controllerId, ['namrlyService', '$timeout', rlybitsController]);

    function rlybitsController(namrlyService, $timeout) {
        var vm = this;
        vm.startupName = 'Click to get your startup name';
        vm.loading = false;
        activate();

        function activate() {
        }

        vm.GetNextStartupNameDramatic = function () {
            getStartupNameDramatic();
        }

        function getStartupNameDramatic() {
            vm.loading = true;
            namrlyService.GetStartupName(null).then(function (response) {
                vm.startupName = response.data;
                $timeout(function () {
                    vm.loading = false;
                }, 2640);
                
            }, function () {
                alert('there was an error getting startup name data.');
            });
        }
    }
})();