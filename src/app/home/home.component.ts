import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  lista = [
    {titulo:"Season 1",contenido:"",url:"https://static.wikia.nocookie.net/theoffice/images/3/3e/3987186258_30803a3de0.jpg"},
    {titulo:"Season 2",contenido:"",url:"https://static.wikia.nocookie.net/theoffice/images/0/0a/Mcad30378d_e0.jpg"},
    {titulo:"Season 3",contenido:"",url:"https://static.wikia.nocookie.net/theoffice/images/8/8a/The_Office_Season_3.jpg"},
  
    {titulo:"Season 4",contenido:"",url:"https://static.wikia.nocookie.net/theoffice/images/f/f1/The_office_s4.jpg"},
    {titulo:"Season 5",contenido:"",url:"https://static.wikia.nocookie.net/theoffice/images/0/0b/The_Office_Season_5.jpg"},
    {titulo:"Season 6",contenido:"",url:"https://static.wikia.nocookie.net/theoffice/images/0/05/Office_Season_6.jpg"},
  
    {titulo:"Season 7",contenido:"",url:"https://static.wikia.nocookie.net/theoffice/images/d/d4/Office_Season_7.jpg"},
    {titulo:"Season 8",contenido:"",url:"https://static.wikia.nocookie.net/theoffice/images/a/ae/The_Office_Season_8.jpg"},
    {titulo:"Season 9",contenido:"",url:"https://static.wikia.nocookie.net/theoffice/images/3/32/The_Office_S9_DVD.jpg"},
  
  ]
}
