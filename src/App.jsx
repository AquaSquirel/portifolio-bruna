import React from 'react';
import { Heart, Stethoscope, GraduationCap, PawPrint, Syringe, Pill, ArrowRight, Dog, Instagram, Mail, MessageCircle } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-earth-200 selection:text-earth-dark overflow-x-hidden">
      
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full bg-sand-50/80 backdrop-blur-md z-50 border-b border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-serif text-2xl font-bold text-earth-dark tracking-tight">Bruna<span className="text-earth-dark">.</span>Vet</h1>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-earth-DEFAULT">
            <a href="#inicio" className="hover:text-earth-dark transition-colors">Início</a>
            <a href="#historia" className="hover:text-earth-dark transition-colors">Minha História</a>
            <a href="#paixoes" className="hover:text-earth-dark transition-colors">Paixões</a>
            <a href="#companheiras" className="hover:text-earth-dark transition-colors">Luna & Mavis</a>
          </div>
          <a href="#contato" className="bg-earth-dark text-sand-50 px-5 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-earth-dark/20">
            Fale Comigo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 md:pt-32 pb-16 md:pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-sand-200">
              <GraduationCap className="w-4 h-4 text-earth-DEFAULT" />
              <span className="text-xs font-bold uppercase tracking-wider text-earth-DEFAULT">Futura Médica Veterinária</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-earth-dark leading-tight">
              Onde o amor encontra a <span className="italic text-earth-DEFAULT">ciência</span>.
            </h1>
            <p className="text-lg text-earth-DEFAULT leading-relaxed max-w-md">
              Estudante do 2º semestre na Anhanguera Sorocaba. Dedicada a transformar minha paixão pelos animais em cuidado e cura.
            </p>
            <div className="pt-2 md:pt-4 flex items-center space-x-4">
              <button className="bg-earth-dark text-sand-50 px-8 py-3 rounded-2xl font-semibold shadow-lg shadow-earth-dark/30 hover:-translate-y-1 transition-transform flex items-center space-x-2 w-full md:w-auto justify-center">
                <span>Ver Minha Jornada</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="relative mt-6 md:mt-0">
            <div className="absolute inset-0 md:-inset-4 bg-earth-100 rounded-[3rem] rotate-3 -z-10 opacity-50 md:opacity-100"></div>
            <img 
              src="bruna-horse.jpg?auto=format&fit=crop&q=80&w=800" 
              alt="Estudante de veterinária" 
              className="rounded-[2.5rem] shadow-2xl object-cover aspect-square md:aspect-[4/5] md:h-[500px] w-full object-top"
            />
            {/* Floating Badge - Mobile Centered & Safe */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 w-[90%] md:w-auto md:bottom-8 md:left-auto md:-left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-sand-100">
              <div className="bg-earth-100 p-2 rounded-full shrink-0">
                <Heart className="w-6 h-6 text-earth-DEFAULT fill-current" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-earth-DEFAULT font-bold uppercase tracking-tight">Status</p>
                <p className="font-bold text-earth-dark text-sm whitespace-nowrap">Apaixonada pelo que faço</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Transition Section */}
      <section id="historia" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-earth-dark mb-4">Um Novo Caminho</h2>
            <div className="h-1 w-20 bg-earth-DEFAULT mx-auto rounded-full"></div>
          </div>

          <div className="relative border-l-2 border-dashed border-earth-200 pl-6 md:pl-8 ml-2 md:ml-4 space-y-12">
            
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute -left-[45px] bg-sand-100 border-4 border-white p-2 rounded-full shadow-md group-hover:scale-110 transition-transform z-10">
                <Pill className="w-5 h-5 text-earth-DEFAULT" />
              </div>
              <div className="bg-sand-50 p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300 border border-sand-100">
                <span className="text-sm font-bold text-earth-DEFAULT mb-2 block">O Início</span>
                <h3 className="font-serif text-2xl font-bold text-earth-dark mb-3">Farmácia</h3>
                <p className="text-earth-DEFAULT">
                  Comecei minha jornada estudando os medicamentos e a química da cura. Aprendi muito sobre precisão e cuidado, mas sentia que algo essencial estava faltando na minha rotina.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute -left-[45px] bg-earth-dark border-4 border-white p-2 rounded-full shadow-md shadow-earth-dark/30 group-hover:scale-110 transition-transform z-10">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div className="bg-sand-100 p-8 rounded-3xl shadow-md border border-earth-100">
                <span className="text-sm font-bold text-earth-DEFAULT mb-2 block">O Chamado</span>
                <h3 className="font-serif text-2xl font-bold text-earth-dark mb-3">Medicina Veterinária</h3>
                <p className="text-earth-dark">
                  Percebi que meu coração batia no ritmo da natureza. Não era apenas sobre curar, mas sobre conectar. Decidi recomeçar e seguir minha verdadeira vocação: a saúde e o bem-estar animal.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Passions - Bento Grid */}
      <section id="paixoes" className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-4xl font-bold text-earth-dark">Onde meu coração habita</h2>
            <p className="text-earth-DEFAULT mt-2">Pequenas e grandes paixões que movem meu dia a dia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            
            {/* Horse Card - Vertical (Portrait) */}
            <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] shadow-lg aspect-[3/4] md:aspect-auto md:h-full">
              <img 
                src="/horse.jpg" 
                alt="Cavalo" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <div className="bg-white/20 backdrop-blur-md self-start px-3 py-1 rounded-full mb-3">
                  <span className="text-white text-xs font-bold uppercase">Maior Paixão</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-2">Cavalos</h3>
                <p className="text-white/90 text-sm md:text-base">A força, a elegância e a conexão silenciosa que existe entre nós.</p>
              </div>
            </div>

            {/* Dog Card */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-[2.5rem] shadow-lg bg-sand-200 min-h-[160px]">
              <div className="absolute top-4 right-4 text-earth-dark/10">
                <PawPrint className="w-16 h-16 rotate-12" />
              </div>
              <div className="p-6 md:p-8 h-full flex flex-col justify-center relative z-10">
                <Dog className="w-8 h-8 text-earth-dark mb-3" />
                <h3 className="font-serif text-xl md:text-2xl font-bold text-earth-dark">Cachorrinhos</h3>
                <p className="text-earth-DEFAULT mt-1 text-sm">Amor incondicional em quatro patas.</p>
              </div>
            </div>

            {/* Academic Card */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-[2.5rem] shadow-lg bg-sand-200 flex items-center justify-center p-6 md:p-8 min-h-[160px]">
              <div className="text-center">
                <div className="bg-white p-3 rounded-full inline-block shadow-sm mb-3">
                  <GraduationCap className="w-6 h-6 text-earth-DEFAULT" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-earth-dark">2º Semestre</h3>
                <p className="text-xs md:text-sm text-earth-DEFAULT mt-1 font-medium italic">Medicina Veterinária</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Companions Section */}
      <section id="companheiras" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-earth-dark">Minhas Companheiras</h2>
            <p className="text-earth-DEFAULT mt-4 max-w-lg mx-auto">
              Elas são minha inspiração diária e as "pacientes" mais mimadas que existem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Luna */}
            <div className="bg-sand-50 rounded-[2.5rem] p-3 shadow-sm hover:shadow-xl transition-all duration-300 group border border-sand-100">
              <div className="aspect-[4/3] md:aspect-square rounded-[2rem] overflow-hidden mb-4">
                <img 
                  src="/luna.jpg?auto=format&fit=crop&q=80&w=600" 
                  alt="Cachorro Luna" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-3 pb-3">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-serif text-2xl font-bold text-earth-dark">Luna</h3>
                  <Heart className="w-5 h-5 text-earth-DEFAULT fill-current" />
                </div>
                <p className="text-earth-DEFAULT text-sm">A mais velha e sábia. Me ensinou o significado de lealdade.</p>
              </div>
            </div>

            {/* Mavis */}
            <div className="bg-sand-50 rounded-[2.5rem] p-3 shadow-sm hover:shadow-xl transition-all duration-300 group border border-sand-100">
              <div className="aspect-[4/3] md:aspect-square rounded-[2rem] overflow-hidden mb-4">
                <img 
                  src="/mavis.jpg?auto=format&fit=crop&q=80&w=600" 
                  alt="Cachorro Mavis" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-3 pb-3">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-serif text-2xl font-bold text-earth-dark">Mavis</h3>
                  <Heart className="w-5 h-5 text-earth-DEFAULT fill-current" />
                </div>
                <p className="text-earth-DEFAULT text-sm">Energia pura! A caçula que alegra a casa inteira.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="bg-earth-dark text-sand-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm">
            <PawPrint className="w-8 h-8 text-earth-DEFAULT" />
          </div>
          
          <div className="space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl font-bold">Vamos conversar?</h2>
            <p className="text-sand-200/80 max-w-sm mx-auto">
              Estou sempre aberta a novas conexões, aprendizados e oportunidades no mundo veterinário.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-4">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/5515992444295" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/brruna_oliv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:bruna@email.com" 
              className="w-full md:w-auto flex items-center justify-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20"
            >
              <Mail className="w-5 h-5" />
              <span>E-mail</span>
            </a>
          </div>

          <div className="pt-16 border-t border-white/10 space-y-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-sand-200/60">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4" />
                <span>Medicina Veterinária - Anhanguera Sorocaba</span>
              </div>
            </div>
            <p className="text-xs text-sand-200/40 tracking-widest uppercase">
              &copy; 2026 Bruna • Feito com paixão e ciência
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
