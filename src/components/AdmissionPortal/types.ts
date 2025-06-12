
export interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  mobile1: string;
  mobile2: string;
  aadharNo: string;
  maritalStatus: string;
  minorityStatus: string;
  jkImmigrant: boolean;
  nationality: string;
  category: string;
  caste: string;
  bloodGroup: string;
  domicile: string;
  localGuardian: string;
  chronicAilment: string;
  academicProbation: boolean;
  isSponsored: boolean;
  fatherDetails: ParentDetails;
  motherDetails: ParentDetails;
  permanentAddress: Address;
  localAddress: Address;
  hostelRequired: boolean;
  busRequired: boolean;
  disabilityStatus: boolean;
  collegeTransfer: boolean;
}

export interface ParentDetails {
  name: string;
  mobile: string;
  qualification: string;
  occupation: string;
  income: string;
  taxPayee: boolean;
}

export interface Address {
  address: string;
  pincode: string;
}

export interface AcademicDetails {
  twelfthDetails: TwelfthDetails;
  graduationDetails: HigherEducationDetails;
  postGraduationDetails: HigherEducationDetails;
  entranceExam: boolean;
  coursePreferences: CoursePreference[];
}

export interface TwelfthDetails {
  board: string;
  year: string;
  marksObtained: string;
  marksOutOf: string;
  cgpa: string;
  subjectMarks: string;
  medium: string;
  rollNo: string;
  schoolCode: string;
  admitCardId: string;
}

export interface HigherEducationDetails {
  degree: string;
  year: string;
  university: string;
  rollNo: string;
  cgpa: string;
  resultAwaited: boolean;
}

export interface CoursePreference {
  program: string;
  branch: string;
  priority: number;
}

export interface Declaration {
  studentSignature: string;
  parentSignature: string;
  declarationAccepted: boolean;
}

export interface Uploads {
  passportPhoto: File | null;
  aadharCard: File | null;
  twelfthMarksheet: File | null;
  graduationMarksheet: File | null;
  studentSignature: File | null;
  parentSignature: File | null;
}

export interface FormData {
  personalDetails: PersonalDetails;
  academicDetails: AcademicDetails;
  declaration: Declaration;
  uploads: Uploads;
}
