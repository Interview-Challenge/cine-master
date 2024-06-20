import {authenticateApp} from '@/services/authentication.ts';

const useAuth = () => {
  const authenticateToken = () => {
    authenticateApp()
      .then(() => {})
      .catch(error => {});
  };
};

export default useAuth;
