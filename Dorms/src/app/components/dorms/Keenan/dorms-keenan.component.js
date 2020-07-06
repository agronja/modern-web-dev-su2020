var dormsKeenan = {
  template: `
    <div class="dormsKeenan">Stuff</div>
    `  
};

angular
    .module('dorms')
    .component('dormsKeenan', dormsKeenan)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dorms.keenan', {
                url: '^/keenan',
                views: {
                    'details@dorms': {
                        component: 'dormsKeenan'
                }
        }); 
});