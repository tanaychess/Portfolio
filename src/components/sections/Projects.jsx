import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Terminal } from 'lucide-react'
import { projects } from '../../data/portfolioData'
import SectionHeading from '../common/SectionHeading'
import RevealOnScroll from '../common/RevealOnScroll'
import Card from '../common/Card'
import { Sparkle, DashedArrow } from '../common/Doodles'
import { cn } from '../../utils/cn'

const FILTERS = ['All', 'Full Stack', 'Web Apps', 'UI/UX']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  )

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-28 bg-surface-soft overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[380px] h-[380px] rounded-full bg-gold-400/8 glow-orb" />

      {/* Decorative doodles */}
      <Sparkle
        className="hidden lg:block absolute top-24 right-24 w-7 h-7 text-gold-400/40"
        delay={0.6}
      />

      <DashedArrow
        className="hidden lg:block absolute top-28 right-64 w-16 h-14 text-gold-400/30 rotate-12"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

          <SectionHeading
            title="Projects"
            description="Some things I've built."
          />

          {/* Filters */}
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-wrap gap-2">

              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium border transition-all duration-200',

                    filter === f
                      ? 'bg-gold-gradient text-noir border-transparent shadow-glow-gold-sm'
                      : 'border-line bg-card text-muted hover:text-main hover:border-gold-400/50',
                  )}
                >
                  {f}
                </button>
              ))}

            </div>
          </RevealOnScroll>
        </div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">

          <AnimatePresence mode="popLayout">

            {/* Empty state */}
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center text-muted py-16"
              >
                No projects in this category yet — check back soon.
              </motion.p>
            ) : (

              filtered.map((p, i) => (

                <motion.div
                  key={p.title}
                  layout
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.06,
                  }}
                  className="sm:col-span-2 lg:col-span-1"
                >

                  <Card className="p-0 overflow-hidden group h-full flex flex-col">

                    {/* =================================================
                        PROJECT IMAGE
                    ================================================== */}
                    <div
                      className="
                        relative
                        h-48
                        sm:h-52
                        overflow-hidden
                        bg-surface
                      "
                    >

                      {/* Actual project-specific image */}
                      <img
                        src={p.image}
                        alt={`${p.title} project preview`}
                        loading="lazy"
                        className="
                          w-full
                          h-full
                          object-cover
                          object-center
                          transition-transform
                          duration-500
                          ease-out
                          group-hover:scale-105
                        "
                      />

                      {/* Bottom gradient */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-card
                          via-transparent
                          to-transparent
                          opacity-70
                          pointer-events-none
                        "
                      />

                      {/* Category badge */}
                      <span
                        className="
                          absolute
                          top-3
                          left-3
                          inline-flex
                          items-center
                          gap-1.5
                          rounded-full
                          bg-card/90
                          backdrop-blur-md
                          border
                          border-line
                          px-3
                          py-1
                          text-[11px]
                          font-mono
                          text-gold-400
                        "
                      >
                        <Terminal className="w-3 h-3" />
                        {p.category}
                      </span>

                    </div>

                    {/* =================================================
                        PROJECT CONTENT
                    ================================================== */}
                    <div className="p-6 flex flex-col flex-1">

                      {/* Title */}
                      <h3 className="font-display font-semibold text-lg text-main">
                        {p.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-gold-400 text-xs font-mono mt-0.5">
                        {p.subtitle}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-sm text-muted leading-relaxed">
                        {p.description}
                      </p>

                      {/* Highlights */}
                      <ul className="mt-4 space-y-1.5">

                        {p.highlights.slice(0, 3).map((h) => (
                          <li
                            key={h}
                            className="
                              flex
                              gap-2
                              text-[13px]
                              text-muted
                              leading-snug
                            "
                          >
                            <span
                              className="
                                mt-1.5
                                w-1
                                h-1
                                rounded-full
                                bg-gold-400
                                shrink-0
                              "
                            />

                            {h}
                          </li>
                        ))}

                      </ul>

                      {/* Tech stack */}
                      <div className="mt-5 flex flex-wrap gap-2">

                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="
                              rounded-md
                              border
                              border-line
                              bg-surface
                              px-2.5
                              py-1
                              text-[11px]
                              font-medium
                              text-main
                            "
                          >
                            {s}
                          </span>
                        ))}

                      </div>

                      {/* Links */}
                      <div
                        className="
                          mt-6
                          pt-4
                          border-t
                          border-line
                          flex
                          items-center
                          gap-5
                        "
                      >

                        {/* Live Demo */}
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            text-sm
                            font-semibold
                            text-gold-400
                            hover:text-gold-300
                            transition-colors
                          "
                        >
                          Live Demo

                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        {/* GitHub */}
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            text-sm
                            font-semibold
                            text-main
                            hover:text-gold-400
                            transition-colors
                          "
                        >
                          GitHub

                          <Github className="w-3.5 h-3.5" />
                        </a>

                      </div>

                    </div>

                  </Card>

                </motion.div>

              ))

            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  )
}
