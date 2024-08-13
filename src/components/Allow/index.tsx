import { useProfile } from '../../context/auth/authProvider';

type Role = 'USER' | 'ADMIN';

type AllowProps = {
  roles: Role[];
  children: React.ReactNode;
};

export default function Allow({ roles, children }: AllowProps) {
  const user = useProfile();

  return !roles
    ? children
    : roles.some((each) => each === user?.role) && children;
}
