import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/AuthModule/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/AuthModule/register/register.module#RegisterPageModule' },
  { path: 'password-register', loadChildren: './pages/AuthModule/register/password-register/password-register.module#PasswordRegisterPageModule' },
  { path: 'onboarding', loadChildren: './pages/AuthModule/onboarding/onboarding.module#OnboardingPageModule' },
  { path: 'splash', loadChildren: './pages/splash/splash.module#SplashPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'news', loadChildren: './pages/NewsModule/news/news.module#NewsPageModule' },
  { path: 'news-detail', loadChildren: './pages/NewsModule/news-detail/news-detail.module#NewsDetailPageModule' },
  { path: 'rent-field', loadChildren: './pages/rent/rent-field/rent-field.module#RentFieldPageModule' },
  { path: 'field-details', loadChildren: './pages/rent/field-details/field-details.module#FieldDetailsPageModule' },
  { path: 'sparring', loadChildren: './pages/SparringModule/sparring-list/sparring-list.module#SparringListPageModule' },
  { path: 'sparring-detail', loadChildren: './pages/SparringModule/sparring-detail/sparring-detail.module#SparringDetailPageModule' },
  { path: 'sparring-info', loadChildren: './pages/SparringModule/sparring-detail/sparring-info/sparring-info.module#SparringInfoPageModule' },
  { path: 'sparring-discussion', loadChildren: './pages/SparringModule/sparring-detail/sparring-discussion/sparring-discussion.module#SparringDiscussionPageModule' },
  { path: 'myprofile', loadChildren: './pages/myprofile/myprofile.module#MyprofilePageModule' },
  { path: 'editprofile', loadChildren: './pages/myprofile/editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'addnewevent', loadChildren: './pages/addnewevent/addnewevent.module#AddneweventPageModule' },
  { path: 'addnewfield', loadChildren: './pages/addnewfield/addnewfield.module#AddnewfieldPageModule' },
  { path: 'active-program', loadChildren: './pages/active-program/active-program.module#ActiveProgramPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
