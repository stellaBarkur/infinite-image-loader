import { FullViewComponent } from './full-view/full-view.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  {path: 'photos', component: PhotoListComponent},
  {path: 'photos/:id', component: FullViewComponent},
  {path: 'favourites', component: FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
