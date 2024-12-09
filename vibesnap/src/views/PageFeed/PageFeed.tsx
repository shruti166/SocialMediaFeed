import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import PostCard from "../../components/ImageGrid/PostCard/PostCard";

const PageFeed = () => {
  const { user } = useContext(AuthContext); // Access the user from context

  console.log(user)

  return (
    <div className="w-full h-screen">
    <div className=" gap-5 border border-black w-ful h-full p-4">
        <div className="flex items-start justify-start">
        <div>
            <img src={`${user?.photoURL}`} alt="" className="rounded-full w-20 h-20" />
        </div>
        <div className="mt-3">

         <p className="text-lg text-neutral-500">Welcome Back,</p>
        <h1 className="text-black text-2xl">{user?.displayName || "User"}!</h1>
        </div>
        </div>
       
    
    {/* Render the feed content here */}
    <div className="w-full mt-5">
        <h1 className="text-black font-bold text-2xl">
            Feeds
        </h1>

       </div>
       <div className="w-full mt-3">
        <PostCard />
    </div>
    </div>
    
      

    </div>


  );
};

export default PageFeed;
