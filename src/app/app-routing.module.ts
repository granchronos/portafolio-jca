import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./views/pages/blog/blog.module').then(m => m.BlogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
