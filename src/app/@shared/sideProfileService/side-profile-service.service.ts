import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../Models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class SideProfileServiceService {

  constructor(private http:HttpClient) { }

  getInfoProfile(): Observable<Profile>{
    return this.http.get<Profile>('http://localhost:3000/profile');
  }
}
