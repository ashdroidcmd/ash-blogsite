import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase"; // Update to your actual Firebase config path
import { onAuthStateChanged } from "firebase/auth";

export default function AdminRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setIsAdmin(false);
        setIsLoading(false);
        return;
      }

      const token = await user.getIdTokenResult();
      setIsAdmin(!!token.claims.admin);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return isAdmin ? children : <Navigate to="/" />;
}
