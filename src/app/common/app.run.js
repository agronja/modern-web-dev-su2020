function init($rootScope, $uiRouter) {
    var Visualizer = window['ui-router-visualizer'].Visualizer;
    var pluginInstance = $uiRouter.plugin(Visualizer);
    
    $rootScope.isEmpty = isEmpty;
    
    //function to determine if an object is empty and return a bool
    function isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
            else
                return true;
        }
    }


}

angular
    .module('common')
    .run(init)
