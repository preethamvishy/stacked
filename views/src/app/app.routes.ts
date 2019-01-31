import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'home', component: HomeComponent },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);