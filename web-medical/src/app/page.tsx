"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import Link from "next/link";
import type { FormEvent } from "react";

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: easing,
    },
  }),
};

const navLinks = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Diferenciales", href: "#diferenciales" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

const stats = [
  { value: "24h", label: "Tiempo promedio de respuesta comercial" },
  { value: "97%", label: "De entregas puntuales en 2023" },
  { value: "+1.500", label: "Referencias certificadas en catálogo" },
];

const solutionHighlights = [
  {
    title: "Somos socios estratégicos, no simples proveedores",
    points: [
      "Consultoría de abastecimiento orientada a reducir costos ocultos",
      "Planes de contingencia para garantizar stock crítico en quirófano",
      "Integración con ERP hospitalarios y trazabilidad en tiempo real",
    ],
  },
  {
    title: "Control de calidad y compliance extremo",
    points: [
      "Certificaciones CE, FDA y NOM respaldadas digitalmente",
      "Auditorías de fábrica y pruebas por lotes documentadas",
      "Trazabilidad de cadena de frío y logística segura 24/7",
    ],
  },
];

const categories = [
  {
    name: "Equipamiento quirúrgico",
    description:
      "Torres laparoscópicas, instrumental de alta precisión, suturas, dispositivos hemostáticos",
  },
  {
    name: "Material hospitalario crítico",
    description:
      "Guantes, campos estériles, jeringas inteligentes, sondas y consumibles de terapia intensiva",
  },
  {
    name: "Diagnóstico y monitoreo",
    description:
      "Monitores multiparámetro, reactivos, pruebas rápidas, soluciones para telemedicina",
  },
];

const differentiators = [
  {
    title: "Visibilidad integral de abastecimiento",
    ours: "Panel SmartSupply® con KPIs, alertas predictivas y trazabilidad por lote.",
    others: "Seguimiento manual en hojas de cálculo, sin proyección de demanda.",
  },
  {
    title: "Modelo financiero flexible",
    ours: "Órdenes abiertas, consignación y leasing operativo para equipamiento premium.",
    others: "Condiciones rígidas y adelantos que afectan tu flujo de caja.",
  },
  {
    title: "Equipo clínico experto",
    ours: "Especialistas biomédicos y enfermería instrumentista acompañan la adopción.",
    others: "Soporte genérico sin know-how quirúrgico.",
  },
];

const testimonials = [
  {
    quote:
      "Reducimos un 28% el costo total de cirugía mayor gracias a la estandarización que diseñó MedexPro. La trazabilidad es impecable.",
    name: "Dra. Sofía Aguilar",
    role: "Directora de Compras, Grupo Hospitalario NovaSalud",
  },
  {
    quote:
      "Su logística dedicada nos permitió cubrir picos de demanda sin afectar inventarios críticos. La visibilidad en tiempo real es clave.",
    name: "Ing. David Monroy",
    role: "COO, Red de Clínicas Integradas",
  },
];

const workflow = [
  {
    step: "01",
    title: "Diagnóstico inmersivo",
    description:
      "Análisis de procesos, rotación y criticidad para definir un plan de abastecimiento resiliente y escalable.",
  },
  {
    step: "02",
    title: "Implementación asistida",
    description:
      "Despliegue de catálogo óptimo, formación clínica, integración tecnológica y protocolos de calidad certificados.",
  },
  {
    step: "03",
    title: "Optimización continua",
    description:
      "Revisión trimestral de KPIs, oportunidades de ahorro y actualización de producto según evidencia científica.",
  },
];

const contactChannels = [
  {
    label: "Consultoría inmediata",
    value: "+52 55 1234 5678",
    icon: Phone,
    href: "tel:+525512345678",
  },
  {
    label: "Cotizaciones y licitaciones",
    value: "asesoria@medexpro.com",
    icon: Mail,
    href: "mailto:asesoria@medexpro.com",
  },
  {
    label: "Oficinas corporativas",
    value: "Av. Innovación 450, Polanco, CDMX",
    icon: MapPin,
    href: "https://maps.google.com/?q=Av.+Innovación+450,+Polanco,+CDMX",
  },
];

