import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import PostCard from "../../components/PostCard/PostCard";

const PageFeed = () => {
  const { user } = useContext(AuthContext); // Access the user from context

  console.log(user);

  return (
    <div className="w-full h-screen border shadow-lg">
      <div className=" gap-5 w-ful h-full p-4">
        <div className="flex items-start justify-start">
          <div>
            <img
              src={`${user?.photoURL}`}
              alt=""
              className="rounded-full w-20 h-20"
            />
          </div>
          <div className="mt-3">
            <p className="text-lg text-neutral-500">Welcome Back,</p>
            <h1 className="text-black text-2xl">
              {user?.displayName || "User"}!
            </h1>
          </div>
        </div>

        {/* Render the feed content here */}
        <div className="w-full mt-5">
          <h1 className="text-black font-bold text-2xl">Feeds</h1>
        </div>
        <div className="w-full mt-3">
          <PostCard
            user={{
              displayName: `${user?.displayName}`,
              photoURL: `${user?.photoURL}`,
            }}
            text="Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. 🗽 #NYC #Travel"
            imageUrl="https://s3-alpha-sig.figma.com/img/92fa/0669/9fc5c5ac336e1596b0abe398f32fdc70?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDI0wGt1~3YKK-9HroeSbhhBlA~NlSLBfghMw37jQjFWGWOyZ5n8YNAU6HZJrizl812JPWHozsTFhOmN8MxI96IB3hS8oxowbYIslITZ4EDwPbh-2czPoAWk4opTHxfpE2NAAbrta9JFh~T~6pIpfguYM-9zNpTubwSYfbloeFv2-HQspRWUX4708aDpegPYDfC6nnuhhW6t4bk-gS5JQq504FAF4DjDYaz-P0Z2efbgoInahnMqoGWzCEq8~2ILXXqRRUW10oezIX9S2UuVoCs2cdlUZMj2FSh1za2GYN3ubj5I3-bKfMXKV7gYtT6D4LRV1VtbtGpxZFNB3gfENg__"
            likesCount={67}
            postTime="2 hours ago"
          />
        </div>
      </div>
    </div>
  );
};

export default PageFeed;
