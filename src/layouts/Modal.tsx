import React, { useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ className, children }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
      <div className={`bg-white rounded-3xl p-9 ${className}`}>{children}</div>
    </div>
  );
};

export default Modal;
