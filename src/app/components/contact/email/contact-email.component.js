var contactEmail = {
    template: `
        <div>Contact via email: mcheng3@nd.edu</div>
    `
};

angular
    .module('contact')
    .component('contactEmail', contactEmail)
    .config(function ($stateProvider) {
        $stateProvider
            .state('contact.email', {
                url: '^/email',
                component: 'contactEmail'
        })
});