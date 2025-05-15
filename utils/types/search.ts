export interface ParametersSearchDoctors {
  search?: string;
}
export interface Availability {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

export type DoctorBase = Pick<
  User,
  | "id"
  | "firstName"
  | "lastName"
  | "specialty"
  | "clinicAddress"
  | "phoneNumber"
>;

export interface SpecialtyRelation {
  specialtyName: string | null;
}

export interface Billing {
  totalAmount: string;
}

// Combinamos todo
export interface DoctorDTO extends DoctorBase {
  Specialty: SpecialtyRelation | null;
  DoctorAvailabilities: Availability[];
  billing: Billing;
}
