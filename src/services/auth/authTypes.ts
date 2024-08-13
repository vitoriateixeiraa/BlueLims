export interface SignUpData {
  name: string;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
  imageUrl?: string;
}

export interface SignInDataAPI {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'USER' | 'ADMIN';
    imageUrl?: string;
    studentLaboratory: {
      id: string;
    }[] | null;
    teacherLaboratory: {
      id: string;
    }[] | null;
  };
}

export interface SignInData {
  email: string;
  password: string;
}
