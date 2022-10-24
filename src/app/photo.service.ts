import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public favourites:Array<any> = [];
  constructor( private http: HttpClient) { }

  getPhotos() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'image/jpeg'
      })
    };

     return this.http.get('https://picsum.photos/200/300', { responseType: 'blob' }).pipe(
      switchMap(response => this.readFile(response))
    );
  }

  private readFile(blob: Blob): Observable<any> {
    return new Observable(obs => {
      const reader = new FileReader();

      reader.onerror = err => obs.error(err);
      reader.onabort = err => obs.error(err);
      reader.onload = () => obs.next(reader.result);
      reader.onloadend = () => obs.complete();

      return reader.readAsDataURL(blob);
    });
  }
}
