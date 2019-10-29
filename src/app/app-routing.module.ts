import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'onboarding', pathMatch: 'full' },
  { path: 'login', loadChildren: './components/AuthModule/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './components/AuthModule/register/register.module#RegisterPageModule' },
  { path: 'onboarding', loadChildren: './components/AuthModule/onboarding/onboarding.module#OnboardingPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
