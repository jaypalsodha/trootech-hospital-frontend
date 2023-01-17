import { Doctor } from "./doctor";

export class Appointment {
    constructor(
        public patientName: string,
        public patientEmail: string,
        public patientMobile: string,
        public patientDOB: Date,
        public appointmentDate: Date,
        public doctorId: number, 
        public doctor: Doctor
    ) {}
}
