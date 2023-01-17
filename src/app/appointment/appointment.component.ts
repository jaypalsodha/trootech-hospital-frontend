import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../service/doctor.service';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../models/appointment';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  appointmentForm!: FormGroup;
  appointments: Appointment[] | undefined;
  doctors: Doctor[] | undefined;

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private doctorService: DoctorService
  ) {}

  ngOnInit() {
    this.createForm();
    this.getDoctors();
    this.getAppointments();
  }

  createForm() {
    this.appointmentForm = this.fb.group({
      patientName: ['', Validators.required],
      patientEmail: ['', [Validators.required, Validators.email]],
      patientMobile: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]*$/)],
      ],
      patientDOB: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      doctorId: ['', Validators.required],
    });
  }

  createAppointment() {
    if (this.appointmentForm.valid) {
      this.appointmentService
        .createAppointment(this.appointmentForm.value)
        .subscribe(
          (res) => {
            this.appointmentForm.reset();
            this.getAppointments();
          },
          (err) => console.log(err)
        );
    }
  }
  editAppointment(appointment: Appointment) {
    console.log('Editing appointment: ', appointment);
    this.appointmentForm.patchValue(appointment);
  }
  
  deleteAppointment(appointment: any) {
    console.log('Deleting appointment: ', appointment);
    this.appointmentService.deleteAppointment(appointment.id).subscribe(
      (res) => {
        alert('Appointment deleted successfully!');
        this.appointmentForm.reset();
        this.getAppointments();
      },
      (err) => console.log(err)
    );
  }

  getAppointments() {
    this.appointmentService.getAllAppointments().subscribe(
      (res) => (this.appointments = res),
      (err) => console.log(err)
    );
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe(
      (res) => (this.doctors = res),
      (err) => console.log(err)
    );
  }
}
