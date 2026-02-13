
import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-white py-10 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8">
          Acreditaciones Internacionales y Validez Universitaria
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="text-xl sm:text-2xl font-[900] italic tracking-tighter text-enebGrey">Univ. Isabel I</div>
          <div className="text-xl sm:text-2xl font-[900] tracking-tighter text-enebGrey">CEAACES</div>
          <div className="text-xl sm:text-2xl font-[900] tracking-tighter text-enebGrey">EFQM</div>
          <div className="text-xl sm:text-2xl font-[900] tracking-tighter text-enebGrey flex items-baseline">
            AACSB <span className="text-[8px] ml-1 uppercase">Member</span>
          </div>
          <div className="text-xl sm:text-2xl font-[900] tracking-tighter text-enebGrey">B-SCHOOL</div>
        </div>
      </div>
    </div>
  );
};
