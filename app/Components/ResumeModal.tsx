import React from 'react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    // Handle backdrop click to close modal
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };
  
    return (
      <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal-content">
          <iframe src="/ResumeJuly2024.pdf" frameBorder="0" width="100%" height="100%"></iframe>
        </div>
  
        <style jsx>{`
          .modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
  
          .modal-content {
            width: 90%;
            height: 95%;
            background: black;
            animation: unfold 0.6s ease forwards;
          }
  
          @keyframes unfold {
            0% {
              transform: scaleY(0);
            }
            50% {
              transform: scaleY(1.05);
            }
            100% {
              transform: scaleY(1);
            }
          }
        `}</style>
      </div>
    );
  };
  
  export default ResumeModal;