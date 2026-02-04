
import React, { useState } from 'react';

interface LeadFormProps {
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    programa: '',
    empresa: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Construct WhatsApp Message based on user request template
    const phone = "5515981723627";
    const baseText = `*NUEVA AUDITORÍA ROI - ImpulsoIT*\n\n*Nombre:* ${form.nombre}\n*Email:* ${form.email}\n*Empresa:* ${form.empresa || 'No especificada'}\n*Programa:* ${form.programa}\n*Objetivo:* Consultoría Académica ENEB`;
    const encodedText = encodeURIComponent(baseText);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedText}&type=phone_number&app_absent=0`;

    // Simulate short processing and redirect
    setTimeout(() => {
      setLoading(false);
      onSuccess();
      window.open(whatsappUrl, '_blank');
      setForm({ nombre: '', email: '', telefono: '', programa: '', empresa: '' });
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Nombre Completo</label>
          <input
            required
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ej. Juan Pérez"
            className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-impulsoPink focus:bg-white transition-all font-medium text-enebGrey"
          />
        </div>
        <div>
          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Correo Corporativo / Personal</label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="juan@ejemplo.com"
            className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-impulsoPink focus:bg-white transition-all font-medium text-enebGrey"
          />
        </div>
        <div>
          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Empresa / Proyecto</label>
          <input
            type="text"
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
            className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-impulsoPink focus:bg-white transition-all font-medium text-enebGrey"
          />
        </div>
        <div>
          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Programa de Interés</label>
          <select
            required
            name="programa"
            value={form.programa}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-impulsoPink focus:bg-white transition-all font-medium text-enebGrey appearance-none cursor-pointer"
          >
            <option value="">Selecciona tu Máster</option>
            <option value="Doble Master MBA">Doble Máster MBA + Elección</option>
            <option value="MBA Superior">MBA - Superior</option>
            <option value="IA Empresarial">IA Empresarial / PDD IA</option>
            <option value="Marketing Digital">Dirección de Marketing</option>
          </select>
        </div>
      </div>
      
      <div className="mb-10">
        <label className="flex items-start cursor-pointer group">
          <input type="checkbox" required className="mt-1 mr-4 w-5 h-5 rounded border-gray-300 text-impulsoPink focus:ring-impulsoPink transition-all" />
          <span className="text-[11px] text-gray-400 leading-relaxed font-bold uppercase tracking-wider group-hover:text-gray-600 transition-colors">
            Acepto el tratamiento de mis datos para recibir mi asesoría personalizada vía WhatsApp e Email.
          </span>
        </label>
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`w-full py-5 rounded-2xl font-black text-lg shadow-xl transition-all ${
          loading ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#0a0a0a] hover:bg-black text-white transform hover:-translate-y-1'
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            REDIRECCIONANDO...
          </span>
        ) : 'CONTACTAR POR WHATSAPP 📱'}
      </button>
      
      <div className="flex items-center justify-center mt-6 space-x-4 opacity-50 grayscale">
         <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Security SSL</div>
         <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">GDPR Compliant</div>
      </div>
    </form>
  );
};
