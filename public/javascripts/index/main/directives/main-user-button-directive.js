/**
 * Created by i070970 on 8/10/14.
 */
(function () {
    'use strict';

    function sapMainUserButtonDirective(sapSharedAuthenticationService) {
        return {
            template:
                '<button class="sap-navbar-button sap-user-button">' +
                    '<img ng-src="{{user.avatar}}" alt="{{user.firstName}} {{user.lastName}}" class="img-circle sap-user-image"/>' +
                    '<span class="caret"></span>' +
                '</button>',
            replace: true,
            scope: true,
            link: function (scope) {
                scope.user = sapSharedAuthenticationService.getUser();
            }
        };
    }

    angular.
        module('sapMain').
        directive('sapMainUserButtonDirective', [
            'sapSharedAuthenticationService',
            sapMainUserButtonDirective
        ]);

}());