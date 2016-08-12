"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var contact_component_1 = require('./contact.component');
var _404_component_1 = require('./404.component');
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '**', component: _404_component_1.PageNotFoundComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map