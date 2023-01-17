export class Doctor {
    id: number;
    name: string;
    specialization: string;
    email: string;
  
    constructor(id: number, name: string, specialization: string, email: string) {
        this.id = id;
        this.name = name;
        this.specialization = specialization;
        this.email = email;
    }
  
    getFullName(): string {
        return this.name;
    }
  
    updateSpecialization(specialization: string) {
        this.specialization = specialization;
    }
}
