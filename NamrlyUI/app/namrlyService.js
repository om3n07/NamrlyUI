(function () {
    'use strict';
    var serviceId = 'namrlyService';
    angular.module('rlybitsApp').factory(serviceId, ['$http', namrlyService]);

    function namrlyService($http) {
        var serviceBase = "http://namrly.azurewebsites.net/api/";
        var getStartupName = function (includeImmatureSuffixes) {
            var serviceAddress = serviceBase + "Namrly";
            if (includeImmatureSuffixes && includeImmatureSuffixes === true) {
                serviceAddress += "?includeImmatureSuffixes=true";
            }

            return $http.get(serviceAddress);
        }

        var service = {
            GetStartupName: getStartupName
        };

        return service;
    }
})();
