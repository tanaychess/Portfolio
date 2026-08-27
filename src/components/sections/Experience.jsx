import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Crown, MapPin } from 'lucide-react'
import { timeline } from '../../data/portfolioData'
import SectionHeading from '../common/SectionHeading'
import RevealOnScroll from '../common/RevealOnScroll'
import Card from '../common/Card'
import { TrophyIcon, CurvedConnector } from '../common/Doodles'

const TYPE_ICON = { work: Briefcase, education: GraduationCap, chess: Crown }
const TYPE_LABEL = { work: 'Experience', education: 'Education', chess: 'Beyond Code' }

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-28 bg-surface overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 w-[340px] h-[340px] rounded-full bg-gold-400/8 glow-orb" />
      <TrophyIcon className="hidden xl:block absolute top-24 right-16 w-11 h-11 text-gold-400/30 animate-float" />
      <CurvedConnector className="hidden xl:block absolute bottom-16 right-8 w-52 h-32 text-gold-400/20" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <SectionHeading
          title="Experience"
          highlight=""
          description="My professional journey, academic path, and the discipline I bring from the chessboard."
        />

        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-px bg-line" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const Icon = TYPE_ICON[item.type]
              return (
                <RevealOnScroll key={`${item.title}-${i}`} delay={i * 0.08}>
                  <div className="relative pl-14 sm:pl-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: i * 0.08 }}
                      className="absolute left-0 sm:left-1 top-0 w-10 h-10 rounded-full bg-gold-gradient grid place-items-center shadow-glow-gold-sm ring-4 ring-surface"
                    >
                      <Icon className="w-[18px] h-[18px] text-noir" strokeWidth={2.4} />
                    </motion.div>

                    <Card className="p-6" hover={true}>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <span className="inline-block text-[11px] font-mono tracking-wide uppercase text-gold-400/80 mb-1">
                            {TYPE_LABEL[item.type]}
                          </span>
                          <h3 className="font-display font-semibold text-lg text-main">{item.title}</h3>
                          <p className="text-gold-400 text-sm font-medium mt-0.5">{item.org}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted font-mono">
                            {item.period}
                          </span>
                          {item.location && (
                            <p className="mt-1.5 flex items-center justify-end gap-1 text-xs text-muted">
                              <MapPin className="w-3 h-3" /> {item.location}
                            </p>
                          )}
                        </div>
                      </div>

                      <ul className="mt-4 space-y-2">
                        {item.points.map((p) => (
                          <li key={p} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>

                      {item.stack && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-md border border-line bg-surface px-2.5 py-1 text-[11px] font-medium text-main"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.current && (
                        <span className="absolute -top-2 right-6 rounded-full bg-gold-gradient px-2.5 py-0.5 text-[10px] font-bold text-noir tracking-wide uppercase">
                          Present
                        </span>
                      )}
                    </Card>
                  </div>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
