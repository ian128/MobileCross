import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'login', loadChildren: './components/AuthModule/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './components/AuthModule/register/register.module#RegisterPageModule' },
  { path: 'page1', loadChildren: './components/AuthModule/onboarding/page1/page1.module#Page1PageModule' },
  { path: 'page2', loadChildren: './components/AuthModule/onboarding/page2/page2.module#Page2PageModule' },
  { path: 'page3', loadChildren: './components/AuthModule/onboarding/page3/page3.module#Page3PageModule' },
  { path: 'page4', loadChildren: './components/AuthModule/onboarding/page4/page4.module#Page4PageModule' },
  { path: 'onboarding', loadChildren: './components/AuthModule/onboarding/onboarding.module#OnboardingPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
