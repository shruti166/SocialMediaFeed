import React from 'react';
import closeIcon from '../../assets/icons/close.svg';

type ModalProps = {
  isOpen?: boolean;
  title: string;
  onClose?: () => void;
  children: React.ReactNode;
  icons?: { name: string; src: string; link: string }[]; // Array of icons with names, src paths, and links
};

const Modal = ({ isOpen, title, onClose, children, icons }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="p-4 fixed transition-all ease-in-out inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            className="p-2 font-semibold bg-[#F5F5F5] rounded-full text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <img src={closeIcon} alt="close" className='cursor-pointer' />
          </button>
        </div>

        {/* Modal Body */}
        <div>{children}</div>

        {/* Modal Footer: Social Media Icons */}
        {icons && icons.length > 0 && (
          <div className="mt-6 flex justify-center gap-4">
            {icons.map((icon) => (
              <a
                key={icon.name}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={icon.src} alt={icon.name} className="w-6 h-6" />
              </a>
            ))}
          </div>
        )}
      </div>
      <div>
        <div className='text-neutral-700'>
        Page Link
        </div>
       
      </div>
    </div>
  );
};

export default Modal;
