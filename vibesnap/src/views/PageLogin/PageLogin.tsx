import login1 from "../../assets/login/login-1.jpeg";
import login3 from "../../assets/login/login-3.jpeg";
import login5 from "../../assets/login/login-5.jpeg";
import login6 from "../../assets/login/login-6.jpeg";
import login7 from "../../assets/login/login-7.jpeg";
import login8 from "../../assets/login/login-8.jpeg";
import login11 from "../../assets/login/login-11.jpeg";
import vibesnapLogo from "../../assets/login/vibesnapLogo.png";

// Image paths with proper imports
const imagePaths = [
  { src: login1, alt: "login1", span: "col-span-1 row-span-4" },
  { src: login3, alt: "login3", span: "col-span-1 row-span-1" },
  { src: login11, alt: "login11", span: "col-span-1 row-span-4" },
  { src: login6, alt: "login6", span: "col-span-1 row-span-4" },
  { src: login5, alt: "login5", span: "col-span-1 row-span-3" },
  { src: login8, alt: "login8", span: "col-span-1 row-span-3" },
  { src: login7, alt: "login7", span: "col-span-1 row-span-2" },
];

function ImageGrid() {
  return (
    <div className="w-full h-[60vh] grid grid-cols-3 gap-2 p-2">
      {imagePaths.map(({ src, alt, span }, index) => (
        <div key={index} className={`relative ${span}`}>
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}

function LoginSection() {
  return (
    <div className="flex flex-col h-[30vh] bg-white shadow-5xl z-30 mt-[-20px] rounded-t-3xl mx-2">
      {/* Logo Section */}
      <div className="w-full flex justify-center items-center mt-4">
        <img
          src={vibesnapLogo}
          alt="VibeSnap Logo"
          className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
        />
        <div className="text-xl md:text-2xl font-medium inline-flex ml-2">
          VibeSnap
        </div>
      </div>
      <div className="text-sm md:text-lg font-light flex justify-center items-center mt-2">
        Moments that matter, Shared Forever.
      </div>

      {/* Continue with Google Button */}
      <div className="flex justify-center items-center mt-6">
        <button className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
          <img
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default function PageLogin() {
  return (
    <div className="w-full h-screen flex flex-col">
      <ImageGrid />
      <LoginSection />
    </div>
  );
}
