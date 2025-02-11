import { Routes } from '@angular/router';

export const routes: Routes = [
        {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
    },
        {
        path: 'main',
        redirectTo: '/auth',
        pathMatch: 'full',
    },
        {
        path: 'main',
        loadChildren: () => import('../app/pages/main/main.routes').then((mr) => mr.mainRoutes)
    },
        {
        path: 'auth',
        loadChildren: () => import('../app/pages/auth/auth.routes').then((mr) => mr.authRoutes)
    },
];
