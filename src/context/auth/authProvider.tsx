import { createContext, useContext, useEffect, useState } from 'react';
import { AuthCredentials, AuthTypes, Laboratory, User } from './authTypes';
import { authService } from '../../services/auth/authService';
import { asyncStorage } from '../../services/storage';

export const AuthContext = createContext<AuthTypes>({
  authCredentials: null,
  isLoading: true,
  userId: null,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
  studentLaboratory: [],
  teacherLaboratory: [],
  addStudentLaboratory: () => {},
  addTeacherLaboratory: () => {},
});

const AUTH_KEY = '@Auth';
const LAB_TEACHER_KEY = '@LabTeacher';
const LAB_STUDENT_KEY = '@LabStudent';

export function AuthProvider({ children }: React.PropsWithChildren<{}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [studentLaboratory, setStudentLaboratory] = useState<Laboratory[]>([]);
  const [teacherLaboratory, setTeacherLaboratory] = useState<Laboratory[]>([]);

  useEffect(() => {
    startAuthCreadentials();
  }, []);

  function addStudentLaboratory(laboratoriesId: Laboratory[]) {
    setStudentLaboratory(laboratoriesId);
    asyncStorage.setItem(LAB_STUDENT_KEY, laboratoriesId);
  }

  function addTeacherLaboratory(laboratoriesId: Laboratory[]) {
    setTeacherLaboratory((prev) => [...prev, ...laboratoriesId]);
    asyncStorage.setItem(LAB_TEACHER_KEY, laboratoriesId);
  }

  async function startAuthCreadentials() {
    try {
      const credentials = await asyncStorage.getItem<AuthCredentials>(AUTH_KEY);
      const laboratoriesTeacherId = await asyncStorage.getItem<Laboratory[]>(
        LAB_TEACHER_KEY
      );
      const laboratoriesStudentId = await asyncStorage.getItem<Laboratory[]>(
        LAB_STUDENT_KEY
      );

      if (laboratoriesTeacherId?.length) {
        setTeacherLaboratory(laboratoriesTeacherId);
      }

      if (laboratoriesStudentId?.length) {
        setStudentLaboratory(laboratoriesStudentId);
      }

      if (credentials) {
        authService.updateToken(credentials.token);
        setAuthCredentials(credentials);
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(credentials: AuthCredentials): Promise<void> {
    authService.updateToken(credentials.token);
    await asyncStorage.setItem(AUTH_KEY, credentials);

    if (credentials.user.studentLaboratory?.length) {
      addStudentLaboratory(credentials.user.studentLaboratory);
    }
    if (credentials.user.teacherLaboratory?.length) {
      addTeacherLaboratory(credentials.user.teacherLaboratory);
    }

    setAuthCredentials(credentials);
  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken();
    asyncStorage.removeItem(AUTH_KEY);
    asyncStorage.removeItem(LAB_TEACHER_KEY);
    asyncStorage.removeItem(LAB_STUDENT_KEY);

    setAuthCredentials(null);
    setStudentLaboratory([]);
    setTeacherLaboratory([]);
  }

  const userId = authCredentials?.user.id || null;

  return (
    <AuthContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCredentials,
        removeCredentials,
        userId,
        studentLaboratory,
        teacherLaboratory,
        addStudentLaboratory,
        addTeacherLaboratory,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthTypes {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('AuthContext should be used within a AuthContextProvider');
  }
  return context;
}

export function useProfile(): User | undefined {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('AuthContext should be used within a AuthContextProvider');
  }

  if (context.authCredentials?.user) {
    return context.authCredentials?.user;
  }
}
