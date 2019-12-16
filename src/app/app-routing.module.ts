import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/authGuard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/AuthModule/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/AuthModule/register/register.module#RegisterPageModule' },
  { path: 'password-register', loadChildren: './pages/AuthModule/register/password-register/password-register.module#PasswordRegisterPageModule' },
  { path: 'onboarding', loadChildren: './pages/AuthModule/onboarding/onboarding.module#OnboardingPageModule' },
  { path: 'splash', loadChildren: './pages/splash/splash.module#SplashPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', 
    canActivate:[AuthGuardService] },
  { path: 'news', loadChildren: './pages/NewsModule/news/news.module#NewsPageModule',
    canActivate:[AuthGuardService] },
  { path: 'news-detail', loadChildren: './pages/NewsModule/news-detail/news-detail.module#NewsDetailPageModule',
    canActivate:[AuthGuardService] },
  { path: 'rent-field', loadChildren: './pages/rent/rent-field/rent-field.module#RentFieldPageModule',
    canActivate:[AuthGuardService] },
  { path: 'field-details', loadChildren: './pages/rent/field-details/field-details.module#FieldDetailsPageModule',
    canActivate:[AuthGuardService] },
  { path: 'sparring', loadChildren: './pages/SparringModule/sparring-list/sparring-list.module#SparringListPageModule',
    canActivate:[AuthGuardService] },
  { path: 'sparring-detail', loadChildren: './pages/SparringModule/sparring-detail/sparring-detail.module#SparringDetailPageModule',
    canActivate:[AuthGuardService] },
  { path: 'sparring-info', loadChildren: './pages/SparringModule/sparring-detail/sparring-info/sparring-info.module#SparringInfoPageModule',
    canActivate:[AuthGuardService] },
  { path: 'sparring-discussion', loadChildren: './pages/SparringModule/sparring-detail/sparring-discussion/sparring-discussion.module#SparringDiscussionPageModule',
    canActivate:[AuthGuardService] },
  { path: 'myprofile', loadChildren: './pages/myprofile/myprofile.module#MyprofilePageModule',
    canActivate:[AuthGuardService] },
  { path: 'editprofile', loadChildren: './pages/myprofile/editprofile/editprofile.module#EditprofilePageModule',
    canActivate:[AuthGuardService] },
  { path: 'addnewevent', loadChildren: './pages/addnewevent/addnewevent.module#AddneweventPageModule',
  canActivate:[AuthGuardService] },
  { path: 'addnewfield', loadChildren: './pages/addnewfield/addnewfield.module#AddnewfieldPageModule',
    canActivate:[AuthGuardService] },
  { path: 'add-event-success', loadChildren: './pages/addnewevent/add-event-success/add-event-success.module#AddEventSuccessPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
