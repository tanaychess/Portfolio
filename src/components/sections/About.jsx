import { motion } from 'framer-motion'
import { Target, Zap, Crown, Eye } from 'lucide-react'
import { profile, traits, techStack } from '../../data/portfolioData'
import RevealOnScroll from '../common/RevealOnScroll'
import Card from '../common/Card'
import { Sparkle, DashedArrow, ChatBubble } from '../common/Doodles'

const ICONS = {
  target: Target,
  zap: Zap,
  crown: Crown,
  eye: Eye,
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-surface-soft overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-[380px] h-[380px] rounded-full bg-gold-400/8 glow-orb" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* =====================================================
              LEFT: TEXT + TRAIT CARDS
          ====================================================== */}
          <div>

            {/* Heading */}
            <RevealOnScroll>
              <h2 className="font-display font-bold text-3xl md:text-[2.6rem] text-main">
                About <span className="text-gold-400">Me</span>
              </h2>
            </RevealOnScroll>

            {/* Introduction */}
            <RevealOnScroll delay={0.08}>
              <p className="mt-5 text-muted leading-relaxed max-w-xl text-[15px] sm:text-base">
                {profile.intro}
              </p>
            </RevealOnScroll>

            {/* Traits */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {traits.map((trait, i) => {
                const Icon = ICONS[trait.icon]

                return (
                  <RevealOnScroll
                    key={trait.title}
                    delay={0.1 + i * 0.06}
                  >
                    <Card className="p-5 h-full">

                      <div className="w-10 h-10 rounded-lg bg-gold-gradient grid place-items-center mb-3">
                        <Icon
                          className="w-5 h-5 text-noir"
                          strokeWidth={2.2}
                        />
                      </div>

                      <h3 className="font-display font-semibold text-main text-[15px]">
                        {trait.title}
                      </h3>

                      <p className="mt-1.5 text-sm text-muted leading-relaxed">
                        {trait.description}
                      </p>

                    </Card>
                  </RevealOnScroll>
                )
              })}

            </div>

            {/* Technologies */}
            <RevealOnScroll delay={0.35}>
              <div className="mt-6 card-noir p-5">

                <p className="text-xs tracking-[0.2em] uppercase text-muted font-mono mb-3">
                  Technologies I work with
                </p>

                <div className="flex flex-wrap gap-2.5">

                  {techStack.map((t) => (
                    <span
                      key={t.name}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-line
                        bg-surface
                        px-3.5
                        py-1.5
                        text-xs
                        font-medium
                        text-main
                        hover:border-gold-400/60
                        hover:text-gold-400
                        transition-colors
                        duration-200
                      "
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      {t.name}
                    </span>
                  ))}

                </div>
              </div>
            </RevealOnScroll>

          </div>

          {/* =====================================================
              RIGHT: ABOUT ILLUSTRATION
          ====================================================== */}
          <div
            className="
              relative
              min-h-[340px]
              sm:min-h-[420px]
              lg:min-h-[480px]
              order-first
              lg:order-last
              flex
              items-center
              justify-center
            "
          >

            {/* Main image animation */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                w-full
                flex
                items-center
                justify-center
              "
            >

              {/* Responsive image wrapper */}
              <div
                className="
                  relative
                  w-full
                  max-w-[340px]
                  sm:max-w-[400px]
                  lg:max-w-[460px]
                  aspect-square
                  flex
                  items-center
                  justify-center
                "
              >

                {/* Soft yellow glow behind illustration */}
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
                    ABOUT IMAGE
                    public/about.png
                ================================================== */}
                <img
                  src="/about.png"
                  alt="About me illustration"
                  className="
                    relative
                    z-10
                    w-full
                    h-full
                    object-contain
                    drop-shadow-[0_20px_45px_rgba(242,193,78,0.15)]
                  "
                />

              </div>

            </motion.div>

            {/* =====================================================
                FLOATING CHAT ICON
            ====================================================== */}
            <motion.div
              className="
                absolute
                top-4
                right-2
                sm:right-8
                card-noir
                p-3
                z-20
              "
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ChatBubble
                className="w-9 h-8 text-gold-400"
              />
            </motion.div>

            {/* =====================================================
                SPARKLES
            ====================================================== */}
            <Sparkle
              className="
                absolute
                top-10
                left-6
                w-6
                h-6
                text-gold-400
                z-20
              "
              delay={0.4}
            />

            <Sparkle
              className="
                absolute
                bottom-10
                right-4
                w-5
                h-5
                text-gold-300
                z-20
              "
              delay={1.3}
            />

            {/* =====================================================
                DASHED ARROW
            ====================================================== */}
            <DashedArrow
              className="
                hidden
                lg:block
                absolute
                -top-6
                left-6
                w-16
                h-14
                text-gold-400/40
                rotate-45
                z-20
              "
            />

          </div>

        </div>
      </div>
    </section>
  )
}
