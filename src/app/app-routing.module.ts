import { CopyRightsComponent } from './components/copy-rights/copy-rights.component';
import { TermsAndCondtionsComponent } from './components/terms-and-condtions/terms-and-condtions.component';
import { BaseComponent } from './components/base/base.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiesComponent } from './components/cookies/cookies.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
  },
  {
    path: 'cookies',
    component: CookiesComponent,
  },
  {
    path: 'copy-rights',
    component: CopyRightsComponent,
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndCondtionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
