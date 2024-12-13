import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import ButtonBox from "../ButtonBox/ButtonBox";
import Modal from "../ShareModal/ShareModal"; // Assuming Modal is the previously defined Modal component
import twitterIcon from "../../assets/social-icons/twitter.svg";
import facebookIcon from "../../assets/social-icons/facebook.svg";
import redditIcon from "../../assets/social-icons/reddit.svg";
import discordIcon from "../../assets/social-icons/discord.svg";
import watsappIcon from "../../assets/social-icons/whatsapp.svg";
import telegramIcon from "../../assets/social-icons/telegram.svg";
import instaIcon from "../../assets/social-icons/instagram.svg";
import messagerIcon from "../../assets/social-icons/messenger.svg";
import copy from "../../assets/icons/copy.svg";
import heartFilledIcon from "../../assets/icons/heart-liked.svg";
import shareIcon from "../../assets/icons/share.svg";
import Toast from "../Toast/Toast";

// Simple Toast Component

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

const PostCard: React.FC<PostCardProps> = ({
  user,
  text,
  imageUrl,
  likesCount,
  postTime,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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

  const handleShareClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCopyLink = () => {
    const link = "https://vibesnap/feed/1234"; // Replace with your dynamic link
    navigator.clipboard.writeText(link).then(() => {
      setToastMessage("Link copied to clipboard!");
      setTimeout(() => setToastMessage(null), 3000); // Auto-hide after 3 seconds
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
        <p className="text-xs">{highlightHashtags(text)}</p>
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
          <img src={heartFilledIcon} alt="heart" />
          <p>{likesCount}</p>
        </div>
        <ButtonBox
          variant="outlined"
          label="Share"
          onClick={handleShareClick}
          icon={shareIcon}
        />
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} title="Share Post" onClose={handleCloseModal}>
        <div className="flex flex-col gap-5">
          <p className="text-sm">Share this post with your friends:</p>
          {/* First Row */}
          <div className="flex justify-around gap-4">
            <div className="bg-[#E9F6FB] p-2 rounded-full">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
              </a>
            </div>
            <div className="bg-[#E7F1FD] p-2 rounded-full">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
            </div>
            <div className="bg-[#FDECE7] p-2 rounded-full">
              <a
                href="https://reddit.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={redditIcon} alt="Reddit" className="w-8 h-8" />
              </a>
            </div>
            <div className="bg-[#ECF5FA] p-2 rounded-full">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={discordIcon} alt="Discord" className="w-8 h-8" />
              </a>
            </div>
          </div>
          {/* Second Row */}
          <div className="flex justify-around gap-4">
            <div className="bg-[#E7FBF0] p-2 rounded-full">
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={watsappIcon} alt="WhatsApp" className="w-8 h-8" />
              </a>
            </div>
            <div className="bg-[#E5F3FE] p-2 rounded-full">
              <a
                href="https://messenger.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={messagerIcon} alt="Messenger" className="w-8 h-8" />
              </a>
            </div>
            <div className="bg-[#E6F3FB] p-2 rounded-full">
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telegramIcon} alt="Telegram" className="w-8 h-8" />
              </a>
            </div>
            <div className="bg-[#FF40C617] p-2 rounded-full">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instaIcon} alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Page Link</h3>
            <div className="p-3 bg-[#D9D9D9] bg-opacity-30 flex justify-between items-center rounded-md">
              <p className="text-opacity-60">https://vibesnap/feed/1234</p>
              <img
                src={copy}
                alt="copy"
                className="cursor-pointer"
                onClick={handleCopyLink}
              />
            </div>
          </div>
        </div>
      </Modal>

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
};

export default PostCard;
