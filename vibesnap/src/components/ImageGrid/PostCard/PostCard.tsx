import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Avatar from "../Avatar/Avatar";
// import UserProfile from "./UserProfile";


const PostCard: React.FC = () => {
  const { user } = useContext(AuthContext);
//   const [openShareModal, setOpenShareModal] = useState(false);

  const highlightHashtags = (text: string) => {
    const words = text.split(" ");
    return words.map((word, index) => {
      if (word.startsWith("#")) {
        return (
          <span key={index} className="text-[#3C8DFF]">
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };

  return (
    <div className="p-4 flex flex-col gap-3 bg-[#F7EBFF] rounded-[40px]">
      <div className="flex items-center gap-3">
        <Avatar photoUrl={`${user?.photoURL}`} />
        <div className="kumbh-font">
          <h2 className="font-semibold">{user?.displayName}</h2>
          <p className="text-xs">2 hours ago</p>
        </div>
      </div>
      <div
        style={{
          fontFamily:
            "'Kumbh Sans', system-ui, Avenir, Helvetica, Arial, sans-serif",
        }}
        className="flex flex-col gap-4"
      >
        <p className="text-xs">
          {highlightHashtags(`Just arrived in New York City! Excited to explore the sights, sounds,
          and energy of this amazing place. 🗽 #NYC #Travel`)}
        </p>
        <div className="max-h-[180px]">
          <img
            className="rounded-2xl w-full object-cover max-h-[180px]"
            src="https://s3-alpha-sig.figma.com/img/92fa/0669/9fc5c5ac336e1596b0abe398f32fdc70?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDI0wGt1~3YKK-9HroeSbhhBlA~NlSLBfghMw37jQjFWGWOyZ5n8YNAU6HZJrizl812JPWHozsTFhOmN8MxI96IB3hS8oxowbYIslITZ4EDwPbh-2czPoAWk4opTHxfpE2NAAbrta9JFh~T~6pIpfguYM-9zNpTubwSYfbloeFv2-HQspRWUX4708aDpegPYDfC6nnuhhW6t4bk-gS5JQq504FAF4DjDYaz-P0Z2efbgoInahnMqoGWzCEq8~2ILXXqRRUW10oezIX9S2UuVoCs2cdlUZMj2FSh1za2GYN3ubj5I3-bKfMXKV7gYtT6D4LRV1VtbtGpxZFNB3gfENg__"
            alt="sol"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="icons/heart.svg" alt="heart" />
          <p>67</p>
        </div>
        {/* <button
          onClick={() => setOpenShareModal(true)}
          className="px-7 py-1.5 flex items-center gap-2 font-semibold border bg-[#00000012] rounded-full"
        >
          <img src="icons/share.svg" alt="share" />
          Share
        </button> */}
      </div>
      {/* {openShareModal && (
        <ShareModal
          isOpen={openShareModal}
          onClose={() => setOpenShareModal(false)}
        />
      )} */}
    </div>
  );
};

export default PostCard;
