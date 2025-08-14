import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Separator } from './components/ui/separator'
import { Mail, Phone, MapPin, Linkedin, Download, CircuitBoard, Cpu, GitBranch, GraduationCap, Wrench, CheckCircle2 } from 'lucide-react'

const skills = {
  'Électronique & Embarqué': [
    'Analogique', 'Numérique', 'FPGA', 'DSP', 'Microcontrôleur 16F84', 'Systèmes embarqués',
  ],
  'Protocoles': [
    'CANHS', 'CANFD', 'LIN', 'TCP/IP', 'FlexRay', 'I2C', 'UART', 'UDS',
  ],
  'Programmation': [
    'C', 'C++', 'Python', 'Java (POO)', 'Assembleur', 'CAPL',
  ],
  'Outils': [
    'CANoe', 'CANalyzer', 'MATLAB/Simulink', 'dSPACE', 'TyphoonHIL',
  ],
  'Normes & Méthodes': [
    'ISO 26262', 'ISO 14229', 'ISO 11898', 'ISTQB', 'HIL Testing', 'Cycle en V',
  ],
}

const experiences = [
  {
    role: 'Ingénieur Chef de Projet',
    company: 'NETEC',
    period: 'Août 2024 – Février 2025',
    points: [
      'Conception et dimensionnement d’installations électriques',
      'Élaboration des plannings, devis et suivi d’exécution de chantier',
      'Gestion d’équipes et répartition des tâches',
    ],
  },
  {
    role: 'Projet de fin d’études',
    company: 'NGE Automotive',
    period: 'Février 2024 – Août 2024',
    points: [
      'Plans de test (couches basses OSI) selon critères PSA Stellantis',
      'Tests sur transceivers avec oscilloscope ; analyse de trames CAN/LIN',
      'Automatisation de scénarios de validation et analyse de logs (C)',
      'Validation ECU selon spécifications OEM',
    ],
  },
]

const education = [
  { title: 'Diplôme d’Ingénieur d’État – GSEIR', school: 'ENSA Oujda', period: '2021 – 2024' },
  { title: 'DUT Électronique & Informatique Industrielle', school: 'EST Oujda', period: '2019 – 2021' },
  { title: 'Baccalauréat Sciences & Technologies Électriques', school: 'Lycée El Fath, Taourirt', period: '2019' },
]

const projects = [
  { title: 'Système avancé de contrôle d’humidité & température', blurb: 'Conçu pour environnements spécifiques avec supervision fiable.' },
  { title: 'Scanner 3D low‑cost', blurb: 'Prototype fonctionnel pour acquisition 3D à budget réduit.' },
  { title: 'Véhicule autonome', blurb: 'Conception et développement d’un mini‑AV pour validation d’algorithmes.' },
]

