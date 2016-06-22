(function () {
    'use strict';
    var controllerId = "rlybitsController";
    angular.module('rlybitsApp')
        .controller(controllerId, ['namrlyService', '$timeout', rlybitsController]);

    function rlybitsController(namrlyService, $timeout) {
        var vm = this;
        vm.startupName = 'Click to get your startup name';
        vm.loading = false;
        vm.baseWord = null;
        activate();

        function activate() {
        }

        vm.GetNextStartupNameDramatic = function () {
            getStartupNameDramatic();
        }

        function getStartupNameDramatic() {
            vm.loading = true;
            namrlyService.GetStartupName(vm.baseWord).then(function (response) {
                vm.startupName = response.data;
                $timeout(function () {
                    vm.loading = false;
                }, 2540); // 2.54 seconds
                
            }, function (data) {
                toastr.error('there was an error getting startup name data.\n' + data.data.Message);
            });
        }
    }
})();