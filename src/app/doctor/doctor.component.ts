import { Component } from '@angular/core';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  doctors: any;

  constructor(private doctorService: DoctorService) {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data;
    });
  }
}
