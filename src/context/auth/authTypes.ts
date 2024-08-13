export interface AuthTypes {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
  userId: string | null;
  studentLaboratory: Laboratory[];
  teacherLaboratory: Laboratory[];
  addStudentLaboratory: (laboratoriesId: Laboratory[]) => void;
  addTeacherLaboratory: (laboratoriesId: Laboratory[]) => void;
}

export interface AuthCredentials {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'USER' | 'ADMIN';
    imageUrl?: string;
    studentLaboratory:
      | {
          id: string;
        }[]
      | null;
    teacherLaboratory:
      | {
          id: string;
        }[]
      | null;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
  imageUrl?: string;
  studentLaboratory:
    | {
        id: string;
      }[]
    | null;
  teacherLaboratory:
    | {
        id: string;
      }[]
    | null;
}

export interface Laboratory {
  id: string | null;
}
