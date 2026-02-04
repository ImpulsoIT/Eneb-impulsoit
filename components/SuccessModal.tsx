
import React from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[100] animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-10 max-w-lg w-full text-center shadow-2xl scale-in-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
          ✓
        </div>
        <h3 className="text-3xl font-bold text-enebGrey mb-4">¡Solicitud Recibida!</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Gracias por tu interés. Un asesor académico revisará tu perfil y te contactará en breve para informarte sobre las <span className="font-bold text-enebRed">Becas Disponibles</span>.
        </p>
        <button 
          onClick={onClose}
          className="w-full bg-enebGrey text-white font-bold py-4 rounded-xl hover:bg-black transition-all"
        >
          CERRAR
        </button>
      </div>
    </div>
  );
};
