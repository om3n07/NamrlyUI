﻿(function () {
    'use strict';
    var serviceId = 'namrlyService';
    angular.module('rlybitsApp').factory(serviceId, ['$http', namrlyService]);

    function namrlyService($http) {
        var serviceBase = "http://namrly.azurewebsites.net/api/";
        var getStartupName = function (baseWord, includeAdditionalSuffixes) {
            var serviceAddress = serviceBase + "Namrly?";
            if (baseWord) {
                serviceAddress += "baseWord=" + baseWord;
            }
            if (includeAdditionalSuffixes && includeAdditionalSuffixes === true) {
                serviceAddress += "includeAdditionalSuffixes=true";
            }

            return $http.get(serviceAddress);
        }

        var service = {
            GetStartupName: getStartupName
        };

        return service;
    }
})();