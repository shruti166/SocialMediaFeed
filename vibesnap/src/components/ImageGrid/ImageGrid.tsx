import login1 from "../../assets/login/login-1.jpeg";
import login3 from "../../assets/login/login-3.jpeg";
import login5 from "../../assets/login/login-5.jpeg";
import login6 from "../../assets/login/login-6.jpeg";
import login7 from "../../assets/login/login-7.jpeg";
import login8 from "../../assets/login/login-8.jpeg";
import login11 from "../../assets/login/login-11.jpeg";

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

export const ImageGrid = () => {
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