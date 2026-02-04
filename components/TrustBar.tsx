
import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-white py-8 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
          Acreditados y Certificados por instituciones internacionales
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="text-2xl font-bold italic">Universidad Isabel I</div>
          <div className="text-2xl font-bold">CEAACES</div>
          <div className="text-2xl font-bold">EFQM</div>
          <div className="text-2xl font-bold">AACSB <span className="text-xs">Member</span></div>
          <div className="text-2xl font-bold">B-SCHOOL</div>
        </div>
      </div>
    </div>
  );
};
