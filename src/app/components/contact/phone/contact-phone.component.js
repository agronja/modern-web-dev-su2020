var contactPhone = {
    template: `
        <div>Contact via phone: (+1) 917 863 3987</div>
    `
};

angular
    .module('contact')
    .component('contactPhone', contactPhone)
    .config(function ($stateProvider) {
        $stateProvider
            .state('contact.phone', {
                url: '^/phone',
                component: 'contactPhone'
        })
});