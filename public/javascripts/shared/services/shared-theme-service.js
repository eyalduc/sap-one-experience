/**
 * Created by i070970 on 8/12/14.
 */
(function () {
    'use strict';

    function sapSharedThemeService($http, $window, $rootScope) {

        var themes = [];

        $http({
            method: 'GET',
            url: 'api/themes'
        }).success(function (data) {
            var i, l, results;
            results = data.results;
            for (i = 0, l = results.length; i < l; i++) {
                themes.push(results[i]);
            }
        });

        this.getThemes = function () {
            return themes;
        };

        this.setTheme = function (theme) {
            if ($window.location.search) {
                var params = $window.location.search.substr(1).split('&'),
                    hasThemeParam = false;
                if (params) {
                    params = params.map(function (param) {
                        var parts = param.split('=');
                        if (parts[0] === 'theme') {
                            parts[1] = theme;
                            hasThemeParam = true;
                        }
                        return parts.join('=');
                    });
                    if (!hasThemeParam) {
                        params.push('theme=' + theme);
                    }
                    $window.location.search = '?' + params.join('&');
                } else {
                    $window.location.search = '?theme=' + theme;
                }
            } else {
                $window.location.search = '?theme=' + theme;
            }
        };

        this.getTheme = function () {
            return $rootScope.theme;
        };

    }

    angular.
        module('sapShared').
        service('sapSharedThemeService', [
            '$http',
            '$window',
            '$rootScope',
            sapSharedThemeService
        ]);

}());