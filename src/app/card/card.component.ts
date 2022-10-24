import { PhotoService } from './../photo.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() picture: any;
  @Input() favourite:boolean = false;
  @Input() index?:number = 0;
  constructor(private photoService:PhotoService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  addToFavourites() { 
    if(!this.favourite) {
      this.photoService.favourites.push(this.picture);
      this.openSnackBar('Added to favourites', 'Close')
      console.log('favourites', this.photoService.favourites)
    } else {
      this.router.navigate(['photos/'+this.index]);
    }
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
