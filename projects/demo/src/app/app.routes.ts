import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'form-block',
        pathMatch: 'full'
    },
    {
        path: 'form-block',
        loadComponent: () => import('./demo-form-block/demo-form-block.component').then(mod => mod.DemoFormBlockComponent)
    },
    {
        path: 'asset-array',
        loadComponent: () => import('./demo-asset-array/demo-asset-array.component').then(mod => mod.DemoAssetArrayComponent)
    },
];
