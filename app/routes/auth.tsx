import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const meta = () => ([
  { title: 'CVision | Auth' },
  { name: 'description', content: 'Authenticating user...' },
]);

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();
  const next = location.search.split('next=')[1] || "/home";

  useEffect(() => {
    if (!auth.isAuthenticated && !isLoading) {
      auth.signIn();
    }

    if (auth.isAuthenticated) {
      navigate(next);
    }
  }, [auth.isAuthenticated, isLoading, next]);

  return null; 
};

export default Auth;
