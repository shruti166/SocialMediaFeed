import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PageFeed from "./views/PageFeed/PageFeed";
import { PageLogin } from "./views/PageLogin/PageLogin";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // To handle loading state during auth check

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setIsCheckingAuth(false); // Auth check completed
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  if (isCheckingAuth) {
    // Optionally displaying a loading indicator while checking auth
    return <div>Loading...</div>;
  }

  return (
    <AuthContextProvider>
    <Router>
      <Routes>
        {/* Redirect based on authentication state */}
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/feed" : "/login"} replace />}
        />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/feed" replace /> : <PageLogin />} />
        <Route path="/feed" element={isAuthenticated ? <PageFeed /> : <Navigate to="/login" replace />} />
      </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
