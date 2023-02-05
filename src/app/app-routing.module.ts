import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharComponent } from './char/char.component';
import { VideoComponent } from './video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';



const routes: Routes =[
  {path: "", component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'characters', component: CharComponent},
  {path: 'video', component: VideoComponent}

] 
@NgModule({
  imports: [RouterModule.forRoot(routes),
  YouTubePlayerModule], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
