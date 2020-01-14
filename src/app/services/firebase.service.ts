import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Centros} from '../interfaces/centros';
import {Cursos} from '../interfaces/cursos';
import {Maps} from '../interfaces/maps';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private url = 'https://examenpabloromeromontero-91880.firebaseio.com/';

  constructor(private http: HttpClient) {
  }


  getCentros() {
    return this.http.get(`${this.url}/centros.json`)
      .pipe(
        map(this.createArrayCentros)
      );
  }

  getCursos() {
    return this.http.get(`${this.url}/cursos.json`)
      .pipe(
        map(this.createArrayCursos)
      );
  }

  private createArrayCursos(newsObj: object) {
    const newsList: Cursos[] = [];

    if (newsObj === null) {
      return [];
    }
    Object.keys(newsObj).forEach(key => {
      const ne: Cursos = newsObj[key];
      ne.id = key;
      newsList.push(ne);
    });
    return newsList;
  }

  private createArrayCentros(newsObj: object) {
    const newsList: Centros[] = [];

    if (newsObj === null) {
      return [];
    }
    Object.keys(newsObj).forEach(key => {
      const ne: Centros = newsObj[key];
      ne.id = key;
      newsList.push(ne);
    });
    return newsList;
  }

 getMap() {
    return this.http.get(`${this.url}/map.json`)
      .pipe(
        map(this.createArrayMap)
      );
  }

  private createArrayMap(newsObj) {
    const newsList: Maps[] = [];
    if (newsObj === null) {
      return [];
    }
    Object.keys(newsObj).forEach(key => {
      const ne: Maps = newsObj[key];
      newsList.push(ne);
    });
    return newsList;
  }
}
