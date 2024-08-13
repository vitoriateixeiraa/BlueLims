export interface Laboratory {
  name: string;
  institution: string;
  accessCode: string;
}


export interface Laboratory {
  name: string;
  institution: string;
  accessCode: string;
}

export interface LaboratoryParams {
  name: string;
  institution: string;
}

export interface LaboratoryDataAPI {
  id: string;
  name: string;
  accessCode: string;
  institution: string;
}

export interface GetAllLaboratoriesDataAPI {
  id: string;
  name: string;
}

export interface AddStudentAPI {
  message: string;
  id: string;
}
