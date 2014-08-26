/**
 * Created by i070970 on 8/25/14.
 */
(function () {
    'use strict';

    function sapMainGalleryPopoverDirective(sapSharedGalleryService) {
        return {
            template:
                '<div class="popover bottom sap-gallery-popover">' +
                    '<div class="arrow"></div>' +
                    '<div class="popover-content">' +
                        '<ul class="list-group">' +
                            '<li class="list-group-item" ng-repeat="item in items">{{item.name}}</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>',
            replace: true,
            scope: true,
            link: function (scope) {
                scope.items = sapSharedGalleryService.getItems();
            }
        };
    }

    angular.
        module('sapMain').
        directive('sapMainGalleryPopoverDirective', [
            'sapSharedGalleryService',
            sapMainGalleryPopoverDirective
        ]);

}());