import { useState } from 'react';
import { ImageGrid } from "../../components/ImageGrid/ImageGrid";
import { signInWithGoogle } from "../../firebase";
import {useNavigate} from "react-router-dom"
import vibeSnapLogo from "../../assets/login/vibesnapLogo.png"

export const PageLogin = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  // Google login handler
  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle(); // Sign in with Google
      if (user) {
        // Show success popup
        setShowSuccessPopup(true);

        // Redirect to feed page after showing popup
        setTimeout(() => {
          setShowSuccessPopup(false);
          navigate("/feed"); // Navigate to the feed page
        }, 2000);
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      alert("Failed to log in. Please try again.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1">
        <ImageGrid />
      </div>

      <div className="flex flex-col justify-center items-center h-[30vh] bg-white shadow-5xl z-10 rounded-t-3xl mx-2 relative">
        <div className="w-full flex justify-center items-center">
          <h2 className="flex flex-row items-center text-xl md:text-2xl font-medium">
            <img src={vibeSnapLogo} alt="" className='w-[150px] h-[150px]' />
            Welcome to VibeSnap
          </h2>
        </div>

        <div className="flex justify-center items-center mt-[-20px]">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            <img
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
        </div>

        {showSuccessPopup && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h2 className="text-green-500 text-lg font-bold">
                Login Successful!
              </h2>
              <p className="text-gray-500">Redirecting to your feed...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
