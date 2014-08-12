angular.module('sapMain').controller('sapMainController', [
    '$scope', '$routeParams', 'sapMainPagesService', 'sapSharedUserService', 'sapSharedI18nService', 'sapSharedLoginService', 'sapSharedThemeService',
    function($scope, $routeParams, sapMainPagesService, sapSharedUserService, sapSharedI18nService, sapSharedLoginService, sapSharedThemeService) {

        $scope.msg = sapSharedI18nService.getMessages('main');
        $scope.user = sapSharedUserService.getUser();
        $scope.pages = sapMainPagesService.getPages();
        $scope.currentPage = sapMainPagesService.getPageByName($routeParams.page) || sapMainPagesService.getDefaultPage();
        $scope.themes = sapSharedThemeService.getThemes();
        $scope.isUserPopoverVisible = false;
        $scope.isLanguagePopoverVisible = false;

        $scope.$on('sapSharedI18nService.localeChanged', function() {
            $scope.msg = sapSharedI18nService.getMessages('main');
        });

        this.toggleSideBar = function() {
            $scope.sidebarMode = ($scope.sidebarMode === 'toggle' ? '' : 'toggle');
        };

        this.toggleUserPopover = function() {
            $scope.isUserPopoverVisible = !$scope.isUserPopoverVisible;
        };

        this.toggleLanguagePopover = function() {
            $scope.isLanguagePopoverVisible = !$scope.isLanguagePopoverVisible;
        };

        this.logout = function() {
            $scope.isUserPopoverVisible = false;
            sapSharedLoginService.logout();
        }

    }
]);