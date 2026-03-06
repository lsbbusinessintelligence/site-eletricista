import { motion } from "framer-motion";
import { MessageCircle, Check, Zap, Wrench, HardHat, Quote } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511914693294?text=Ol%C3%A1!%20Preciso%20de%20um%20eletricista.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const HeroSection = () => (
  <section className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#FFD700]/30 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-[#FFD700]/20 blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-[#FFA500]/15 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
    </div>
    
    {/* Elementos decorativos que remetem a eletricidade */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-[10%] w-1 h-20 bg-gradient-to-b from-accent/20 to-transparent" />
      <div className="absolute top-32 right-[15%] w-1 h-16 bg-gradient-to-b from-accent/15 to-transparent" />
      <div className="absolute bottom-40 left-[20%] w-1 h-24 bg-gradient-to-b from-accent/10 to-transparent" />
      <div className="absolute bottom-20 right-[25%] w-1 h-20 bg-gradient-to-b from-accent/15 to-transparent" />
    </div>
    
    <div className="container relative z-10 py-20 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Zap className="w-10 h-10 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/30">
              Eletricista Profissional
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
            Eletricista em São Paulo{" "}
            <span className="text-gradient">com Atendimento Rápido</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl">
            Instalações elétricas, reparos e emergências com atendimento rápido. Profissional experiente e qualificado.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all duration-200 glow-border"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'click_whatsapp', {
                  event_category: 'lead',
                  event_label: 'botao_whatsapp_hero'
                });
              }
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Orçamento
          </a>
          <div className="mt-8 flex flex-col gap-3">
            <span className="flex items-center gap-2 text-primary-foreground/80 text-sm md:text-base font-semibold">
              <Check className="w-5 h-5 text-accent flex-shrink-0" />
              Atendimento em toda São Paulo e região metropolitana
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Orçamento gratuito pelo WhatsApp
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Profissional experiente
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Atendimento de emergência
            </span>
          </div>
        </motion.div>

        {/* Depoimento com Avatar de Eletricista */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:flex flex-col items-center gap-6"
        >
          {/* Caixa de diálogo pequena ACIMA */}
          <div className="relative max-w-[240px]">
            <div className="bg-card/95 backdrop-blur-sm border-2 border-accent/30 rounded-xl p-3 shadow-xl relative">
              <p className="text-card-foreground text-xs text-center leading-relaxed">
                "A <span className="font-bold text-accent">LSB</span> criou meu site e dobrei meus clientes!"
              </p>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-card/95"></div>
            </div>
          </div>
          
          {/* Avatar Grande do Eletricista */}
          <div className="relative">
            <svg width="300" height="360" viewBox="0 0 200 240" className="drop-shadow-2xl">
              {/* Sombra no chão */}
              <ellipse cx="100" cy="220" rx="60" ry="15" fill="#00000015"/>
              
              {/* Pernas */}
              <rect x="75" y="180" width="20" height="50" fill="#1e40af" rx="10"/>
              <rect x="105" y="180" width="20" height="50" fill="#1e40af" rx="10"/>
              
              {/* Botas de segurança */}
              <ellipse cx="85" cy="230" rx="13" ry="9" fill="#422006"/>
              <ellipse cx="115" cy="230" rx="13" ry="9" fill="#422006"/>
              <rect x="78" y="222" width="14" height="3" fill="#78350f"/>
              <rect x="108" y="222" width="14" height="3" fill="#78350f"/>
              
              {/* Tronco */}
              <rect x="65" y="110" width="70" height="75" fill="#1e40af" rx="12"/>
              
              {/* Colete refletivo laranja */}
              <path d="M 72 115 L 72 175 L 82 185 L 100 180 L 118 185 L 128 175 L 128 115 Z" fill="#fb923c"/>
              <rect x="74" y="130" width="52" height="5" fill="#fbbf24" opacity="0.9"/>
              <rect x="74" y="150" width="52" height="5" fill="#fbbf24" opacity="0.9"/>
              <rect x="74" y="170" width="52" height="5" fill="#fbbf24" opacity="0.9"/>
              
              {/* Bolsos do colete */}
              <rect x="78" y="140" width="18" height="12" fill="#ea580c" rx="2" opacity="0.7"/>
              <rect x="104" y="140" width="18" height="12" fill="#ea580c" rx="2" opacity="0.7"/>
              
              {/* Braço direito segurando chave inglesa */}
              <ellipse cx="145" cy="135" rx="13" ry="38" fill="#1e40af" transform="rotate(30 145 135)"/>
              <circle cx="158" cy="118" r="11" fill="#f4a460"/>
              
              {/* Chave inglesa na mão */}
              <rect x="155" y="108" width="4" height="22" fill="#71717a" rx="2" transform="rotate(20 157 119)"/>
              <path d="M 156 106 L 150 102 L 152 108 Z" fill="#71717a"/>
              <circle cx="168" cy="125" r="5" fill="#a1a1aa" opacity="0.8"/>
              
              {/* Braço esquerdo */}
              <ellipse cx="55" cy="140" rx="13" ry="38" fill="#1e40af" transform="rotate(-20 55 140)"/>
              <circle cx="48" cy="165" r="11" fill="#f4a460"/>
              
              {/* Cinto de ferramentas */}
              <rect x="68" y="108" width="64" height="8" fill="#78350f" rx="2"/>
              <rect x="85" y="110" width="6" height="14" fill="#a16207"/>
              <rect x="105" y="110" width="6" height="14" fill="#a16207"/>
              
              {/* Pescoço */}
              <rect x="86" y="95" width="28" height="18" fill="#f4a460" rx="6"/>
              
              {/* Cabeça */}
              <circle cx="100" cy="75" r="34" fill="#f4a460"/>
              
              {/* Orelhas */}
              <ellipse cx="68" cy="75" rx="7" ry="12" fill="#f4a460"/>
              <ellipse cx="132" cy="75" rx="7" ry="12" fill="#f4a460"/>
              
              {/* Capacete de segurança azul */}
              <path d="M 68 65 Q 68 38 100 36 Q 132 38 132 65 L 134 71 L 66 71 Z" fill="#2563eb"/>
              <ellipse cx="100" cy="71" rx="34" ry="9" fill="#1e40af"/>
              <rect x="66" y="68" width="68" height="4" fill="#1e40af"/>
              
              {/* Logo/Raio no capacete */}
              <path d="M 96 48 L 98 54 L 95 54 L 97 60 L 92 54 L 95 54 Z" fill="#fbbf24"/>
              
              {/* Óculos de proteção */}
              <rect x="76" y="70" width="48" height="14" fill="#ffffff" opacity="0.2" rx="7"/>
              <circle cx="87" cy="77" r="9" fill="#ffffff" opacity="0.3" stroke="#64748b" strokeWidth="2"/>
              <circle cx="113" cy="77" r="9" fill="#ffffff" opacity="0.3" stroke="#64748b" strokeWidth="2"/>
              
              {/* Olhos */}
              <circle cx="87" cy="77" r="3.5" fill="#1e293b"/>
              <circle cx="113" cy="77" r="3.5" fill="#1e293b"/>
              <circle cx="88" cy="76" r="1.5" fill="#ffffff"/>
              <circle cx="114" cy="76" r="1.5" fill="#ffffff"/>
              
              {/* Sobrancelhas */}
              <path d="M 80 70 Q 87 67 94 69" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M 106 69 Q 113 67 120 70" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              
              {/* Nariz */}
              <ellipse cx="100" cy="84" rx="5" ry="7" fill="#d97846"/>
              
              {/* Boca sorridente */}
              <path d="M 86 93 Q 100 99 114 93" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round"/>
              
              {/* Barba leve */}
              <path d="M 85 88 Q 100 92 115 88" stroke="#78350f" strokeWidth="1" fill="none" opacity="0.3"/>
            </svg>
            
            <div className="text-center mt-2">
              <p className="font-semibold text-primary-foreground text-sm">Carlos Silva</p>
              <p className="text-xs text-primary-foreground/60">Eletricista - SP</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
