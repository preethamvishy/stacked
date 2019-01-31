import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },


    { path: '**', redirectTo: '' }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);