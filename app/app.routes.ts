import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent }  from './home.component';
import { ContactComponent }    from './contact.component';
import { PageNotFoundComponent }    from './404.component';

const routes: RouterConfig = [
    { path: 'home',  component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
