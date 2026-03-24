'use client'

import { useState, useEffect, useRef } from 'react'

const COLORS = {
  bg: "#0a0a0a",
  bgCard: "#111111",
  bgCardHover: "#1a1a1a",
  border: "#222222",
  borderAccent: "#333333",
  text: "#ffffff",
  textMuted: "#888888",
  textSecondary: "#aaaaaa",
  accent: "#7f56da",
  accentGlow: "#a582f7",
  accentDark: "#1e1036",
  gold: "#e8c547",
  goldGlow: "#d4a017",
  success: "#4ade80",
  successDark: "#166534",
}

function AnimatedSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary/90"
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Kopierad!
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          Kopiera länk
        </>
      )}
    </button>
  )
}

function RewardCard({ icon, title, description, badge }: { icon: React.ReactNode; title: string; description: string; badge: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-3xl bg-white/3 border border-white/5 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/10 h-full"
    >
      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white shadow-inner">
            {icon}
          </div>
          <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-semibold tracking-wide">
            {badge}
          </span>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-[15px] leading-relaxed text-white/50">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function ReferralPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const referralLink = "https://www.acasting.se/signup?ref=DITT_ID"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-bg text-text font-sans overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center text-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-100 sm:w-150 h-100 sm:h-150 rounded-full bg-[radial-gradient(circle,rgba(200,162,255,0.09)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-30%] right-[-15%] w-75 sm:w-125 h-75 sm:h-125 rounded-full bg-[radial-gradient(circle,rgba(232,197,71,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-200">
          <AnimatedSection delay={0.1}>
            <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              Bjud in vänner.<br />Få Premium <span className="text-primary">Gratis</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="mb-4 text-base sm:text-lg text-white/70 max-w-xl mx-auto">
              Dela din unika referral-länk med vänner och kollegor. 
              För varje person som registrerar sig får du gratis Premium-tid 
              – och de får också en bonus.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary/90"
              >
                Så fungerar det
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="#share"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary/90"
              >
                Dela nu
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW IT WORKS - Premium Grid */}
      <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-12 sm:mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Så fungerar det</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Tre steg till gratis Premium</h3>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                n: 1,
                title: "Dela din länk",
                desc: "Hitta din unika referral-länk i din Acasting-profil. Dela den via sociala medier, mejl eller direkt till vänner som passar på plattformen.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                ),
              },
              {
                n: 2,
                title: "Vännen registrerar sig",
                desc: "När någon registrerar sig via din länk får de automatiskt 7 dagars gratis Premium. Registrerar de sig inom 48 timmar? Då får de 14 dagars bonus.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
                ),
              },
              {
                n: 3,
                title: "Du får Premium gratis",
                desc: "Du får 1 månad gratis Premium per referral. Tre referrals? Ytterligare 1 månad bonus. Det finns inget tak – fortsätt dela, fortsätt tjäna.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>
                ),
              },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl bg-white/3 p-8 border border-white/5 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/10 h-full">
                  <span className="absolute -right-2 -top-6 text-[140px] font-black leading-none text-white/3 transition-all duration-500 group-hover:text-white/6 select-none">
                    {step.n}
                  </span>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white shadow-inner">
                      {step.icon}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-white">{step.title}</h4>
                      <p className="text-[15px] leading-relaxed text-white/50">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* REWARDS CARDS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-12 sm:mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Premium</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Vad får du som Premium?</h3>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <RewardCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>}
                title="Prioriterad profil"
                description="Premium-medlemmar hamnar högst upp i sökningar. Fler ögon på din profil = fler chanser."
                badge="Premium"
              />
              <RewardCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>}
                title="Digital Twin"
                description="Licensiera ditt utseende för AI-genererade bilder och öppna en helt ny inkomstkälla."
                badge="AI"
              />
              <RewardCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
                title="Utökad sekretess"
                description="Kontrollera vem som ser din profil. Begränsa åtkomst till enbart registrerade företag."
                badge="Integritet"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SHARE SECTION */}
      <section id="share" className="max-w-200 mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <AnimatedSection>
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-25 left-1/2 -translate-x-1/2 w-100 h-75 bg-[radial-gradient(circle,rgba(200,162,255,0.09)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10">
              <span className="text-4xl sm:text-5xl block mb-4">🔗</span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 tracking-tight">Din referral-länk</h2>
              <p className="text-sm sm:text-base text-white/70 mb-6">
                Kopiera och dela med vänner – de får Premium-bonus och du också.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center p-3 sm:p-4 bg-bg border border-border rounded-xl max-w-125 mx-auto">
                <code className="text-xs sm:text-sm text-white/80 break-all flex-1 text-center sm:text-left font-mono">
                  {referralLink}
                </code>
                <CopyButton text={referralLink} />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* INVITE BY EMAIL */}
      <section className="max-w-200 mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <AnimatedSection>
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Bjud in via e-post</h3>
            <p className="text-sm sm:text-base text-white/70 mb-6">
              Skriv in din väns e-postadress – vi skickar en personlig inbjudan med din referral-länk.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="namn@exempel.se"
                className="flex-1 min-w-50 px-4 py-3 rounded-lg border border-border-accent bg-bg text-white text-base outline-none transition-colors focus:border-accent"
              />
              <button
                onClick={handleSubmit}
                disabled={submitted}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-8 py-3 font-medium text-white transition-colors hover:bg-primary/90"
              >
                {submitted ? "Skickat! ✓" : "Skicka inbjudan"}
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQ - Modern Accordion */}
      <section className="border-t border-white/5 bg-bg py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Vanliga frågor</h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">Har du frågor?</h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-3">
                <details className="group rounded-2xl bg-white/3 border border-white/5 transition-all duration-300">
                  <summary className="flex cursor-pointer items-center justify-between p-6 list-none">
                    <span className="text-lg font-medium text-white">Hur hittar jag min referral-länk?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 transition-transform duration-300 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 text-sm leading-relaxed">
                    Din unika referral-länk finns i din profil under 'Referral-program'. Du kan kopiera den direkt och dela via valfri kanal.
                  </div>
                </details>

                <details className="group rounded-2xl bg-white/3 border border-white/5 transition-all duration-300">
                  <summary className="flex cursor-pointer items-center justify-between p-6 list-none">
                    <span className="text-lg font-medium text-white">Finns det ett tak på belöningarna?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 transition-transform duration-300 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 text-sm leading-relaxed">
                    Nej! Det finns inget tak. Ju fler vänner du bjuder in, desto mer gratis Premium-tid får du. Tre referrals ger dessutom en extra bonusmånad.
                  </div>
                </details>

                <details className="group rounded-2xl bg-white/3 border border-white/5 transition-all duration-300">
                  <summary className="flex cursor-pointer items-center justify-between p-6 list-none">
                    <span className="text-lg font-medium text-white">Vad får min vän?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 transition-transform duration-300 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 text-sm leading-relaxed">
                    Din vän får 7 dagars gratis Premium direkt vid registrering. Om de registrerar sig inom 48 timmar efter att de fått din länk får de 14 dagars bonus istället.
                  </div>
                </details>

                <details className="group rounded-2xl bg-white/3 border border-white/5 transition-all duration-300">
                  <summary className="flex cursor-pointer items-center justify-between p-6 list-none">
                    <span className="text-lg font-medium text-white">Hur lång tid tar det innan jag får min Premium?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 transition-transform duration-300 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 text-sm leading-relaxed">
                    Du får din Premium-bonus direkt när din vän slutför sin registrering via din referral-länk.
                  </div>
                </details>

                <details className="group rounded-2xl bg-white/3 border border-white/5 transition-all duration-300">
                  <summary className="flex cursor-pointer items-center justify-between p-6 list-none">
                    <span className="text-lg font-medium text-white">Kan jag dela min länk på sociala medier?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 transition-transform duration-300 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 text-sm leading-relaxed">
                    Absolut! Dela din länk var du vill – Instagram, TikTok, LinkedIn, X, i mejl, eller i gruppchatter.
                  </div>
                </details>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-16 sm:py-20 text-center border-t border-border relative overflow-hidden px-4 sm:px-6">
        <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-125 sm:w-175 h-100 sm:h-125 bg-[radial-gradient(circle,rgba(200,162,255,0.08)_0%,transparent_70%)] pointer-events-none" />

        <AnimatedSection>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.75rem,5vw,3rem)] font-extrabold tracking-tight mb-4">
              Börja tjäna gratis Premium idag
            </h2>
            <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8 max-w-xl mx-auto">
              Dela din referral-länk och låt nätverket jobba för dig.
            </p>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary/90"
            >
              Bli Acasting Premium
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
