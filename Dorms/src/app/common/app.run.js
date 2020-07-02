function init($rootScope, $uiRouter, $mdSidenav, $timeout, $log) {
    var Visualizer = window['ui-router-visualizer'].Visualizer;
    var pluginInstance = $uiRouter.plugin(Visualizer);
    
    $rootScope.toggleMenu = toggleMenu;
    $rootScope.isEmpty = isEmpty;
    
    function debounce(callback, interval) {
        var timeout = null;
        return function () {
            $timeout.cancel(timeout);
            timeout = $timeout(function () {
                callback.apply(this);
            }, interval);
        };
    }
    
    function toggleMenu(navId) {
        return debounce(function () {
            $mdSidenav(navId)
                .toggle()
                .then(function () {
                    $log.log("toggle " + navId + " is done");
            });
        }, 0);
    }
    
    function isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
            else   
                return true;
        }
    }
    
    
}

