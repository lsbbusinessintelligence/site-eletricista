import { motion } from "framer-motion";
import { Lightbulb, Plug, Shield, Wrench, Fan, Droplets } from "lucide-react";

const services = [
  { icon: Droplets, title: "Instalação de Chuveiro", desc: "Instalação segura de chuveiros elétricos com garantia." },
  { icon: Shield, title: "Troca de Disjuntores", desc: "Substituição e manutenção de disjuntores e quadros elétricos." },
  { icon: Plug, title: "Instalação de Tomadas", desc: "Instalação de tomadas e interruptores em todos os ambientes." },
  { icon: Fan, title: "Instalação de Ventiladores", desc: "Instalação de ventiladores de teto com segurança." },
  { icon: Wrench, title: "Manutenção Elétrica Residencial", desc: "Reparos e manutenções preventivas para sua casa." },
  { icon: Lightbulb, title: "Instalações Comerciais", desc: "Projetos elétricos completos para estabelecimentos comerciais." },
];

const ServicosSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Soluções elétricas completas para residências e comércios
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border card-hover electric-accent relative group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 relative">
              <service.icon className="w-6 h-6 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosSection;
