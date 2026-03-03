
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const HOTMART_LINK = "https://pay.hotmart.com/N92194801B?off=z37u3jmu&ref=P104262470Y&bid=1772139152757";

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date();
      // Set end date to March 10th
      const targetDate = new Date(now.getFullYear(), 2, 10, 23, 59, 59);
      if (now > targetDate) {
        // If past March 10, just show countdown to end of current day for urgency
        end.setHours(23, 59, 59, 999);
      } else {
        end.setTime(targetDate.getTime());
      }
      
      const diff = end.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((diff / (1000 * 60 * 60))),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const programs = [
    { title: "MBA + MÁSTER EN PROJECT MANAGEMENT", plazas: "05" },
    { title: "MBA + MÁSTER EN BIG DATA Y BUSINESS INTELLIGENCE", plazas: "05" },
    { title: "MBA + MÁSTER EN DIRECCIÓN COMERCIAL Y MARKETING", plazas: "05" },
    { title: "MBA + MÁSTER EN DIRECCIÓN DE RRHH Y GESTIÓN DEL TALENTO", plazas: "05" },
    { title: "MBA + MÁSTER EN DIRECCIÓN LOGÍSTICA Y SUPPLY CHAIN", plazas: "05" },
    { title: "MBA + MÁSTER EN GESTIÓN Y DIRECCIÓN DE EQUIPOS", plazas: "05" },
    { title: "MBA + MÁSTER EN FINANZAS Y GESTIÓN DE ACTIVOS", plazas: "05" },
    { title: "MÁSTER EN PROJECT MANAGEMENT + MÁSTER EN BIG DATA Y BI", plazas: "05" },
    { title: "MBA + MÁSTER EN IA EMPRESARIAL", plazas: "05" },
    { title: "MÁSTER EN PROJECT MANAGEMENT + MÁSTER EN DIRECCIÓN DE EQUIPOS", plazas: "05" },
    { title: "MBA + MÁSTER EN MARKETING DIGITAL Y ANALYTICS", plazas: "05" },
    { title: "MÁSTER EN BIG DATA Y BI + MÁSTER EN IA EMPRESARIAL", plazas: "05" }
  ];

  return (
    <div className="min-h-screen bg-white text-enebDark font-sans">
      {/* SECCIÓN 1 — BARRA STICKY SUPERIOR */}
      <nav className="fixed top-0 left-0 right-0 bg-enebRed text-white z-[100] shadow-lg">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-center md:text-left">
            <span>ESTE SAN VALENTÍN, EL <span className="text-yellow-300">FLECHAZO</span> ES CON TU CARRERA. 2 PLAZAS POR MENOS DE 600 DÓLARES. ¡SOLO HASTA EL 10/03!</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://api.whatsapp.com/send/?phone=5515981723627&text&type=phone_number&app_absent=0"
              className="hidden md:flex items-center gap-2 text-[10px] bg-green-600 px-3 py-1 rounded-full hover:bg-green-700 transition-colors"
            >
              <span className="font-bold">¿TIENES DUDAS? Mándanos un WhatsApp</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* SECCIÓN 2 — HERO */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-black overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30" 
            alt="Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-white font-black text-3xl md:text-4xl tracking-tighter">ENEB</div>
              <div className="h-10 w-px bg-white/30"></div>
              <div className="text-white/80 text-[10px] md:text-xs leading-tight uppercase font-bold">
                Escuela de Negocios<br />Europea de Barcelona
              </div>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight uppercase">
              REGALA(TE)<br />
              <span className="text-enebRed">UN DOBLE MÁSTER!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-medium leading-relaxed max-w-xl">
              Reserva <span className="text-white font-bold underline">dos plazas por menos de 600 dólares</span> en cualquier programa de Doble Máster o MBA + Máster. Hasta en 12 cuotas. Una tuya y otra para compartir, o quedártela...
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href={HOTMART_LINK}
                className="w-full sm:w-auto bg-enebRed text-white px-8 py-4 rounded-md font-black text-sm uppercase shadow-lg hover:bg-red-700 transition-all text-center"
              >
                ¡SÍ, QUIERO!
              </a>
              <div className="relative">
                <div className="bg-white text-enebRed px-4 py-2 rounded-md font-black text-xs uppercase shadow-xl animate-bounce">
                  HASTA EL 10/03<br />
                  <span className="text-[10px]">Hasta en 12 cuotas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — ENAMÓRATE DE TU FUTURO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-2">ENAMÓRATE DE TU FUTURO</h2>
            <p className="text-gray-500 font-bold text-sm">(Y HAZLO ACOMPAÑADO)</p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-enebRed text-white p-10 rounded-lg shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="text-xl font-bold uppercase mb-2">2 PLAZAS POR MENOS DE</div>
                  <div className="text-4xl md:text-6xl font-black mb-2">600 DÓLARES</div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-90">¡HASTA EN 12 CUOTAS!<br />PARA TI O PARA COMPARTIR</div>
                </div>
                <div className="bg-white text-enebRed py-2 text-center font-black text-sm uppercase rounded">
                  SOLO HASTA EL 10 DE MARZO
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            </div>

            <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
              <p><strong>¡Cupido ha cambiado las flechas por becas!</strong> Por eso, este San Valentín no necesitas reservar un restaurante. Necesitas reservar tu plaza en ENEB.</p>
              <p><strong>Solo hasta el 10 de marzo</strong>, puedes matricularte en cualquier <strong>MBA + Máster o Doble Máster por menos de 600 dólares con una segunda plaza incluida</strong> para regalársela a alguien especial o para quedártela tú. ¡Y puedes pagar hasta en 12 cuotas!</p>
              <p><strong>Compartir es vivir... y también ganar.</strong> Estudiar acompañado mejora la constancia y el compromiso, porque es más fácil mantener la motivación. ¡Y está demostrado que te ayuda a graduarte en menos tiempo!</p>
              <p>Recuerda, cada persona elige su programa y cada uno empieza cuando quiera. Pero <strong>solo hay 20 plazas por programa</strong> y se están agotando rápido. ¡Date prisa!</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href={HOTMART_LINK}
              className="inline-block bg-white border-2 border-enebDark text-enebDark px-10 py-4 rounded-md font-black text-sm uppercase hover:bg-enebDark hover:text-white transition-all shadow-md"
            >
              ¡QUIERO MATRICULARME!
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — PUEDES ELEGIR ENTRE */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold uppercase mb-8">PUEDES ELEGIR ENTRE:</h3>
          <div className="mb-8">
            <div className="text-sm font-bold text-gray-600 mb-2 uppercase">MBA + MÁSTER O DOBLE MÁSTER</div>
            <div className="text-xs text-gray-400 uppercase">(CON PLAZA ADICIONAL INCLUIDA)</div>
          </div>
          <div className="text-4xl md:text-6xl font-black text-enebDark mb-4 uppercase">POR MENOS DE 600 DÓLARES</div>
          <div className="text-xl font-bold text-enebRed mb-8 uppercase">HASTA EN 12 CUOTAS</div>
          <div className="max-w-2xl mx-auto">
            <p className="text-sm font-black uppercase tracking-widest text-enebRed">SOLO 20 PLAZAS DISPONIBLES PARA CADA PROGRAMA FORMATIVO</p>
            <p className="text-sm font-bold text-gray-600 mt-2">¡NO TE QUEDES SIN LA TUYA!</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — ¿QUÉ HACER CON LA SEGUNDA PLAZA? */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-right">
              <h4 className="text-lg font-black uppercase leading-tight">¿QUÉ HACER CON LA<br />SEGUNDA PLAZA?</h4>
            </div>
            <div className="space-y-2 text-xs font-bold uppercase text-gray-600">
              <p><strong>QUÉDATELA</strong> Y REFUERZA TU PERFIL POR DUPLICADO</p>
              <p><strong>REGÁLALA</strong> A ALGUIEN ESPECIAL Y CRECED JUNTOS</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm font-bold text-gray-500 uppercase">PERO ANTES, <span className="text-enebDark underline">MATRICÚLATE AHORA</span> EN EL PROGRAMA QUE TÚ QUIERAS</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 — TOP 12 PROGRAMAS */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-black to-black"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-2xl font-black uppercase mb-4">TOP 12 PROGRAMAS</h2>
            <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">CON MAYOR EMPLEABILIDAD Y MEJOR RANGO SALARIAL<br />2026, SEGÚN <span className="text-white">FINANCIAL MAGAZINE</span></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((prog, i) => (
              <div key={i} className="bg-white rounded-md overflow-hidden shadow-xl group">
                <div className="relative h-48">
                  <img 
                    src={`https://picsum.photos/seed/eneb-prog-${i}/600/400`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt={prog.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-4 left-4 bg-enebRed text-white px-3 py-1 text-[10px] font-black uppercase rounded-sm">
                    {prog.title}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 text-enebRed p-2 rounded shadow-lg text-center min-w-[60px]">
                    <div className="text-xl font-black leading-none">{prog.plazas}</div>
                    <div className="text-[8px] font-bold uppercase">PLAZAS</div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <a 
                    href={HOTMART_LINK}
                    className="inline-block text-enebDark font-black text-[10px] uppercase border-b-2 border-enebRed pb-1 hover:text-enebRed transition-colors"
                  >
                    MATRICÚLATE AQUÍ
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold text-gray-400 uppercase mb-8">¿BUSCAS OTRO PROGRAMA DE NUESTRA OFERTA DE MBA + MÁSTERS Y DOBLE MÁSTERS?</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Haz clic en el siguiente enlace y reserva tu plaza.</strong> Posteriormente contactaremos contigo para que nos indiques en qué programa específico quieres matricularte y qué decides hacer con tu segunda plaza.
            </p>
            
            <div className="mt-12 relative inline-block">
              <div className="bg-white text-enebDark p-8 rounded-lg shadow-2xl max-w-md mx-auto">
                <div className="text-[10px] font-bold text-enebRed mb-2 uppercase">BECA EXTRAORDINARIA</div>
                <div className="text-sm font-black mb-4 uppercase">MBA + MÁSTER O DOBLE MÁSTER A ELECCIÓN</div>
                <div className="text-[8px] text-gray-400 mb-4 uppercase">(CON PLAZA ADICIONAL INCLUIDA)</div>
                <div className="text-2xl font-black mb-2 uppercase">POR MENOS DE 600 DÓLARES</div>
                <div className="text-sm font-bold text-enebRed mb-6 uppercase">HASTA EN 12 CUOTAS</div>
                <a 
                  href={HOTMART_LINK}
                  className="block bg-enebRed text-white py-3 rounded font-black text-xs uppercase hover:bg-red-700 transition-all"
                >
                  ¡MATRICÚLATE AQUÍ!
                </a>
              </div>
              <div className="absolute -top-6 -right-6 bg-white text-enebRed p-3 rounded-md font-black text-[10px] uppercase shadow-xl rotate-12 border border-enebRed">
                HASTA EL 10/03<br />
                Hasta en 12 cuotas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7 — ¿POR QUÉ ELEGIR ENEB? */}
      <section className="py-24 bg-[#1a0000] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">¿POR QUÉ<br />ELEGIR ENEB?</h2>
              <p className="text-xl font-bold mb-8"><strong>ENEB</strong> es la referencia mundial en formación online</p>
            </div>
            <div className="flex flex-wrap gap-8 items-center opacity-80">
              <div className="flex items-center gap-4">
                <div className="text-[10px] font-bold uppercase text-right">Titulaciones certificadas:</div>
                <img src="https://eneb.es/wp-content/uploads/2021/05/logo-isabel-i.png" className="h-12 invert brightness-0" alt="Isabel I" />
              </div>
              <div className="flex items-center gap-4">
                <div className="text-[10px] font-bold uppercase text-right">Proveedor de contenidos:</div>
                <img src="https://eneb.es/wp-content/uploads/2021/05/logo-hbi.png" className="h-12 invert brightness-0" alt="Harvard" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "TOP 1", label: "Ranking Educativo Innovatec" },
              { val: "+ 200K ALUMNOS", label: "Repartidos por todo el mundo" },
              { val: "+ 50 DOCENTES", label: "Especializados en activo" },
              { val: "10 AÑOS", label: "+ 10 años formando a los mejores líderes" }
            ].map((stat, i) => (
              <div key={i} className="space-y-4">
                <div className="text-2xl md:text-3xl font-black text-enebRed">{stat.val}</div>
                <div className="text-[10px] font-bold uppercase text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center max-w-2xl mx-auto">
            <p className="text-sm italic text-gray-300 mb-8">¡Siempre garantizamos una formación <strong>accesible</strong> para todos! Porque aquí nada se interpone entre tú y tus metas</p>
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-widest">¡TE QUEREMOS CON NOSOTROS!</h3>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8 — APUESTA POR UNA FORMACIÓN CON RESULTADOS */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Space"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4">APUESTA POR UNA FORMACIÓN CON</h2>
          <p className="text-sm font-bold text-gray-400 uppercase mb-16">resultados y oportunidades reales</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20">
            {[
              { val: "89%", label: "Incremento salarial medio tras completar tu programa" },
              { val: "x6", label: "Expansión de tu red profesional accediendo a comunidad presente en +50 países" },
              { val: "100%", label: "Asegurado el retorno de inversión en menos de un año" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center text-3xl font-black mb-6">
                  {item.val}
                </div>
                <p className="text-[10px] font-bold uppercase leading-relaxed text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-black uppercase mb-8">¡MULTIPLICARÁS TU VALOR PROFESIONAL!</h3>
          <a 
            href={HOTMART_LINK}
            className="inline-block bg-white text-enebDark px-12 py-4 rounded-md font-black text-sm uppercase hover:bg-gray-200 transition-all shadow-xl"
          >
            MATRICÚLATE AQUÍ
          </a>
        </div>
      </section>

      {/* SECCIÓN 9 — TUS DIPLOMAS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">TUS DIPLOMAS,</h2>
              <p className="text-lg font-bold text-gray-500 mb-8 uppercase">en el ENEB PASSPORT.</p>
              <p className="text-gray-600 mb-8 leading-relaxed">Tu álbum de éxitos profesionales, con validez internacional.</p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-enebRed">
                <p className="text-sm font-bold text-gray-700 uppercase">¡Todas tus credenciales académicas tendrán la Apostilla de La Haya!</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://eneb.es/wp-content/uploads/2021/05/eneb-passport.png" 
                className="w-full max-w-md mx-auto drop-shadow-2xl" 
                alt="ENEB Passport"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-2 shadow-lg rounded border border-gray-100 rotate-3">
                <img src="https://eneb.es/wp-content/uploads/2021/05/diploma-ejemplo.png" className="w-32" alt="Diploma" />
                <div className="text-[8px] font-bold text-center mt-1 text-gray-400 uppercase">EJEMPLO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 10 — WORLD CONGRESS */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40" 
            alt="Congress"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-2xl font-black tracking-tighter">THE <span className="text-enebRed">ENEB</span> WORLD</div>
              <div className="h-8 w-px bg-white/30"></div>
              <div className="text-xs uppercase font-bold">EXPERIENCE <span className="text-enebRed">CONGRESS</span></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">Networking Global<br /><span className="text-enebRed">¡COMUNIDAD EN CRECIMIENTO!</span></h2>
            
            <div className="space-y-6 text-sm text-gray-300 leading-relaxed mb-10">
              <p>Al matricularte en ENEB, te integrarás a una comunidad global en expansión, donde surgen oportunidades de networking como el <strong>ENEB Experience World Congress</strong>, que conectan talento de distintas partes del mundo.</p>
              <p>La última edición reunió a estudiantes de 44 países y empresas como <strong>Michael Page, Dronak Robotics, FIDESOL, Eoniq Found, Talent Hub, Namencis Education, Crescenta y muchos más.</strong> Todos los graduados ampliaron su red profesional, participaron en conferencias sobre las últimas novedades empresariales y conectaron con expertos del sector.</p>
              <p>¡Aprovecha ahora y matricúlate en ENEB!</p>
            </div>

            <a 
              href={HOTMART_LINK}
              className="inline-block bg-enebRed text-white px-10 py-4 rounded-md font-black text-sm uppercase hover:bg-red-700 transition-all shadow-xl"
            >
              ¡ME APUNTO!
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="bg-white text-enebRed p-4 rounded-md font-black text-xs uppercase shadow-2xl rotate-6 border border-enebRed">
            HASTA EL 10/03<br />
            Hasta en 12 cuotas
          </div>
        </div>
      </section>

      {/* SECCIÓN 11 — ASÍ FUNCIONA ENEB */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-black uppercase mb-12">¡Llevamos una década haciendo historia en la formación empresarial!</h2>
          
          <div className="max-w-4xl mx-auto relative shadow-2xl rounded-xl overflow-hidden aspect-video">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/PY2mjTF69Jg" 
              title="ASÍ FUNCIONA ENEB" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>

          <p className="mt-12 text-sm font-bold text-gray-500 uppercase">¡GRACIAS POR FORMAR PARTE DE LA COMUNIDAD ENEB!</p>
        </div>
      </section>



      {/* SECCIÓN 13 — FINAL CERTIFICATIONS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "AMERICAN ASSOCIATION", desc: "La AAA, acreditadora de EE. UU., asegura la calidad en salud, educación y más. ENEB se asocia con ella para garantizar programas educativos de excelencia internacional." },
                { title: "EFQM", desc: "Certificación de calidad y excelencia expedida por la European Foundation for Quality Management." },
                { title: "TRINITY COLLEGE LONDON", desc: "Promueve y fomenta las mejores habilidades comunicativas y de desempeño a través de evaluaciones, contenidos y capacitaciones personales y auténticas." },
                { title: "ISEFI", desc: "Institución privada especializada en la formación financiera a particulares, profesionales y empresas." },
                { title: "EENI", desc: "Facilita el acceso a la creciente demanda mundial de educación superior que no puede ser cubierta por las universidades tradicionales a precios asequibles para todos." },
                { title: "@nced", desc: "Aglutina a los mejores centros privados que imparten formación a distancia e-learning." }
              ].map((cert, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase border-b border-gray-200 pb-2">{cert.title}</h4>
                  <p className="text-[8px] text-gray-500 leading-relaxed uppercase">{cert.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-10 rounded-xl shadow-2xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                className="w-full rounded-lg mb-8" 
                alt="Excellence"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-xl font-black uppercase mb-4 leading-tight">CALIDAD Y EXCELENCIA RECOMENDADA POR NUESTROS ALUMNOS</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-8 uppercase">Nuestros estudiantes avalan la excelencia de nuestra formación, que les permite alcanzar sus metas profesionales con éxito.</p>
              <div className="flex items-center gap-4">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase">9.8/10 VALORACIÓN MEDIA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="text-enebDark font-black text-3xl tracking-tighter">ENEB</div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="text-gray-400 text-[10px] leading-tight uppercase font-bold">
              Escuela de Negocios<br />Europea de Barcelona
            </div>
          </div>
          <p className="text-[10px] text-gray-400 uppercase font-bold">© {new Date().getFullYear()} ENEB. TODOS LOS DERECHOS RESERVADOS.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
