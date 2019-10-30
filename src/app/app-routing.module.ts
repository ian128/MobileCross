import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/AuthModule/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/AuthModule/register/register.module#RegisterPageModule' },
  { path: 'onboarding', loadChildren: './pages/AuthModule/onboarding/onboarding.module#OnboardingPageModule' },
  { path: 'splash', loadChildren: './pages/splash/splash.module#SplashPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'news', loadChildren: './pages/NewsModule/news/news.module#NewsPageModule' },
  { path: 'news-detail', loadChildren: './pages/NewsModule/news-detail/news-detail.module#NewsDetailPageModule' },
  { path: 'rent-field', loadChildren: './pages/rent/rent-field/rent-field.module#RentFieldPageModule' },
  { path: 'field-details', loadChildren: './pages/rent/field-details/field-details.module#FieldDetailsPageModule' },
  { path: 'sparring-list', loadChildren: './pages/SparringModule/sparring-list/sparring-list.module#SparringListPageModule' },
  { path: 'sparring-detail', loadChildren: './pages/SparringModule/sparring-detail/sparring-detail.module#SparringDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
