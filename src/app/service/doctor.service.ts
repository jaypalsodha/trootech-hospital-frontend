import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = environment.baseUrl;
  private doctorsUrl = this.baseUrl + '/doctors';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorsUrl);
  }
}
