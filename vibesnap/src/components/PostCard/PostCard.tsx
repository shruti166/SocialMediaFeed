import React from "react";
import Avatar from "../Avatar/Avatar";

interface PostCardProps {
  user: {
    displayName: string;
    photoURL: string;
  };
  text: string;
  imageUrl: string;
  likesCount: number;
  postTime: string;
}

const PostCard: React.FC<PostCardProps> = ({ user, text, imageUrl, likesCount, postTime }) => {
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
        <Avatar photoUrl={user.photoURL} />
        <div className="kumbh-font">
          <h2 className="font-semibold">{user.displayName}</h2>
          <p className="text-xs">{postTime}</p>
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
          {highlightHashtags(text)}
        </p>
        <div className="max-h-[180px]">
          <img
            className="rounded-2xl w-full object-cover h-[180px]"
            src={imageUrl}
            alt="Post image"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="icons/heart.svg" alt="heart" />
          <p>{likesCount}</p>
        </div>
        {/* You can add a Share button if needed */}
      </div>
    </div>
  );
};

export default PostCard;
