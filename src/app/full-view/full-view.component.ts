import { PhotoService } from './../photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-full-view',
  templateUrl: './full-view.component.html',
  styleUrls: ['./full-view.component.scss']
})
export class FullViewComponent implements OnInit {
  index:number = 0;
  constructor(private route: ActivatedRoute, public photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.index = Number(params.get('id'));
    })
  }

  removeFromFav() {
    this.photoService.favourites.splice(this.index,1);
    this.router.navigate(['/favourites'])
  }

}
