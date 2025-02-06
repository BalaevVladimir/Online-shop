import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
    },
    {
        path: 'main',
        loadChildren: () => import('../app/pages/main/main.routes').then((mr) => mr.mainRoutes)

    }
];
