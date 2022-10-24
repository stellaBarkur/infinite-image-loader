import { PhotoService } from './../photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  constructor(public photoService: PhotoService ) {
   }

  ngOnInit(): void {
    if(this.photoService.favourites.length){
      localStorage.setItem('favourites', JSON.stringify(this.photoService.favourites));
    } else if (localStorage.hasOwnProperty("favourites")) {
      let array:any = localStorage.getItem("favourites");
      this.photoService.favourites = JSON.parse(array)
    }
  }

}
