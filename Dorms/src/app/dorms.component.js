var dorms = {
  template: `
    <div class="dorms>
        <div class="dorms-methods">
            <h3>What dorm do you want to learn about</h3>
            <div ui-view="methods"></div>
        </div>
        <div class="dorm-details" ui-view="details"></div>
    </div>
`
};



angular
    .module('dorms')
    .component('dorms', dorms)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dorms', {
                url: '/dorms',
                views: {
                    '@': {
                        component:'dorms'
                    },
                    'methods@': {
                        component: 'dormsMethods'
                    }
                }
        });
});