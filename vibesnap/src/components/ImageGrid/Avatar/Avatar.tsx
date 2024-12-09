import React from 'react';

interface AvatarProps {
  photoUrl: string;
  altText?: string;
}

const Avatar: React.FC<AvatarProps> = ({ photoUrl, altText = 'Avatar' }) => {
  return (
    <div
      style={{
        width: '50px', 
        height: '50px', 
        borderRadius: '50%', 
        overflow: 'hidden', 
        display: 'inline-block',
      }}
    >
      <img
        src={photoUrl}
        alt={altText}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', 
        }}
      />
    </div>
  );
}

export default Avatar;
