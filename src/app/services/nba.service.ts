import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { INbaPlayer } from '../models';
import { HttpClient } from '@angular/common/http';
import { IResultCollection } from '../models/IResultCollection';

@Injectable({
  providedIn: 'root',
})
export class NbaService {
  private serviceUrl: string;
  constructor(private readonly http: HttpClient) {
    this.serviceUrl = 'https://mach-eight.uc.r.appspot.com';
  }

  /**
   * Gets players data
   */
  getPlayers(): Observable<INbaPlayer[]> {
    return this.http.get<IResultCollection<INbaPlayer>>(this.serviceUrl).pipe(
      map((collection) => {
        return collection.values as INbaPlayer[];
      })
    );
  }
}