export default function Home() {
  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nombre = data.get("nombre");
    const email = data.get("email");
    const mensaje = data.get("mensaje");

    const body = [
      `Nombre y organización: ${nombre}`,
      `Email corporativo: ${email}`,
      "",
      "Necesidad:",
      mensaje,
    ]
      .filter(Boolean)
      .join("%0D%0A");

    window.open(
      `mailto:asesoria@medexpro.com?subject=Brief%20abastecimiento%20médico&body=${body}`,
      "_blank",
    );

    form.reset();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background pb-24 text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-mask absolute inset-0 opacity-50"></div>
        <motion.div
          className="absolute -top-32 left-1/2 h-72 w-[45rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/40 via-sky-400/30 to-cyan-300/40 blur-3xl"
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-[-10%] h-96 w-[36rem] rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-600/25 to-slate-900/60 blur-3xl"
          animate={{ opacity: [0.15, 0.4, 0.2], scale: [1.1, 0.95, 1.05] }}
          transition={{ duration: 16, repeat: Infinity }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 sm:px-10">
        <header className="z-20 flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 text-lg font-semibold uppercase tracking-wide">
              MP
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-slate-100">
                MedexPro
              </p>
              <span className="text-sm text-slate-400">
                Material médico y quirúrgico certificado
              </span>
            </div>
          </motion.div>

          <nav className="flex items-center justify-between gap-6 text-sm font-medium text-slate-200">
            <div className="hidden items-center gap-6 lg:flex">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="transition hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link
              href="#contacto"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:from-sky-400 hover:to-sky-300"
            >
              Solicitar demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>
        </header>

        <main className="relative z-10 flex flex-col gap-24">
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 px-6 py-16 shadow-[0_40px_140px_-70px_rgba(56,189,248,0.65)] sm:px-12 lg:px-16">
            <div className="absolute -top-10 left-1/2 hidden h-40 w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-indigo-500/40 blur-3xl sm:block" />

            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="space-y-8">
                <motion.span
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  <Sparkles className="h-4 w-4 text-sky-300" />
                  Simplifica adquisiciones críticas en salud
                </motion.span>

                <motion.h1
                  className="max-w-2xl font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  Abastecimiento médico B2B con velocidad, trazabilidad y cero
                  riesgos.
                </motion.h1>

                <motion.p
                  className="max-w-2xl text-lg text-slate-300"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                >
                  Diseñamos ecosistemas de suministro para hospitales, redes
                  clínicas y aseguradoras. Material certificado, logística
                  inteligente y asesoría especializada para que cada quirófano
                  opere sin interrupciones.
                </motion.p>

                <motion.div
                  className="flex flex-col gap-4 sm:flex-row"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                >
                  <Link
                    href="#contacto"
                    className="flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
                  >
                    Agenda una consultoría
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#catalogo"
                    className="flex items-center justify-center gap-3 rounded-full border border-white/30 px-6 py-3 text-base text-white transition hover:border-white/70"
                  >
                    Ver catálogo inteligente
                  </Link>
                </motion.div>

                <motion.div
                  className="grid gap-6 sm:grid-cols-3"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={4}
                >
                  {stats.map(({ value, label }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-sky-400/40 hover:bg-white/[0.06]"
                    >
                      <p className="text-3xl font-semibold text-white">
                        {value}
                      </p>
                      <p className="mt-2 text-sm text-slate-300">{label}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="relative hidden h-full min-h-[28rem] rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/90 p-8 lg:flex lg:flex-col lg:justify-between"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
                    SmartSupply® en acción
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    Panel operativo en tiempo real
                  </h3>
                </div>
                <div className="grid gap-4">
                  {[
                    {
                      title: "Inventario crítico",
                      value: "98% disponibilidad",
                      trend: "+6 puntos vs. mes anterior",
                    },
                    {
                      title: "Cirugías programadas",
                      value: "42 casos cubiertos",
                      trend: "Cobertura 100% insumos",
                    },
                    {
                      title: "Alertas predictivas",
                      value: "5 líneas próximas a reorden",
                      trend: "Reabastecimiento automático",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      className="glass-surface rounded-2xl p-4"
                      whileHover={{ y: -4, scale: 1.01 }}
                    >
                      <p className="text-xs font-medium uppercase tracking-wide text-sky-200/80">
                        {item.title}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {item.value}
                      </p>
                      <p className="text-xs text-slate-300/80">{item.trend}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="flex items-center gap-3 rounded-2xl border border-sky-400/30 bg-sky-500/10 p-4"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Timer className="h-10 w-10 text-sky-300" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      SLA de reposición automática
                    </p>
                    <p className="text-xs text-slate-300">
                      Confirmación de pedido en menos de 4 horas.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section
            id="soluciones"
            className="grid gap-12 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 backdrop-blur lg:grid-cols-2 lg:px-12"
          >
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
                <Building2 className="h-4 w-4" />
                Hecho para compras complejas
              </span>
              <h2 className="font-display text-4xl tracking-tight text-white">
                Soluciones a medida para hospitales y redes clínicas exigentes.
              </h2>
              <p className="text-lg text-slate-300">
                Conectamos con tus equipos clínicos, financieros y de logística
                para transformar la gestión de material médico en una ventaja
                competitiva tangible.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {solutionHighlights.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                  variants={fadeInUp}
                  custom={index}
                >
                  <h3 className="text-xl font-semibold text-white">
                    {solution.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    {solution.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section
            id="catalogo"
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-blue-900/40 px-6 py-16 sm:px-12"
          >
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
                <HeartPulse className="h-4 w-4 text-pink-300" />
                Catálogo inteligente
              </span>
              <h2 className="mt-6 font-display text-4xl text-white">
                Material médico estratégico validado por especialistas
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Curamos cientos de referencias con evidencia clínica,
                disponibilidad inmediata y planes financieros flexibles. Mejora
                la continuidad del cuidado y maximiza la rentabilidad por cada
                paciente atendido.
              </p>
            </motion.div>

            <motion.div
              className="mt-12 grid gap-6 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="group rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-sky-400/40 hover:bg-slate-900/70"
                  variants={fadeInUp}
                  custom={index}
                >
                  <h3 className="text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                  <p className="mt-4 text-sm text-slate-300">
                    {category.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-sky-300 opacity-0 transition group-hover:opacity-100">
                    Explorar fichas técnicas
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section
            id="diferenciales"
            className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-16 sm:px-12"
          >
            <motion.div
              className="flex flex-col gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200">
                  <ShieldCheck className="h-4 w-4" />
                  Diferenciales competitivos
                </span>
                <h2 className="mt-4 font-display text-4xl text-white">
                  Elevamos la confianza y la continuidad operativa de tu red de
                  salud.
                </h2>
              </div>
              <p className="text-lg text-slate-300 lg:max-w-xl">
                Metodologías certificadas, tecnología propia y equipos con
                experiencia clínica garantizan un suministro sin sorpresas, con
                foco absoluto en la seguridad del paciente.
              </p>
            </motion.div>

            <motion.div
              className="mt-12 overflow-hidden rounded-3xl border border-white/10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid gap-px bg-white/10 sm:grid-cols-[1.4fr_1fr_1fr]">
                <div className="bg-slate-950/60 px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:col-span-3">
                  Comparativa real de valor
                </div>
                <div className="bg-slate-950/40 px-6 py-4 text-sm font-semibold text-sky-300">
                  Diferencial
                </div>
                <div className="bg-slate-950/40 px-6 py-4 text-sm font-semibold text-white">
                  MedexPro
                </div>
                <div className="bg-slate-950/40 px-6 py-4 text-sm font-semibold text-white/70">
                  Proveedores tradicionales
                </div>

                {differentiators.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="bg-slate-900/50 px-6 py-6"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
                {differentiators.map((item, index) => (
                  <motion.div
                    key={`${item.title}-ours`}
                    className="bg-slate-900/70 px-6 py-6 text-sm text-slate-200"
                    variants={fadeInUp}
                    custom={index}
                  >
                    {item.ours}
                  </motion.div>
                ))}
                {differentiators.map((item, index) => (
                  <motion.div
                    key={`${item.title}-others`}
                    className="bg-slate-950/50 px-6 py-6 text-sm text-slate-400"
                    variants={fadeInUp}
                    custom={index}
                  >
                    {item.others}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section
            id="clientes"
            className="rounded-3xl border border-white/10 bg-slate-900/40 px-6 py-16 sm:px-12"
          >
            <motion.div
              className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <h2 className="font-display text-4xl text-white">
                  Historias que respaldan nuestra promesa
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  Redes hospitalarias, centros especializados y aseguradoras ya
                  experimentan la tranquilidad de trabajar con un socio que
                  anticipa cada necesidad.
                </p>

                <div className="mt-8 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                  {[
                    "Cirugías complejas",
                    "Urgencias 24/7",
                    "Obra social y aseguradoras",
                    "Laboratorios de diagnóstico",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
                    >
                      <CheckCircle2 className="h-4 w-4 text-sky-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-lg"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <p className="text-lg text-slate-100">“{testimonial.quote}”</p>
                    <div className="mt-4 text-sm text-slate-400">
                      <p className="font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p>{testimonial.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-12 grid gap-6 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-6 text-sm text-sky-100 sm:grid-cols-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {[
                "Hospitales privados Tier 1",
                "Clínicas de alta especialidad",
                "Redes de diagnóstico",
                "Operadores de salud ocupacional",
                "Programas gubernamentales",
                "Aseguradoras médicas",
              ].map((segment) => (
                <div
                  key={segment}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3"
                >
                  <Sparkles className="h-4 w-4 text-sky-300" />
                  {segment}
                </div>
              ))}
            </motion.div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-16 sm:px-12">
            <motion.div
              className="grid gap-12 lg:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
                  <Timer className="h-4 w-4" />
                  Método probado
                </span>
                <h2 className="mt-6 font-display text-4xl text-white">
                  Operamos contigo desde el diagnóstico hasta la optimización
                  continua.
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  Tu equipo obtiene un aliado que entiende cada quirófano, cada
                  indicador financiero y cada auditoría. Nos comprometemos con
                  métricas, no solo con entregas.
                </p>
              </div>

              <div className="grid gap-6">
                {workflow.map((phase, index) => (
                  <motion.div
                    key={phase.step}
                    className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-sky-400/30 hover:bg-slate-900/70"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span className="font-semibold tracking-[0.3em] text-sky-300">
                        {phase.step}
                      </span>
                      Compromiso medible
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-slate-300">{phase.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section
            id="contacto"
            className="relative overflow-hidden rounded-3xl border border-sky-400/40 bg-gradient-to-br from-blue-600/50 via-slate-900/70 to-slate-950 px-6 py-16 sm:px-12"
          >
            <motion.div
              className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl"
              animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className="absolute -top-16 left-12 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.15, 1] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-slate-900">
                  <ShieldCheck className="h-4 w-4" />
                  Empecemos hoy
                </span>
                <h2 className="mt-6 font-display text-4xl text-white">
                  Agenda una sesión estratégica personalizada.
                </h2>
                <p className="mt-4 text-lg text-slate-200">
                  Nuestro equipo clínico-comercial diseñará contigo un roadmap
                  para asegurar abastecimiento, reducir costos ocultos y mejorar
                  la experiencia del paciente.
                </p>

                <div className="mt-8 grid gap-4 text-sm text-slate-100">
                  {contactChannels.map((channel) => {
                    const isExternal = channel.href.startsWith("http");
                    return (
                      <a
                        key={channel.label}
                        href={channel.href}
                        className="group flex items-center gap-4 rounded-2xl border border-white/30 bg-white/10 px-5 py-4 transition hover:border-white hover:bg-white/20"
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                      >
                        <channel.icon className="h-6 w-6 text-slate-900" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-900">
                            {channel.label}
                          </p>
                          <p className="text-white">{channel.value}</p>
                        </div>
                        <ArrowRight className="ml-auto h-4 w-4 text-slate-900 transition-transform group-hover:translate-x-1" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <motion.form
                className="space-y-4 rounded-3xl bg-white/10 p-8 backdrop-blur"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                onSubmit={handleContactSubmit}
              >
                <div>
                  <label
                    htmlFor="nombre"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900"
                  >
                    Nombre y organización
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    placeholder="Ej. Dra. Martínez · Centro Quirúrgico Atlas"
                    className="mt-2 w-full rounded-2xl border border-white/40 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900"
                  >
                    Correo corporativo
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="compras@institucion.com"
                    className="mt-2 w-full rounded-2xl border border-white/40 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensaje"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900"
                  >
                    Reto de abastecimiento
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntanos qué línea de servicio necesitas optimizar y cuándo."
                    className="mt-2 w-full rounded-2xl border border-white/40 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-slate-800"
                >
                  Enviar brief
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-slate-100/70">
                  Al enviar aceptas nuestra política de privacidad y recibir
                  información relevante sobre soluciones clínicas avanzadas.
                </p>
              </motion.form>
            </div>
          </section>
        </main>

        <footer className="z-20 mt-24 flex flex-col gap-6 border-t border-white/10 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-slate-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-semibold text-white">
              MP
            </div>
            <div>
              <p className="font-semibold text-white">MedexPro</p>
              <p>Excelencia en suministros médicos B2B</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <span>© {new Date().getFullYear()} MedexPro</span>
            <span>Privacidad</span>
            <span>Términos</span>
            <span>ISO 13485 · NOM-241 · FDA QSR</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
