import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchMusicComponent } from './components/search-music/search-music.component';


const routes: Routes = [
  { path: '', component: SearchMusicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