const languages = [
  { name: 'Arabe', level: 'Langue maternelle' },
  { name: 'Français', level: 'Professionnel' },
  { name: 'Anglais', level: 'C1' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl grid place-items-center bg-slate-900 text-white">
              <Cpu className="h-5 w-5" />
            </div>
            <span className="font-semibold">Khalid Boujtat</span>
          </div>
          <div className="hidden sm:flex gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900">Profil</a>
            <a href="#experience" className="hover:text-slate-900">Expérience</a>
            <a href="#skills" className="hover:text-slate-900">Compétences</a>
            <a href="#projects" className="hover:text-slate-900">Projets</a>
            <a href="#education" className="hover:text-slate-900">Formation</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              <span className="hidden sm:inline">Me contacter</span><span className="sm:hidden">Contact</span>
            </Button>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Ingénieur Systèmes Électroniques & Embarqués
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Tests & validation ECU automobile, protocoles CAN/LIN/FlexRay, automatisation en C, et méthodes Cycle en V.
              Disponible immédiatement pour contribuer à vos projets de R&D et d’industrialisation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge className="px-3 py-1">Validation ECU</Badge>
              <Badge className="px-3 py-1">CAN / LIN</Badge>
              <Badge className="px-3 py-1">Automatisation de tests (C)</Badge>
              <Badge className="px-3 py-1">HIL</Badge>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}><GitBranch className="mr-2 h-4 w-4"/>Voir les projets</Button>
              <a href="/CV_Khalid_BOUJTAT.pdf" download className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
                <Download className="h-4 w-4"/> Télécharger le CV
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-slate-900"><CircuitBoard className="h-5 w-5"/> Points forts</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Plans de test & analyse de trames</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Oscilloscope, transceivers, couches OSI</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Scripts C / CAPL, génération de rapports</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> OEM (PSA Stellantis)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> ISO 26262, 14229, 11898</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> ISTQB, HIL Testing</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl"/>

      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">Profil</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Passionné par l’électronique, les systèmes embarqués et les nouvelles technologies, j’ai acquis une expérience
              enrichissante dans les tests de calculateurs automobiles : rédaction de Test Purpose, développement de scénarios
              d’essais et automatisation. Je maîtrise les protocoles CAN et LIN et j’apprécie les environnements méthodologiques
              exigeants (Cycle en V) pour livrer des validations fiables et traçables.
            </p>
          </div>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-slate-900">Infos rapides</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Oujda, Maroc</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> +212 656-668364</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> khalidboujtat0@gmail.com</div>
              <a className="flex items-center gap-2 hover:underline" href="https://www.linkedin.com/in/khalid-boujtat-0aa523210" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4"/> LinkedIn</a>
              <div className="flex items-center gap-2"><Wrench className="h-4 w-4"/> Disponibilité : immédiate</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <h2 className="text-2xl font-bold text-slate-900">Expérience</h2>
        <div className="mt-6 grid gap-6">
          {experiences.map((exp, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <Card className="border-slate-200/80">
                <CardHeader className="pb-2">
                  <CardTitle className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-slate-900">{exp.role} – <span className="font-normal text-slate-700">{exp.company}</span></span>
                    <span className="text-sm font-normal text-slate-500">{exp.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    {exp.points.map((p, i) => (<li key={i}>{p}</li>))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <h2 className="text-2xl font-bold text-slate-900">Compétences</h2>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <Card key={group} className="border-slate-200/80">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-900">{group}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {items.map((it) => (<Badge key={it} variant="secondary" className="px-3 py-1">{it}</Badge>))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <h2 className="text-2xl font-bold text-slate-900">Projets</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((prj, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <Card className="hover:shadow-md transition-shadow h-full border-slate-200/80">
                <CardHeader className="pb-2">
                  <CardTitle className="text-slate-900">{prj.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">{prj.blurb}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <h2 className="text-2xl font-bold text-slate-900">Formation</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {education.map((ed, i) => (
            <Card key={i} className="border-slate-200/80">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-900 flex items-center gap-2"><GraduationCap className="h-5 w-5"/> {ed.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between text-slate-700">
                <span>{ed.school}</span>
                <span className="text-sm text-slate-500">{ed.period}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <h2 className="text-2xl font-bold text-slate-900">Langues</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {languages.map((l) => (<Badge key={l.name} className="px-3 py-1">{l.name} — {l.level}</Badge>))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <Card className="border-slate-200/80">
          <CardContent className="py-6 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Entrons en contact</h2>
              <p className="mt-2 text-slate-600">Pour toute opportunité en Test & Validation automobile ou systèmes embarqués, écrivez‑moi ou appelez‑moi.</p>
              <div className="mt-4 space-y-2 text-slate-700">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> khalidboujtat0@gmail.com</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> +212 656-668364</div>
                <a className="flex items-center gap-2 hover:underline" href="https://www.linkedin.com/in/khalid-boujtat-0aa523210" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4"/> Profil LinkedIn</a>
              </div>
            </div>
            <form className="space-y-3" onSubmit={(e)=>e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input className="w-full rounded-2xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Votre nom"/>
                <input className="w-full rounded-2xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" type="email" placeholder="Votre email"/>
              </div>
              <input className="w-full rounded-2xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Sujet"/>
              <textarea className="w-full rounded-2xl border border-slate-300 px-3 py-2 h-28 resize-y focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Message"/>
              <Button className="w-full sm:w-auto" type="button">Envoyer</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <div id="cv" className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <a href="/CV_Khalid_BOUJTAT.pdf" download className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
          <Download className="h-4 w-4"/> Télécharger la version PDF du CV
        </a>
      </div>

      <footer className="border-t border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Khalid Boujtat — Construit avec React + Tailwind
        </div>
      </footer>
    </div>
  )
}
