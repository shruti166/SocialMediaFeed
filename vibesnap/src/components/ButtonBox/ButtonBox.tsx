import React from 'react';

interface ButtonBoxProps {
  variant?: 'outlined' | 'primary';
  onClick?: () => void;
  label: string;
  icon: string;
}

export default function ButtonBox({ variant = 'primary', onClick, label, icon }: ButtonBoxProps) {
  const isOutlined = variant === 'outlined';

  return (
    <button
      onClick={onClick}
      className='items-center'
      style={{
        padding: '10px 20px',
        border: isOutlined ? '2px solid #000000' : 'none',
        backgroundColor: isOutlined ? 'transparent' : '#e6dbed',
        color: isOutlined ? '#000000' : '#000000',
        borderRadius: '30px',
        cursor: 'pointer',
        display: 'flex'
      }}
    >
        <img src={icon} alt="" />
      {label}
    </button>
  );
}
