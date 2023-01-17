import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = environment.baseUrl;  
  constructor(private http: HttpClient) { }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${environment.baseUrl}/appointments`, appointment);
  }
  
  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${environment.baseUrl}/appointments`);
  }
  
  getAppointmentById(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${environment.baseUrl}/appointments/${id}`);
  }
  
  updateAppointment(id: number, appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(`${environment.baseUrl}/appointments/${id}`, appointment);
  }
  
  deleteAppointment(id: number): Observable<Appointment> {
    return this.http.delete<Appointment>(`${environment.baseUrl}/appointments/${id}`);
  }
}
