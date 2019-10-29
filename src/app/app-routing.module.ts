import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'onboarding', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/AuthModule/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/AuthModule/register/register.module#RegisterPageModule' },
  { path: 'onboarding', loadChildren: './pages/AuthModule/onboarding/onboarding.module#OnboardingPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
