import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/auth/authProvider';

export const useRestrictedNavigation = () => {
  const { authCredentials, studentLaboratory, teacherLaboratory } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (authCredentials?.user.role === 'USER' && !studentLaboratory?.length) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'LaboratoryAccessScreen' }],
      });
    }
    if (authCredentials?.user.role === 'ADMIN' && !teacherLaboratory?.length) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'RegisterLaboratoryScreen' }],
      });
    }
  }, [authCredentials, studentLaboratory, teacherLaboratory, navigation]);
};
