import { PhotoService } from './../photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photoList:Array<any> = [];
  loading = false;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
      this.getPhotos();
  }

  getPhotos() {
    for(let i=0;i<10; i++ ) {
      this.loading = true;
    this.photoService.getPhotos().subscribe((res: any)=> {
      this.photoList.push(res);
      console.log(this.photoList)
      this.loading = false;
    },
    (err: Error)=> {
      console.log('Cannot load image');
      this.loading = false;
    });
  }
  }

  onWindowScroll(event: any) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      // you're at the bottom of the page
      this.getPhotos();
  }
  }

}
