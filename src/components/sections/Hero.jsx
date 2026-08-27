import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowUpRight } from 'lucide-react'
import { profile, stats, techStack } from '../../data/portfolioData'
import {
  Sparkle,
  DashedArrow,
  CodeBrackets,
  BulbIcon,
  BrowserFrame,
} from '../common/Doodles'
import RevealOnScroll from '../common/RevealOnScroll'

const WORDS = [
  'the web.',
  'ideas real.',
  'clean code.',
  'with chess logic.',
]

function useTypewriter(words, speed = 70, pause = 1400) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting
              ? current.slice(0, t.length - 1)
              : current.slice(0, t.length + 1)
          )
        },
        deleting ? speed / 2 : speed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(WORDS)

  return (
    <section
      id="home"
      className="relative pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-surface"
    >
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gold-400/10 glow-orb" />

      <div className="pointer-events-none absolute top-40 right-0 w-[380px] h-[380px] rounded-full bg-gold-500/10 glow-orb" />

      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* =========================================================
              LEFT COLUMN
          ========================================================== */}
          <div>
            {/* Greeting */}
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-sm text-main">
                <span className="text-base">👋</span>

                Hi, I&apos;m {profile.firstName}
              </span>
            </RevealOnScroll>

            {/* Hero Heading */}
            <RevealOnScroll delay={0.08}>
              <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-main">
                I build things for
                <br />

                <span className="text-gold-400">
                  {typed}
                </span>

                <span className="caret h-[0.85em] align-middle" />
              </h1>
            </RevealOnScroll>

            {/* Description */}
            <RevealOnScroll delay={0.16}>
              <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-lg">
                {profile.tagline}
              </p>
            </RevealOnScroll>

            {/* Buttons */}
            <RevealOnScroll delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">

                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()

                    document
                      .getElementById('projects')
                      ?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      })
                  }}
                  className="btn-gold"
                >
                  View My Work

                  <ArrowUpRight className="w-4 h-4" />
                </a>

              </div>
            </RevealOnScroll>

            {/* Tech Stack */}
            <RevealOnScroll delay={0.32}>
              <div className="mt-10">

                <p className="text-xs tracking-[0.2em] uppercase text-muted font-mono">
                  Tech Stack
                </p>

                <div className="mt-3 flex flex-wrap gap-2.5">

                  {techStack.slice(0, 6).map((t) => (
                    <span
                      key={t.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-medium text-main"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />

                      {t.name}
                    </span>
                  ))}

                </div>
              </div>
            </RevealOnScroll>

            {/* Stats */}
            <RevealOnScroll delay={0.4}>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">

                {stats.map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -4 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="card-noir px-4 py-4 text-center"
                  >
                    <p className="font-display font-bold text-xl sm:text-2xl text-gold-400">
                      {s.value}
                    </p>

                    <p className="mt-1 text-[11px] sm:text-xs text-muted leading-tight">
                      {s.label}
                    </p>
                  </motion.div>
                ))}

              </div>
            </RevealOnScroll>
          </div>

          {/* =========================================================
              RIGHT COLUMN — TANAY IMAGE
          ========================================================== */}
          <div className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[560px] flex items-center justify-center">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >

              {/* Responsive image container */}
              <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[560px] aspect-square flex items-center justify-center">

                {/* Soft yellow glow behind image */}
                <div
                  className="
                    absolute
                    inset-[8%]
                    rounded-full
                    bg-gold-400/10
                    animate-pulse-glow
                    blur-2xl
                  "
                />

                {/* =================================================
                    YOUR PHOTO
                    public/tanay.png
                ================================================== */}
                <img
                  src="/tanay.png"
                  alt={`${profile.firstName} - Software Engineer`}
                  className="
                    relative
                    z-10
                    w-full
                    h-full
                    object-contain
                    rounded-3xl
                    drop-shadow-[0_20px_45px_rgba(242,193,78,0.15)]
                  "
                />

              </div>
            </motion.div>

            {/* =====================================================
                FLOATING CODE DOODLE
            ====================================================== */}
            <motion.div
              className="
                absolute
                top-2
                right-2
                sm:top-6
                sm:right-6
                card-noir
                p-3
                shadow-glow-gold-sm
                z-20
              "
              animate={{
                y: [0, -14, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <CodeBrackets className="w-8 h-8 text-gold-400" />
            </motion.div>

            {/* =====================================================
                FLOATING BROWSER DOODLE
            ====================================================== */}
            <motion.div
              className="
                absolute
                bottom-16
                sm:bottom-24
                left-0
                card-noir
                p-3
                z-20
              "
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              <BrowserFrame className="w-9 h-8 text-main/80" />
            </motion.div>

            {/* =====================================================
                FLOATING BULB DOODLE
            ====================================================== */}
            <motion.div
              className="
                absolute
                top-16
                sm:top-24
                left-2
                sm:left-6
                z-20
              "
              animate={{
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <BulbIcon className="w-9 h-9 text-gold-400" />
            </motion.div>

            {/* =====================================================
                SPARKLES
            ====================================================== */}
            <Sparkle
              className="
                absolute
                top-4
                left-1/3
                w-6
                h-6
                text-gold-400
                z-20
              "
              delay={0.3}
            />

            <Sparkle
              className="
                absolute
                bottom-6
                right-8
                w-5
                h-5
                text-gold-300
                z-20
              "
              delay={1.1}
            />

            <Sparkle
              className="
                absolute
                bottom-1/3
                left-2
                w-4
                h-4
                text-gold-300
                z-20
              "
              delay={1.8}
            />

            {/* =====================================================
                DASHED ARROW
            ====================================================== */}
            <DashedArrow
              className="
                hidden
                lg:block
                absolute
                -bottom-6
                -left-10
                w-20
                h-16
                text-gold-400/50
                -scale-x-100
                z-20
              "
            />

          </div>

        </div>
      </div>
    </section>
  )
}
