import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardDevsComponent } from './pages/dashboard/dashboard-devs/dashboard-devs.component';

export const routes: Routes = [
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'dashboard', component: DashboardDevsComponent},
    { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
    { path: '**', redirectTo: '/landing-page', pathMatch: 'full' }
];
