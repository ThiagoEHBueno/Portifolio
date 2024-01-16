import { Routes } from '@angular/router';
import { GeralComponent } from './geral/geral.component';


export const routes: Routes = [
    { path: 'geral', component: GeralComponent },
    { path: '', redirectTo: '/geral', pathMatch: 'full' },
];